import { useState } from "react";
import { Button } from "../Button.css/Button.tsx";
import "./App.css";

export function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1 className="App__header">React Boilerplate</h1>
      <h2>by Valletta Software Development</h2>
      <p className="App__count">{count}</p>
      <Button text="Click me!" onClick={handleClick} />
    </div>
  );
}
