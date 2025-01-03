import "./App.css";
import reactLogo from "./assets/react.svg";
import Button from "./components/Button";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>MFE Example (Vite + React)</h1>
      <Button />
    </>
  );
}

export default App;
