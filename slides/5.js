import React from 'react';
import { Heading, Slide, BlockQuote, Quote, Cite } from 'spectacle';

export default (
  <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
    <Heading size={3} textColor="secondary" caps>Grid CSS example</Heading>
    <BlockQuote>
      <Quote>Example Quote</Quote>
      <Cite>Author</Cite>
    </BlockQuote>
  </Slide>
);
