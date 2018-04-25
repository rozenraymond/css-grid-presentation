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
  import('../slides/1'),
  import('../slides/2'),
  import('../slides/3'),
  import('../slides/4'),
  import('../slides/5'),
  import('../slides/6'),
  import('../slides/7'),
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
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        {
          slides.map(
            (slide, index) => React.cloneElement(slide, { key: index })
          )
        }
      </Deck>
    );
  }
}
