// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const presentationSlides = [
  import('../slides/title'),
  import('../slides/intro-to-web1'),
  import('../slides/intro-to-web2'),
  import('../slides/intro-to-web3'),
  import('../slides/web-design-revolution-title'),
  import('../slides/float1'),
  import('../slides/float2'),
  import('../slides/float-example-code'),
  import('../slides/flex-intro'),
  import('../slides/flex-inline'),
  import('../slides/flex-align'),
  import('../slides/flex-multi-row'),
  import('../slides/hackQuotes'),
  import('../slides/css-grid-title'),
  import('../slides/css-grid-example1'),
  import('../slides/css-gridlayout-example'),
  import('../slides/css-grid-1'),
  import('../slides/css-grid-2'),
  import('../slides/css-grid-3'),
  import('../slides/css-grid-4'),
  import('../slides/css-grid-5'),
  import('../slides/css-grid-5-1'),
  import('../slides/css-grid-5-2'),
  import('../slides/css-grid-6'),
  import('../slides/css-grid-7'),
  import('../slides/css-grid-8'),
  import('../slides/css-grid-8-1'),
  import('../slides/css-grid-9'),
  import('../slides/css-grid-10'),
  import('../slides/css-grid-11'),
  import('../slides/css-grid-12'),
  import('../slides/css-grid-13'),
  import('../slides/css-grid-reference'),
];

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: Array(presentationSlides.length)
        .fill(<Slide key="loading" />)
    };
  }

  componentDidMount() {
    const importedSlides = [];
    Promise.all(presentationSlides)
      .then((slides) => {
        slides.forEach((slide) => { importedSlides.push(slide.default); });
        this.setState({ slides: importedSlides });
      });
  }

  render() {
    const { slides } = this.state;

    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} contentHeight="1200" contentWidth="1200">
        {
          slides.map(
            (slide, index) => React.cloneElement(slide, { key: index })
          )
        }
      </Deck>
    );
  }
}
