import React from 'react';
import { Slide, Heading, List, ListItem } from 'spectacle';
import styled from "styled-components";
import layout1 from '../assets/layout1.png';

const ExampleWrapper = styled.div`
  broder: 1px solid red;
  margin-top: 30px;
`;

export default (
  <Slide transition={["fade"]} bgColor="tertiary">
    <ExampleWrapper>
      <img src={layout1} height="680px"/>
    </ExampleWrapper>
  </Slide>
);
