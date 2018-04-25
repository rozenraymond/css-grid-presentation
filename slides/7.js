import React from 'react';
import styled from 'styled-components';
import { Slide, ComponentPlayground } from 'spectacle';

export default (
  <Slide transition={['fade']} bgColor="primary" textColor="secondary">
    <ComponentPlayground
      code={`
const Button = styled.button\`
  backgroundColor: papayawhip;
  color: hotpink;
  font-size: 24px;
\`;
render(<Button>Click me now!</Button>)
      `}
      scope={{ styled }}
    />
  </Slide>
);
