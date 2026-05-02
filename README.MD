# 🩺 MediScan AI

MediScan AI is a full-stack healthcare web application that uses deep learning to assist in **pneumonia detection from chest X-ray images** and provides a **basic daily health risk analysis system**.

> ⚠️ Note: This is a prototype built for academic purposes and is not a replacement for professional medical diagnosis.

---

## 🚀 Features

* 🧠 AI-based Pneumonia Detection (X-ray images)
* 📊 Confidence-based prediction output
* 🩺 Daily Health Check (risk estimation)
* ⚡ FastAPI backend for real-time responses
* 💻 Clean React-based dashboard UI

---

## 🏗️ System Architecture

The system follows a **3-layer architecture**:

* **Presentation Layer (Frontend)**
  Built with React.js for user interaction, image upload, and result display

* **Application Layer (Backend)**
  Developed using FastAPI to handle API requests and process data

* **AI Model Layer**
  TensorFlow/Keras model for classifying X-ray images as Normal or Pneumonia

---

## 🔄 Workflow

1. User uploads X-ray image
2. Frontend sends request to backend
3. Backend preprocesses image
4. AI model predicts result
5. Backend sends response
6. Frontend displays output

---

## 🧠 Tech Stack

* **Frontend:** React.js, CSS
* **Backend:** FastAPI (Python)
* **AI Model:** TensorFlow / Keras
* **Communication:** REST APIs (Axios)

---

## 📂 Project Structure

mediscan-ai/
│
├── backend/
│   ├── main.py
│   ├── pneumonia.py
│   ├── health.py
│   ├── models/
│   │   └── pneumonia_model.h5
│   └── uploads/
│
├── frontend/
│   └── mediscan-ui/
│       ├── src/
│       ├── components/
│       └── styles/
│
├── ai_models/
│   └── train_xray.py
│
└── README.md

---

## ⚙️ Setup Instructions

### Backend

cd backend
pip install -r requirements.txt
python -m uvicorn main:app --reload

Backend runs at: http://127.0.0.1:8000

---

### Frontend

cd frontend/mediscan-ui
npm install
npm start

Frontend runs at: http://localhost:3000

---

## 📊 Sample Output

* Prediction: Normal / Pneumonia
* Confidence Score (%)
* Health Risk Level

---

## ⚠️ Limitations

* Model accuracy depends on dataset quality
* Limited to pneumonia detection only
* Not clinically validated
* Health check is basic estimation

---

## 🔮 Future Scope

* Multi-disease detection (TB, COVID, etc.)
* Improved accuracy with larger datasets
* User login & history tracking
* Cloud deployment (AWS / GCP)

---

## 👨‍💻 Contributors

* Your Name
* Team Members

---

## 📜 License

Academic / Educational Use Only

---

# 📌 GitHub Repo Description

MediScan AI is a full-stack healthcare web application that uses deep learning to detect pneumonia from chest X-ray images and provides basic health risk analysis.

---

# 🎯 How to Position This Project (Important)

Say this in viva / resume:

👉 “AI-based diagnostic assistant prototype for pneumonia detection and basic health monitoring.”

NOT:
❌ “Highly accurate medical system”

---

# 🔥 One-Line Pitch

“Deep learning-powered web app for pneumonia detection with real-time health insights.”
