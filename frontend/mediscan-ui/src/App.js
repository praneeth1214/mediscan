import React, { useState } from "react";
import Navbar from "./components/Navbar";
import PneumoniaPanel from "./components/PneumoniaPanel";
import HealthPanel from "./components/HealthPanel";
import "./styles/dashboard.css";

function App() {
  const [tab, setTab] = useState("health");
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "app dark" : "app"}>
      <Navbar toggleTheme={() => setDark(!dark)} />

      <div className="tabs">
        <button onClick={() => setTab("health")}>Health Check</button>
        <button onClick={() => setTab("pneumonia")}>Pneumonia</button>
      </div>

      {tab === "health" && <HealthPanel />}
      {tab === "pneumonia" && <PneumoniaPanel />}
    </div>
  );
}

export default App;