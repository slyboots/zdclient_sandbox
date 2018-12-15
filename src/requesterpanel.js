import React from "react";
import ReactDOM from "react-dom";
import SiteList from "./sitelist";

const RequesterPanel = props => {
  return (
    <div className="container">
      <SiteList sites={props.sites} />
    </div>
  );
};

export default RequesterPanel;
