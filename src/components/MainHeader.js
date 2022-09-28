// 함수형 컴포넌트

// export default function MainHeader(props) {
//   const { text, name, href } = props;

//   return (
//     <div>
//       <h1>{name}님 반갑습니다!</h1>
//       <a href={href}>{text}</a>
//     </div>
//   );
// }

// class형 컴포넌트
import { Component } from "react"; // 필수

class MainHeader extends Component {
  render() {
    const { text, name, href } = this.props;

    return (
      <div>
        <h1>{name}님 반갑습니다!</h1>
        <a href={href}>{text}</a>
      </div>
    );
  }
}

export default MainHeader;
