// import { useState, useRef } from "react";

// export default function TestRef() {
//   const [text, setText] = useState("안녕하세요");

//   const onChangeText = (e) => {
//     let inputText = e.target.value;
//     setText(inputText);
//   }

//   return (
//     <div>
//         <h1>{text}</h1>
//         <input onChange={(e) => { onChangeText(e) }}></input>
//     </div>
//   )
// }

// ref 사용
import { useState, useRef } from "react";

export default function TestRef() {
  const [text, setText] = useState("안녕하세요");

  const inputvalue = useRef();

  const onChangeText = () => {
    console.log(inputvalue);
    let inputText = inputvalue.current.value;
    setText(inputText);
  };

  return (
    <div>
      <h1>{text}</h1>
      <input ref={inputvalue} onChange={onChangeText}></input>
    </div>
  );
}
