import React from "react";
import { Slide, Heading, List, ListItem, Text, CodePane } from "spectacle";
import styled from "styled-components";
import cssGrid from "../assets/place-items.svg";
import defineGrid from "../assets/define-grid.svg";

const Container = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
`;



export default (
  <Slide transition={["fade"]} bgColor="primary">
    <Container>
      <div>
        <Heading size={4} textColor="secondary" caps>
          Auto Fill
        </Heading>
        <Text size={6}>{"FILLS the row with as many columns as it can fit. So it creates implicit columns whenever a new column can fit, because it's trying to FILL the row with as many columns as it can"}</Text>
      </div>
      <div>
        <Heading size={4} textColor="secondary" caps>
          Auto Fit
        </Heading>
        <Text size={6}>{"FITS the CURRENTLY AVAILABLE columns into the space by expanding them so that they take up any available space. The browser does that after FILLING that extra space with extra columns (as with auto-fill ) and then collapsing the empty one"}</Text>
      </div>
    </Container>
  </Slide>
);
