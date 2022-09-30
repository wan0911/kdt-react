import { useEffect, useState, useRef } from "react";
import ChangeFocus from "./ChangeFocus";

export default function PracticeTimer() {
  const [render, setRender] = useState(0);
  const time = useRef(0);

  useEffect(() => {
    // []이므로 최초 한번만 실행된다! 
    const timer = setInterval(() => {
      time.current += 1;
      console.log(time.current);
    }, 1000);


    return () => {
      clearInterval(timer);
      console.log("타이머 종료");
    };
  }, []);

  const showTime = () => {
    setRender(render + 1);
  };

  return (
    <>
      <h1>{time.current}</h1>
      <button ref={ChangeFocus} onClick={showTime}>
        시간
      </button>
    </>
  );
}
