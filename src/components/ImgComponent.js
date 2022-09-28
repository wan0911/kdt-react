import 잔망루피 from "../잔망루피.jpeg";
import React, { Component } from "react";

class ImgComponent extends Component {
  render() {
    return (
      <img src={잔망루피} alt="잔망루피 이미지"/>
    )
  }
}

// function ImgComponent() {
//   return <img src={잔망루피} alt="잔망루피 이미지"/>;
// }

export default ImgComponent;
