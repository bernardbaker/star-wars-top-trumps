import React, { Component } from "react";
import "./Deck.scss";
import { listOfStarShips } from "../../api/Endpoint";
import { Card } from "../card/Card";
import Swipe from "react-easy-swipe";

class Deck extends Component {
  _isMounted = false;
  _length = 0;
  _count = 0;
  _swiping = false;

  constructor(props) {
    super(props);
    this.state = {
      deck: []
    };
  }

  componentDidMount() {
    this._isMounted = true;
    this.renderDeck();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  renderDeck = async () => {
    const list = await listOfStarShips();
    const deck = list.map((item, index) => {
      this.myRef = React.createRef();
      return (
        <Swipe
          onSwipeMove={(position, event) =>
            this.handleOnSwipeMove(position, event, `swipeable-card-${index}`)
          }
          onSwipeEnd={this.onSwipeEnd}
          allowMouseEvents
          key={`card-${index}`}
          className="swipeable-card"
          data-node-id="swipeable-item"
          data-node-reference={`swipeable-card-${index}`}
          ref={this.myRef}
        >
          <Card {...item} />
        </Swipe>
      );
    });
    if (this._isMounted === true) {
      this.setState({
        deck
      });
      this._length = deck.length;
    }
  };

  handleOnSwipeMove = (position, event, reference) => {
    this.onSwipeMove(position, event, reference);
  };

  onSwipeMove = (position, event, reference) => {
    if (this._swiping === false) {
      if (position.x > 100) {
        this._swiping = true;

        let node = document.querySelector(`[data-node-reference=${reference}]`);

        node.classList.remove("animate-swipe-right-in");
        node.classList.add("animate-swipe-right-out");

        setTimeout(() => {
          node.classList.remove("animate-swipe-right-out");
          node.classList.add("animate-swipe-right-in");
          setTimeout(() => {
            if (this._count !== this._length) {
              this._count++;
            }
            if (this._count === this._length) {
              let nodeReferences = document.querySelectorAll(
                '[data-node-id="swipeable-item"]'
              );
              for (let j = 0; j < nodeReferences.length; j++) {
                nodeReferences[j].classList.remove("animate-swipe-right-in");
              }
              this._count = 0;
            }
          }, 1000);
        }, 1000);
      }
    }
  };

  onSwipeEnd = event => {
    this._swiping = false;
  };

  render() {
    return this._isMounted ? (
      <div className="deck">{this.state.deck}</div>
    ) : (
      <h1 className="loading">LOADING</h1>
    );
  }
}

export default Deck;
