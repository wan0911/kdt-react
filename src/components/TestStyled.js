import styled from "styled-components";

const MyDiv = styled.div`
  background-color: orange;
`;

const MyHeading = styled.h1`
  color: blue;
`;
const MySpan = styled.span`
  background-color: pink;
  color: white;
`;

export default function TestStyled() {
  return (
    <MyDiv>
      <MyHeading>h1 태그 입니다!</MyHeading>
      <MySpan>span 태그 입니다!</MySpan>
    </MyDiv>
  );
}
