import { useRef, useState } from "react";

const Comparing = () => {
  const [countState, setState] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;
  const [render, setRender] = useState(0);

  const countUpState = () => {
    setState(countState + 1);
    console.log("State: ", countState);
  };

  const countUpRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref: ", countRef.current);
  };

  const countUpVar = () => {
    countVar = countVar + 1;
    console.log("Variable: ", countVar);
  };

  const reRender = () => {
    setRender(render + 1);
  };

  return (
    <>
      <h1>State: {countState}</h1>
      <h1>Ref: {countRef.current}</h1>
      <h1>Variable: {countVar}</h1>
      <button onClick={countUpState}>State + 1</button>
      <button onClick={countUpRef}>Ref + 1</button>
      <button onClick={countUpVar}>Variable + 1</button>
      <button onClick={reRender}>rendering</button>
    </>
  );
};

export default Comparing;
