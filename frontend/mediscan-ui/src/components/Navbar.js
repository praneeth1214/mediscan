export default function Navbar({ toggleTheme }) {
  return (
    <div className="navbar">
      <h2>MediScan AI</h2>
      <button onClick={toggleTheme}>🌙</button>
    </div>
  );
}