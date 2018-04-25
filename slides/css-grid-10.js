import React from "react";
import { Slide, Heading } from "spectacle";
import styled from "styled-components";

const IframWrapper = styled.div`
  margin-top: 30px;
`;

export default (
  <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
    <Heading size={3} caps lineHeight={1} textColor="secondary">
      Auto Fill vs Auto Fit
    </Heading>
    <IframWrapper>
      <iframe
        height="692"
        scrolling="no"
        title="auto-fill vs auto-fit"
        src="//codepen.io/SaraSoueidan/embed/JrLdBQ/?height=692&theme-id=0&default-tab=result&embed-version=2"
        allowTransparency="true"
        allowFullscreen="true"
        style={{
          width: "100%"
        }}
      >
        See the Pen{" "}
        <a href="https://codepen.io/SaraSoueidan/pen/JrLdBQ/">
          auto-fill vs auto-fit
        </a>{" "}
        by Sara Soueidan (<a href="https://codepen.io/SaraSoueidan">
          @SaraSoueidan
        </a>) on <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </IframWrapper>
  </Slide>
);
