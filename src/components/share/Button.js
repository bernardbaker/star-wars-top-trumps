import React, { Component } from "react";
import "./Button.scss";
import propTypes from "prop-types";
import audioFileForceWillBeWithYou from "./assets/force-will-be-with-you.mp3";

export const createShareLink = ({ url, uri }) => {
  const tokens = url.split("/");
  return uri.concat(tokens[tokens.length - 2]);
};

export const displayShareLink = props => {
  const address = window.location.protocol.concat(window.location.host);
  return `${address}${createShareLink(props)}`;
};

export class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shareLink: ""
    };
  }

  handleClick = props => {
    const shareLink = displayShareLink(props);

    this.playAudio();

    this.setState({
      shareLink
    });
  };

  playAudio = () => {
    if (!document.getElementById("audio-share-button")) {
      let player = document.createElement("audio");
      player.setAttribute("id", "audio-share-button");
      player.src = audioFileForceWillBeWithYou;
      player.style.visibility = "hidden";
      document.getElementById("app").appendChild(player);
      player.play();
    } else {
      const node = document.getElementById("audio-share-button");
      node.play();
    }
  };

  render() {
    return (
      <div className="button">
        <div data-testid="link" onClick={e => this.handleClick(this.props)}>
          <p className="label">{this.props.label}</p>
        </div>
        <div>
          <p className="share-link">{this.state.shareLink}</p>
        </div>
      </div>
    );
  }
}

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
