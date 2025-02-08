import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchComponent from "./components/SearchComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold text-blue-500">SearchPro</h1>
      <SearchComponent />
    </>
  );
}

export default App;
