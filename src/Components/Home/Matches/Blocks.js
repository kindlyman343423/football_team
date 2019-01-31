import React, { Component } from 'react'
import {firebaseMatches} from '../../../firebase';
import { firebaseLooper } from '../../ui/Misc';

class Blocks extends Component {
  state = {
    matches: []
  }

  showMatches = () =>(
    <div>Matches</div>
  )

  componentDidMount(){
    firebaseMatches.limitToLast(6).once("value").then((snapshot)=>{
      const matches = firebaseLooper(snapshot);
      this.setState({
        matches: matches.reverse()
      })
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="home_matches">
        {this.showMatches(this.state)}
      </div>
    )
  }
}

export default Blocks;
