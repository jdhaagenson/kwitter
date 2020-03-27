import React, { Component } from "react";
import { Reveal, Image, Modal, Button, Form } from "semantic-ui-react";
import dart from "./images/dartFilled.png";
import "./FaveQuote.css";

class FavQuote extends Component {
  state = {
    quote: "default quote",
    author: " text",
    open: false
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ text: e.target.value });
  };

  //   handleUpdateQuote = () => {

  //     const quote ={"change"},
  //     const author ={"change"}
  //     this.setState({ quote: quote, author: author });
  //   };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <h2>Dart of the day</h2>
        <Modal trigger={<Button>change</Button>} header="Update Quote!">
          <Modal.Content>
            <Form onSubmit={this.handleUpdateQuote}>
              <Form.Field>
                <label htmlFor="quote">Quote:</label>
                <input
                  type="text"
                  name="dart"
                  autoFocus
                  onChange={this.handleChange}
                  placeholder="New Quote"
                />{" "}
                <label htmlFor="author">Author:</label>
                <input
                  type="text"
                  name="author"
                  autoFocus
                  onChange={this.handleChange}
                  placeholder="Who said it"
                />
              </Form.Field>
              <Button type="submit" content="Update" />
              <Button onClick={this.handleClose} content="Cancel" />
            </Form>
          </Modal.Content>
        </Modal>

        <div>
          <Reveal>
            <Reveal className="quote">
              <Reveal animated="rotate left">
                <Reveal.Content visible>
                  <Image circular size="large" src={dart} />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <div className="myQuote">
                    <blockquote>"{this.state.quote}"</blockquote>
                    <p>- {this.state.author}</p>
                  </div>
                </Reveal.Content>
              </Reveal>
            </Reveal>
          </Reveal>
        </div>
      </div>
    );
  }
}

export default FavQuote;
