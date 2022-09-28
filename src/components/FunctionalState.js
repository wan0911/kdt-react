import React, { useState } from "react";

function FunctionalState() {
  const [message, setMessage] = useState(""); // 초기값 설정, true or false -> boolean
  const onClickEnter = () => {
    setMessage("안녕하세요~");
  };
  const onClickLeave = () => {
    setMessage("안녕히가세요~");
  };

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
}


export default FunctionalState;