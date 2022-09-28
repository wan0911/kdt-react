import { useState, useRef } from "react";

export default function ChangeFocus() {
    const inputOne = useRef();
    const inputTwo = useRef();

    const changeFocusone = () => {
        inputOne.current.focus();
    }

    const changeFocusTwo = () => {
        inputTwo.current.focus();
    }

    return (
        <div>
            <input ref={inputOne}></input>
            <input ref={inputTwo}></input>
            <br></br>
            <button onClick={changeFocusone}>1번버튼</button>
            <button onClick={changeFocusTwo}>2번버튼</button>
        </div>
    )
}