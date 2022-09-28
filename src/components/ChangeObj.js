import { useState } from "react";

export default function ChangeObj(props) {
  const [index, setIndex] = useState(0);
  let obj = props.objArr[index];

  const onChange = () => {
    // 버튼을 클릭 후 반영하는 거라서 >=, === 경우가 포함됨!
    // if (index >= props.objArr.length - 1) {
    if (index === props.objArr.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }

    obj = props.objArr[index];
  };

  return (
    <div>
      <h1>이름: {obj.name}</h1>
      <h1>이름: {obj.age}</h1>
      <h1>이름: {obj.nickName}</h1>
      <button onClick={onChange}>프로필 변경하기</button>
    </div>
  );
}
