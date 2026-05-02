import React, { useState } from "react";
import axios from "axios";

export default function HealthPanel() {
  const [temp, setTemp] = useState("");
  const [oxygen, setOxygen] = useState("");
  const [cough, setCough] = useState(false);
  const [result, setResult] = useState(null);

  const check = async () => {
    const res = await axios.post("http://127.0.0.1:8000/health-check", {
      temperature: temp,
      oxygen: oxygen,
      cough: cough,
    });
    setResult(res.data);
  };

  return (
    <div className="panel">
      <h2>Daily Health Check</h2>

      <input placeholder="Temperature" onChange={(e)=>setTemp(e.target.value)} />
      <input placeholder="Oxygen %" onChange={(e)=>setOxygen(e.target.value)} />

      <label>
        <input type="checkbox" onChange={()=>setCough(!cough)} />
        Cough
      </label>

      <button onClick={check}>Check</button>

      {result && <h3>{result.risk}</h3>}
    </div>
  );
}