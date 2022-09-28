import logo from "./logo.svg";
import styled, { keyframes } from "styled-components";

// 사용할 태그보다 위에 선언해줘야함
const rotating = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const RootDiv = styled.div`
  background-color: gray;
`;

const AppHeader = styled.header`
  background-color: black;
  text-align: center;
`;

const AppLogo = styled.img`
  width: 300px;
  height: 300px;
  animation: ${rotating} 20s linear infinite;
`;

const MyA = styled.a`
  font-size: 30px;
  text-decoration: none;
  color: white;
  text-shadow: 1px 1px 5px white;
`;

const MyP = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: gray;
`;


export default function Logo() {
  return (
    <RootDiv>
      <AppHeader>
        <AppLogo src={logo} alt="app" />
        <MyP>
          Edit <code>src/App.js</code> and save to reload.
        </MyP>
        <MyA
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          learn react
        </MyA>
      </AppHeader>
    </RootDiv>
  );
}

