import React from "react";
import { Slide, Heading, List, ListItem, Text, CodePane } from "spectacle";
import styled from "styled-components";
import cssGrid from "../assets/place-items.svg";
import gridLines from "../assets/grid-lines.png";

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
  align-self: center;
  width: 100%;

  .code {
    font-size: 20px;
  }
`;

const ImageWrapper = styled.div`
  justify-self: center;
  align-self: center;

  img {
    width: 600px;
  }
`;

const Demo = styled.div`
  width: 550px;
  height: 600px;
  border: 3px dotted red;
  justify-self: center;
  display: grid;
  grid-template-columns:  [col1] 150px [col2] 150px [lastcol] 150px [lastcol];
  grid-template-row: repeat(2, 1fr);

  .item {
    border-right: 3px dotted red;
    border-top: 3px dotted red;
    border-bottom: 3px dotted red;
  }

  div.item2 {
    border: 1px solid blue;
    grid-column: col1/lastcol;
  }
`;

const cssExample = `
.container {
  display: grid;
  grid-template-columns:  [col1] 150px [col2] 150px [lastcol] 150px [lastcol];
  grid-template-rows: 150px 150px;
}

.item2 {
  border: 1px solid blue;
  grid-column: col1/lastcol;
}
`;

export default (
  <Slide transition={["fade"]} bgColor="primary">
    <Heading size={4} textColor="secondary" caps>
      Naming the grid lines
    </Heading>
    <Container>
      <CodeWrapper>
        <CodePane lang="html" source={cssExample} className="code" />
      </CodeWrapper>
      <ImageWrapper>
        <img src={gridLines}/>
      </ImageWrapper>
      <div />
    </Container>
  </Slide>
);
