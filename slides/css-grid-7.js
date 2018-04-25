import React from "react";
import { Slide, Heading, List, ListItem, Text, CodePane } from "spectacle";
import styled from "styled-components";
import cssGrid from "../assets/place-items.svg";
import defineGrid from "../assets/define-grid.svg";

const Container = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

const codeExample = `
<div class="grid-container">
  <div class="item">
    <p>Item 1</p>
  </div>
  <div class="item">
    <p>Item 2</p>
  </div>
  <div class="item">
    <p>Item 3</p>
  </div>
  <div class="item">
    <p>Item 4</p>
  </div>
  <div class="item">
    <p>Item 5</p>
  </div>
  <div class="item">
    <p>Item 6</p>
  </div>
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
  grid-template-columns: minmax(20px, 120px) 1fr 1fr;
  grid-template-rows: 110px 1fr;

  div {
    border: 3px solid pink;
  }
`;

const cssExample = `
.container {
  display: grid;
  grid-template-columns: minmax(20px, 120px) 1fr 1fr;
  grid-template-rows: 110px 1fr;
}
`;

export default (
  <Slide transition={["fade"]} bgColor="primary">
    <Heading size={4} textColor="secondary" caps>
      {'The minmax() function'}
    </Heading>
    <Container>
      <CodeWrapper>
        <CodePane lang="html" source={cssExample} className="code" />
      </CodeWrapper>
      <Demo>
        <div className="item">
          <p>Item 1</p>
        </div>
        <div className="item">
          <p>Item 2</p>
        </div>
        <div className="item">
          <p>Item 3</p>
        </div>
        <div className="item">
          <p>Item 4</p>
        </div>
        <div className="item">
          <p>Item 5</p>
        </div>
        <div className="item">
          <p>Item 6</p>
        </div>
      </Demo>
      <div />
    </Container>
  </Slide>
);
