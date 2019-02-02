import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";

const AdminNav = props => {
  const links = [
    {
      title: "Matches",
      link: "/admin_matches"
    },
    {
      title: "Add Match",
      link: "/admin_matches/add_match"
    },
    {
      title: "Players",
      link: "/admin_players"
    },
    {
      title: "Add players",
      link: "/admin_players/add_players"
    }
  ];

  const style = {
    color: "#ffffff",
    fontWeight: '300',
    borderBottom: '1px solid #353535'
  };

  const renderItems = () =>
    links.map(link => (
      <Link to={link.link} key={link.title}>
        <ListItem button style={style}>
          {link.title}
        </ListItem>
      </Link>
    ));

  return <div>{renderItems()}</div>;
};

export default AdminNav;
