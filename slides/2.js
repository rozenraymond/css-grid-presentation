import React from 'react';
import { Slide, Heading, List, ListItem } from 'spectacle';

export default (
  <Slide transition={["fade"]} bgColor="tertiary">
    <Heading size={3} textColor="primary" fit caps>Evolution of layout</Heading>
    <List>
      <ListItem>Table</ListItem>
      <ListItem>Inline</ListItem>
      <ListItem>Float</ListItem>
      <ListItem>Flex</ListItem>
    </List>
  </Slide>
);