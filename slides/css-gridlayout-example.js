import React from 'react';
import { Slide, Heading, Text } from 'spectacle';
import styled from "styled-components";
import cssGridLayout from '../assets/cssGridExample.png';
import layout2 from '../assets/layout2.png';

const ExampleWrapper = styled.div`
  broder: 1px solid red;
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

export default (
  <Slide transition={["fade"]} bgColor="primary">
  <Heading size={3} caps lineHeight={1} textColor="secondary">
    Align the items
  </Heading>
    <ExampleWrapper>
      <div>
        <Text>Flex / Float</Text>
        <img src={layout2} height="500px"/>
      </div>

      <div>
        <Text>CSS Grid</Text>
        <img src={cssGridLayout} height="500px"/>
      </div>
    </ExampleWrapper>
  </Slide>
);
