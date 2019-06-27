import React, { Component } from "react";
import "./SingleCardDeck.scss";
import { singleStarShip } from "../../api/Endpoint";
import { Card } from "../card/Card";
import propTypes from "prop-types";

class SingleCardDeck extends Component {
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
    const item = await singleStarShip(this.props.id);
    const card = <Card {...item} />;
    if (this._isMounted === true) {
      this.setState({
        card
      });
    }
  };

  render() {
    return <div className="deck">{this.state.card}</div>;
  }
}

SingleCardDeck.defaultProps = {
  id: "2"
};

SingleCardDeck.propTypes = {
  id: propTypes.string.isRequired
};

export default SingleCardDeck;
