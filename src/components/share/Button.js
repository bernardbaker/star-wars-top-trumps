import React, { useState } from "react";
import "./Button.scss";
import propTypes from "prop-types";
import audioFileForceWillBeWithYou from "./assets/force-will-be-with-you.mp3";

export const createShareLink = ({ url, uri }) => {
  const tokens = url.split("/");
  return uri.concat(tokens[tokens.length - 2]);
};

export const displayShareLink = ({ url, uri }) => {
  const address = window.location.protocol.concat(window.location.host);
  return `${address}${createShareLink({ url, uri })}`;
};

export const Button = ({ label, url, uri }) => {
  const [shareLink, setShareLink] = useState("");

  const handleClick = ({ url, uri }) => {
    const link = displayShareLink({ url, uri });

    playAudio();

    setShareLink(link);
  };

  const playAudio = () => {
    if (!document.getElementById("audio-share-button")) {
      let player = document.createElement("audio");
      player.setAttribute("data-testid", "audio-share-button");
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

  return (
    <div className="button">
      <div data-testid="link" onClick={e => handleClick({ url, uri })}>
        <p className="label">{label}</p>
      </div>
      <div>
        <p className="share-link">{shareLink}</p>
      </div>
    </div>
  );
};

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
