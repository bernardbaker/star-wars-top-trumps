import React, { Component, Suspense } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import audioFileStarWarsThemeSong from "./assets/star-wars-theme-song.mp3";

const LazyDeck = React.lazy(() => import("./components/deck/Deck"));
const LazyCard = React.lazy(() =>
  import("./components/single-card-deck/SingleCardDeck")
);

const playAudio = () => {
  if (!document.getElementById("audio-theme-song")) {
    let player = document.createElement("audio");
    player.setAttribute("id", "audio-theme-song");
    player.src = audioFileStarWarsThemeSong;
    player.play();
    player.style.visibility = "hidden";
    document.getElementById("app").appendChild(player);
  }
};

const Deck = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyDeck />
    </Suspense>
  );
};

const SingleCardDeck = ({ match }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyCard id={match.params.id} />
    </Suspense>
  );
};

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div className="app" id="app" onClick={playAudio}>
            <Route exact strict path="/" component={Deck} />
            <Route exact path="/share/:id" component={SingleCardDeck} />
          </div>
        </Router>
      </>
    );
  }
}

export default App;
