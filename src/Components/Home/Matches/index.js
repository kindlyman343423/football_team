import React, { Component } from "react";
import { Tag } from "../../ui/Misc";
import Blocks from "./Blocks";

class Matches extends Component {
  render() {
    return (
      <div className="home_matches_wrapper">
        <div className="container">
          <Tag bgColor="#0e1731" fontSize="50px" color="#ffffff">
            Matches
          </Tag>
          <Blocks />
          <Tag isLink={true} linkTo="/the_team" bgColor="#ffffff" fontSize="22px" color="#0e1731">See more matches</Tag>
        </div>
      </div>
    );
  }
}

export default Matches;
