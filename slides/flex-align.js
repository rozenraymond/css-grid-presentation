import React from 'react';
import { Slide, Heading, List, ListItem } from 'spectacle';
import styled from "styled-components";
import flex2 from '../assets/flex2.png';

const ExampleWrapper = styled.div`
  broder: 1px solid red;
  margin-top: 30px;
`;

export default (
  <Slide transition={["fade"]} bgColor="tertiary">
    <Heading size={3} caps lineHeight={1} textColor="secondary">
      Align Items
    </Heading>
    <ExampleWrapper>
      <img src={flex2} height="580px"/>
    </ExampleWrapper>
  </Slide>
);
