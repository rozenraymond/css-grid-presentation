import React from 'react';
import { Slide, Heading, List, ListItem } from 'spectacle';
import styled from "styled-components";
import layout1 from '../assets/layout1.png';

const ExampleWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;

  img {
    height: 280px;
    width: auto;
  }
`;

export default (
  <Slide transition={["fade"]} bgColor="tertiary">
    <ExampleWrapper>
      <div>
        <img src="https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif" />
      </div>
      <div>
        <img src="https://media.giphy.com/media/3drmEWeOUgzKg/giphy.gif" />
      </div>
    </ExampleWrapper>
  </Slide>
);
