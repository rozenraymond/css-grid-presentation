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
  border: 3px dotted red;
  justify-self: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-row: 50px 50px 50px;
  grid-template-areas:
    'a . . .'
    'a . . c'
    '. b . c';
}

  div {
    border: 3px solid pink;
  }
  .item1 { grid-area: a}
  .item2 { grid-area: b}
  .item3 { grid-area: c}
`;

const cssExample = `
.container {
  display: grid;
  grid-template-columns: 150px 150px 150px 150px;
  grid-template-rows: 150px 150px 150px;
  grid-template-areas:
    'a . . .'
    'a . . c'
    '. b . c';
}

.item1 { grid-area: a}
.item2 { grid-area: b}
.item3 { grid-area: c}
`;

export default (
  <Slide transition={["fade"]} bgColor="primary">
    <Heading size={4} textColor="secondary" caps>
      Naming the areas
    </Heading>
    <Container>
      <CodeWrapper>
        <CodePane lang="html" source={codeExample} className="code" />
      </CodeWrapper>
      <Demo>
      <div className="item item1">
        <p>Item 1</p>
      </div>
      <div className="item item2">
        <p>Item 2</p>
      </div>
      <div className="item item3">
        <p>Item 3</p>
      </div>
      </Demo>
      <div />
    </Container>
  </Slide>
);
