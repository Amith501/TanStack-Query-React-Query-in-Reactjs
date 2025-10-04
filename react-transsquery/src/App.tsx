import { useState } from "react";

export default function App() {
  const [stack, setStack] = useState<number[]>([]);
  const [input, setInput] = useState("");

  // Push item to stack
  const pushItem = () => {
    if (!input) return;
    setStack([...stack, Number(input)]);
    setInput("");
  };

  // Pop item from stack
  const popItem = () => {
    setStack(stack.slice(0, stack.length - 1));
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto", textAlign: "center" }}>
      <h1>React Stack Example</h1>
      
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={pushItem} style={{ marginLeft: 5 }}>Push</button>
      <button onClick={popItem} style={{ marginLeft: 5 }}>Pop</button>

      <h3>Stack:</h3>
      <ul>
        {stack.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
