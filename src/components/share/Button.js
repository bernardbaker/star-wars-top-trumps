import React from "react";
import "./Button.scss";
import propTypes from "prop-types";

export const createShareLink = ({ url, uri }) => {
  const tokens = url.split("/");
  return uri.concat(tokens[tokens.length - 2]);
};

export const displayShareLink = props => {
  const address = window.location.host;
  alert(`${address}${createShareLink(props)}`);
};

export const Button = props => (
  <div className="button">
    <div data-testid="link" onClick={e => displayShareLink(props)}>
      <p className="label">{props.label}</p>
    </div>
  </div>
);

Button.defaultProps = {
  label: "share",
  url: "https://swapi.co/api/starships/23/",
  uri: "/share/"
};

Button.propTypes = {
  label: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
  uri: propTypes.string.isRequired
};
