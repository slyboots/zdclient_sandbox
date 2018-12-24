import React from "react";

import { Detail, DetailGroup } from "./details";
import { Header } from "./utils";

import "./sitelist.css";

const SiteListRow = props => {
  let onClicked = () => {
    return props.onFocused(props.index);
  }
  return (
    <div className="sitelist__row" onClick={onClicked}>
      <DetailGroup>
        <Detail>
          <b>{props.domain}</b>
        </Detail>
        <Detail label="Owner">
          <small>{props.ownerName || "Unassigned"}</small>
        </Detail>
      </DetailGroup>
    </div>
  );
};

export const SiteList = props => {
  const totalSites = props.sites.length;
  return (
    <div className="sitelist">
      <Header lvl="3">Matching Sites: {totalSites} total</Header>
      {props.sites.map((site, i) => (
        <SiteListRow index={i} key={site.site_name} domain={site.site_name} ownerName={site.name} onFocused={props.focusHandler}/>
      ))}
    </div>
  );
};
