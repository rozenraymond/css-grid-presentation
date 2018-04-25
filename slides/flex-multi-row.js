import React from 'react';
import { Slide, Heading, List, ListItem } from 'spectacle';
import styled from "styled-components";
import flexLayout from '../assets/multi-row.png';

const ExampleWrapper = styled.div`
  broder: 1px solid red;
  margin-top: 30px;
`;

export default (
  <Slide transition={["fade"]} bgColor="tertiary">
  <Heading size={3} caps lineHeight={1} textColor="secondary">
    Multiple Row
  </Heading>
    <ExampleWrapper>
      <img src={flexLayout} height="500px"/>
    </ExampleWrapper>
  </Slide>
);
