import React from 'react';
import { Heading, Slide, Text } from 'spectacle';

export default (
  <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
    <Heading size={3} textColor="secondary" caps>Grid CSS property specials</Heading>
    <Text size={6} textColor="secondary">
      Whitespace
    </Text>
    <Text size={6} textColor="secondary">
      auto-fit auto-fill
    </Text>
    <Text size={6} textColor="secondary">
      fr
    </Text>
    <Text size={6} textColor="secondary">
      minmax
    </Text>
    <Text size={6} textColor="secondary">
      repeat
    </Text>
  </Slide>
);
