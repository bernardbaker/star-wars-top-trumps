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
      card: []
    };
    console.log("props", props);
  }

  componentDidMount() {
    this._isMounted = true;
    this.renderDeck();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  renderDeck = async () => {
    console.log(this.props.id);
    const item = await singleStarShip(this.props.id);
    console.log(item);
    const card = <Card key={`card-0`} {...item} />;
    if (this._isMounted === true) {
      this.setState({
        card: [card]
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
