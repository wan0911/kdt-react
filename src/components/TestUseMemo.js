import { useMemo, useState } from "react";

export default function TestUseMeno() {
  const hardCalculate = (number) => {
    console.log("어려운 계산 시작!");
    let sum = 0;

    for (let i = 0; i < 1000000001; i++) {
      sum = sum + 1;
    }

    return number + sum;
  };

  const [hardNum, setHardNum] = useState(1);
  const hardSum = useMemo(() => {
    return hardCalculate(hardNum);
  }, [hardNum]);
  
  const easyCalculate = (number) => {
    console.log("쉬운 계산 시작");
    let sum = 1000000000 + number;

    return sum;
  };

  const [easyNum, setEasyNum] = useState(1);
  const easySum = easyCalculate(easyNum);

  return (
    <>
      <h1>시간이 오래 걸리는 계산</h1>
      <input type="number" value={hardNum} onChange={(e) => {setHardNum(parseInt(e.target.value))}} />
      <span> + 1000000000 = {hardSum}</span>
      <br /><br /><br />
      <h1>시간이 오래 안걸리는 계산</h1>
      <input type="number" value={easyNum} onChange={(e) => {setEasyNum(parseInt(e.target.value))}} />
      <span> + 1000000000 = {easySum}</span>
    </>
  );
}
