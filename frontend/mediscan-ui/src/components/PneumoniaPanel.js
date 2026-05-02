import React, { useState } from "react";
import axios from "axios";

export default function PneumoniaPanel() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFile = (e) => {
    const f = e.target.files[0];
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const analyze = async () => {
    if (!file) return alert("Upload image");

    const form = new FormData();
    form.append("file", file);

    setLoading(true);

    try {
      const res = await axios.post("http://127.0.0.1:8000/predict", form);
      setResult(res.data);
    } catch (e) {
      alert("Backend error");
    }

    setLoading(false);
  };

  return (
    <div className="panel">
      <h2>Pneumonia Detection</h2>

      <input type="file" onChange={handleFile} />
      <button onClick={analyze}>Analyze</button>

      {preview && (
        <img src={preview} className="preview" alt="preview" />
      )}

      {loading && <div className="loader"></div>}

      {result && (
        <div className="result">
          <h3 className={result.prediction === "Pneumonia" ? "red" : "green"}>
            {result.prediction}
          </h3>

          <p>Confidence: {result.confidence}%</p>

          <div className="bar">
            <div
              className="fill"
              style={{ width: result.confidence + "%" }}
            ></div>
          </div>

          <p>Normal: {result.probabilities.Normal}%</p>
          <p>Pneumonia: {result.probabilities.Pneumonia}%</p>

          {result.heatmap && (
            <img
              src={`http://127.0.0.1:8000/${result.heatmap}`}
              className="heatmap"
              alt="heatmap"
            />
          )}
        </div>
      )}
    </div>
  );
}