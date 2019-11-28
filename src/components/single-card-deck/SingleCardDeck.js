import React, { useState, useEffect } from "react";
import "./SingleCardDeck.scss";
import { singleStarShip } from "../../api/Endpoint";
import { Card } from "../card/Card";
import propTypes from "prop-types";

const SingleCard = ({ id }) => {
  const [mounted, setMounted] = useState();
  const [data, setData] = useState();
  const [card, setCard] = useState();

  useEffect(() => {
    (async () => {
      const item = await singleStarShip(id);
      setData(item);
      setMounted(true);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (mounted && data) {
      setCard(<Card key={`card-0`} {...data} />);
    }
  }, [mounted, data]);

  return mounted ? (
    <div className="deck">{card}</div>
  ) : (
    <h1 className="loading">LOADING</h1>
  );
};

SingleCard.defaultProps = {
  id: "2"
};

SingleCard.propTypes = {
  id: propTypes.string.isRequired
};

export default SingleCard;
