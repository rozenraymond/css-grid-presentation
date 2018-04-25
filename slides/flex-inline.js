import React from 'react';
import { Slide, Heading, List, ListItem } from 'spectacle';
import styled from "styled-components";
import flex1 from '../assets/flex1.png';

const ExampleWrapper = styled.div`
  broder: 1px solid red;
  margin-top: 30px;
`;

export default (
  <Slide transition={["fade"]} bgColor="tertiary">
  <Heading size={3} fit caps lineHeight={1} textColor="secondary">
    Display in Row / Column
  </Heading>
    <ExampleWrapper>
      <img src={flex1} height="580px"/>
    </ExampleWrapper>
  </Slide>
);
