import React from "react";
import { Slide, Heading, List, ListItem, Text, CodePane } from "spectacle";
import styled from "styled-components";
import cssGrid from "../assets/place-items.svg";
import defineGrid from "../assets/define-grid.svg";

const Container = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

const codeExample = `
<div class="grid-container">
</div>
`;

const CodeWrapper = styled.div`
  justify-self: center;
  width: 100%;

  .code {
    font-size: 20px;
  }
`;

const Demo = styled.div`
  width: 550px;
  height: 600px;
  border: 3px dotted red;
  justify-self: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-row: repeat(3, 1fr);

  div {
    border: 3px dotted pink;
  }
`;

const cssExample = `
.container {
  display: grid;
  grid-template-columns: 150px 150px 150px;
  grid-template-rows: 150px 150px 150px;
}
`;

export default (
  <Slide transition={["fade"]} bgColor="primary">
    <Heading size={4} textColor="secondary" caps>
      Define Grid
    </Heading>
    <Container>
      <CodeWrapper>
        <CodePane lang="html" source={codeExample} height={"50%"} width={"100%"} className={"code"}/>
        <CodePane lang="css" source={cssExample} height={"50%"} width={"100%"} className={"code"}/>
      </CodeWrapper>
      <Demo>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Demo>
      <div />
    </Container>
  </Slide>
);
