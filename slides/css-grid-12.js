import React from 'react';
import { Slide, Heading, List, ListItem } from 'spectacle';
import styled from "styled-components";
import alignItems from '../assets/align-items.png';

const ExampleWrapper = styled.div`
  broder: 1px solid red;
  margin-top: 30px;
`;

export default (
  <Slide transition={["fade"]} bgColor="primary">
  <Heading size={3} caps lineHeight={1} textColor="secondary">
    Align the items
  </Heading>
    <ExampleWrapper>
      <img src={alignItems} height="500px"/>
    </ExampleWrapper>
  </Slide>
);
