from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import tensorflow as tf
import numpy as np
from PIL import Image
import io

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model
model = tf.keras.models.load_model("models/pneumonia_model.h5")
labels = ["Normal", "Pneumonia"]

def preprocess_image(file):
    image = Image.open(io.BytesIO(file)).convert("RGB")
    image = image.resize((224, 224))
    image = np.array(image) / 255.0
    image = np.expand_dims(image, axis=0)
    return image

# Prediction endpoint
@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    contents = await file.read()
    img = preprocess_image(contents)

    preds = model.predict(img)[0]

    # Handle both sigmoid & softmax
    if len(preds) == 1:
        prob_pneumonia = float(preds[0])
        prob_normal = 1 - prob_pneumonia
    else:
        prob_normal = float(preds[0])
        prob_pneumonia = float(preds[1])

    # 🔥 Calibration (reduces fake confidence)
    import numpy as np
    def calibrate(p, t=1.5):
        p = np.clip(p, 1e-6, 1 - 1e-6)
        return 1 / (1 + np.exp(-np.log(p/(1-p)) / t))

    prob_pneumonia = calibrate(prob_pneumonia)
    prob_normal = calibrate(prob_normal)

    prediction = "Pneumonia" if prob_pneumonia > prob_normal else "Normal"
    confidence = max(prob_pneumonia, prob_normal) * 100

    # 🔥 GradCAM (optional but important)
    heatmap_path = None
    try:
        heatmap = make_gradcam_heatmap(img, model, "Conv_1")
        heatmap_path = overlay_heatmap(file.filename, heatmap)
    except:
        pass  # don’t crash if gradcam fails

    return {
        "prediction": prediction,
        "confidence": round(min(confidence, 98.5), 2),
        "probabilities": {
            "Normal": round(prob_normal * 100, 2),
            "Pneumonia": round(prob_pneumonia * 100, 2),
        },
        "heatmap": heatmap_path
    }

# Health check
@app.post("/health-check")
async def health_check(data: dict):
    temp = float(data.get("temperature", 0))
    oxygen = float(data.get("oxygen", 100))
    cough = data.get("cough", False)

    if temp > 100 and oxygen < 94 and cough:
        risk = "High Risk"
    elif temp > 99 or oxygen < 95:
        risk = "Medium Risk"
    else:
        risk = "Low Risk"

    return {"risk": risk}