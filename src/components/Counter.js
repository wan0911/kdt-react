import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const onInc = () => {
    setCount(count + 1);
  };

  const onDec = () => {
    setCount(count + -1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onInc}>+1</button>
      <button onClick={onDec}>+1</button>
    </div>
  );
}
