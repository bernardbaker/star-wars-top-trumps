import React, { Component, Suspense } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";

const LazyDeck = React.lazy(() => import("./components/deck/Deck"));
const LazyCard = React.lazy(() =>
  import("./components/single-card-deck/SingleCardDeck")
);

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
          <div className="App">
            <Route exact strict path="/" component={Deck} />
            <Route exact path="/share/:id" component={SingleCardDeck} />
          </div>
        </Router>
      </>
    );
  }
}

export default App;
