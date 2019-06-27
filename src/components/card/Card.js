import React from "react";
import "./Card.scss";
import propTypes from "prop-types";
import { Button as ShareButton } from "../share/Button";

export const Card = props => (
  <div className="card-container">
    <div className="card" data-testid="card">
      <ShareButton label={props.share_label} url={props.url} uri={props.uri} />
      <ul>
        <li>
          <div className="detail">
            <p>MGLT</p>
            <p>{props.MGLT}</p>
          </div>
        </li>
        <li>
          <div className="detail">
            <p>Cargo Capacity</p>
            <p>{props.cargo_capacity}</p>
          </div>
        </li>
        <li>
          <div className="detail">
            <p>Consumables</p>
            <p>{props.consumables}</p>
          </div>
        </li>
        <li>
          <div className="detail">
            <p>Cost In Credits</p>
            <p>{props.cost_in_credits}</p>
          </div>
        </li>
        <li>
          <div className="detail">
            <p>Crew</p>
            <p>{props.crew}</p>
          </div>
        </li>
        <li>
          <div className="detail">
            <p>Hyperdrive Rating</p>
            <p>{props.hyperdrive_rating}</p>
          </div>
        </li>
        <li>
          <div className="detail">
            <p>Length</p>
            <p>{props.length}</p>
          </div>
        </li>
        <li>
          <div className="detail">
            <p>Manufacturer</p>
            <p>{props.manufacturer}</p>
          </div>
        </li>
        <li>
          <div className="detail">
            <p>Max Atmosphering Speed</p>
            <p>{props.max_atmosphering_speed}</p>
          </div>
        </li>
        <li>
          <div className="detail">
            <p>Model</p>
            <p>{props.model}</p>
          </div>
        </li>
        <li>
          <div className="detail">
            <p>Name</p>
            <p>{props.name}</p>
          </div>
        </li>
        <li>
          <div className="detail">
            <p>Passengers</p>
            <p>{props.passengers}</p>
          </div>
        </li>
        <li>
          <div className="detail">
            <p>Starship Class</p>
            <p>{props.starship_class}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

Card.defaultProps = {
  MGLT: "40",
  cargo_capacity: "6000000",
  consumables: "2 years",
  cost_in_credits: "8500000",
  crew: "854",
  hyperdrive_rating: "2.0",
  length: "300",
  manufacturer: "Kuat Drive Yards",
  max_atmosphering_speed: "800",
  model: "EF76 Nebulon-B escort frigate",
  name: "EF76 Nebulon-B escort frigate",
  passengers: "75",
  starship_class: "Escort ship",
  url: "https://swapi.co/api/starships/23/",
  share_label: "Click here to Share the Force",
  uri: "/share/"
};

Card.propTypes = {
  MGLT: propTypes.string.isRequired,
  cargo_capacity: propTypes.string.isRequired,
  consumables: propTypes.string.isRequired,
  cost_in_credits: propTypes.string.isRequired,
  crew: propTypes.string.isRequired,
  hyperdrive_rating: propTypes.string.isRequired,
  length: propTypes.string.isRequired,
  manufacturer: propTypes.string.isRequired,
  max_atmosphering_speed: propTypes.string.isRequired,
  model: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  passengers: propTypes.string.isRequired,
  starship_class: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
  share_label: propTypes.string.isRequired,
  uri: propTypes.string.isRequired
};
