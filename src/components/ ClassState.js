import React, { Component } from "react";

class ClassState extends Component {
  constructor(props) {
    super(props);

    // 초기화
    this.state = {
      message: "",
    };
  }

  render() {
    const { message } = this.state;
    const onClickEnter = () => {
      this.setState({ message: "안녕하세요!" });
    };
    const onClickLeave = () => {
      this.setState({ message: "안녕히가세요" });
    };

    return (
      <div>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickLeave}>퇴장</button>
        <h1>{message}</h1>
      </div>
    );
  }
}

export default ClassState;
