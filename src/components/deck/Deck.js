import React, { Component } from "react";
import "./Deck.scss";
import { listOfStarShips } from "../../api/Endpoint";
import { Card } from "../card/Card";

class Deck extends Component {
  _isMounted = false;

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
      return <Card key={`card-${index}`} {...item} />;
    });
    if (this._isMounted === true) {
      this.setState({
        deck
      });
    }
  };

  render() {
    return <div className="deck">{this.state.deck}</div>;
  }
}

export default Deck;
