import React from 'react';
import { Slide, Heading, List, ListItem } from 'spectacle';
import styled from "styled-components";
import browserSupport from '../assets/browser-support.png';

const ExampleWrapper = styled.div`
  broder: 1px solid red;
  margin-top: 30px;

  img {
    width: 1200px;
    height: auto;
    display: block;
    margin-bottom: 20px;
  }
`;

export default (
  <Slide transition={["fade"]} bgColor="primary">
  <Heading size={3} caps lineHeight={1} textColor="secondary">
    Browser Support
  </Heading>
    <ExampleWrapper>
      <img src={browserSupport} height="500px"/>
      <a href="https://caniuse.com/#feat=css-grid" target="_blank">"source: https://caniuse.com"</a>
    </ExampleWrapper>
  </Slide>
);
