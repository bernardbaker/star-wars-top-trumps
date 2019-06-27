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
      return (
        <Swipe
          onSwipeMove={this.onSwipeMove}
          onSwipeEnd={this.onSwipeEnd}
          allowMouseEvents
          key={`card-${index}`}
          className="swipeable-card"
          data-node-id="swipeable-item"
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

  onSwipeMove = (position, event) => {
    if (this._swiping === false) {
      if (position.x > 100) {
        this._swiping = true;

        for (let i = 0; i < event.path.length; i++) {
          if (
            event.path[i].className &&
            event.path[i].className.toString().indexOf("swipeable-card") !== -1
          ) {
            let node = event.path[i];

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
                    nodeReferences[j].classList.remove(
                      "animate-swipe-right-in"
                    );
                  }
                  this._count = 0;
                }
              }, 1000);
            }, 1000);
          }
        }
      }
    }
  };

  onSwipeEnd = event => {
    this._swiping = false;
  };

  render() {
    return <div className="deck">{this.state.deck}</div>;
  }
}

export default Deck;
