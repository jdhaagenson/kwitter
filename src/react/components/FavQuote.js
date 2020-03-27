import React, { Component } from "react";
import { Reveal, Image } from "semantic-ui-react";
import dart from "./images/dartFilled.png";

class FavQuote extends Component {
  state = {
    quote: "default quote",
    author: " text"
  };

  render() {
    return (
      <div>
        <h2>Dart of the day</h2>
        <div>
          <Reveal>
            <Reveal className="quote">
              <Reveal animated="rotate left">
                <Reveal.Content visible>
                  <Image circular size="large" src={dart} />
                </Reveal.Content>
                <Reveal.Content hidden></Reveal.Content>
              </Reveal>
            </Reveal>
          </Reveal>
        </div>
      </div>
    );
  }
}

export default FavQuote;
