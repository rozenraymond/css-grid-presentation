import React from 'react';
import { Slide, Heading, List, ListItem, Text } from 'spectacle';
import styled from "styled-components";
import cssGrid from '../assets/place-items.svg';
import defineGrid from '../assets/define-grid.svg';

const ExampleWrapper = styled.div`
  margin-top: 30px;

  p {
    margin-bottom: 10px;
  }

  img {
    height: 450px;
    width: auto;
  }
`;

export default (
  <Slide transition={["fade"]} bgColor="primary">
    <Heading size={4} textColor="secondary" caps>
      The Basics of Grid CSS
    </Heading>
    <ExampleWrapper>
      <Text>Define your grid</Text>
      <img src={defineGrid}/>
    </ExampleWrapper>
  </Slide>
);
