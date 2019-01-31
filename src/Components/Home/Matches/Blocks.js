import React, { Component } from "react";
import { firebaseMatches } from "../../../firebase";
import { firebaseLooper } from "../../ui/Misc";
import MatchesBlock from "../../ui/Matches_Block";
import Slide from 'react-reveal/Slide';

class Blocks extends Component {
  state = {
    matches: []
  };

  showMatches = matches =>
    matches ? 
    matches.map(match => (
      <Slide key={match.id} bottom>
      <div className="item">
        <div className="wrapper">
          <MatchesBlock match={match} />
        </div>
      </div>
      </Slide>
    )) : null;

  componentDidMount() {
    firebaseMatches
      .limitToLast(6)
      .once("value")
      .then(snapshot => {
        const matches = firebaseLooper(snapshot);
        this.setState({
          matches: matches.reverse()
        });
      });
  }

  render() {
    console.log(this.state);
    return <div className="home_matches">{this.showMatches(this.state.matches)}</div>;
  }
}

export default Blocks;
