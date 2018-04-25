import React from "react";
import { Heading, Text, Slide } from "spectacle";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
`;

const ALink = styled.a`
  display: block;
  margin: 20px 0;
`;
export default (
  <Slide transition={["zoom"]} bgColor="primary">
    <Wrapper>
      <div className="items">
        <Heading size={5} caps lineHeight={1} textColor="tertiary">
          CSS Grid Reference
        </Heading>
        <ALink href="https://gridbyexample.com/examples/">CSS Grid Example</ALink>
        <ALink href="http://jensimmons.com/post/feb-27-2017/learn-css-grid/">Jen Simmons</ALink>
        <ALink href="https://tympanus.net/codrops/css_reference/grid/">Codrop CSS Reference</ALink>
        <ALink href="https://www.chenhuijing.com/blog/how-i-design-with-css-grid/">
          Chen Hui Jing
        </ALink>
      </div>

      <div className="items">
        <div>
          <Heading size={5} caps lineHeight={1} textColor="tertiary">
            CSS Grid Talk / Tutorials
          </Heading>
        </div>
        <ALink href="https://www.youtube.com/watch?v=7kVeCqQCxlk&t=670s">
          Morten Rand-Hendriksen
        </ALink>
        <ALink href="https://www.youtube.com/watch?v=paMmgo4MhQ8&t=585s">
          Daniel Koskinen
        </ALink>
        <ALink href="https://cssgrid.io/">Wes bos</ALink>
        <ALink href="https://frontendne.co.uk/talks/css-grid-layout">
          Rachel Andrew
        </ALink>
      </div>
    </Wrapper>
  </Slide>
);
