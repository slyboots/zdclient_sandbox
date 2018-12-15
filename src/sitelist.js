import React from "react";
import { Header } from "./utils";

const SiteInfoRow = props => {
  return (
    <div className="container row">
      <a href={props.domain}>{props.domain}</a>
      <br />
      <small>
        Owner:&nbsp;<i>{props.ownerName || "Unassigned"}</i>
      </small>
    </div>
  );
};

export const SiteList = props => {
  return (
    <div class="container">
      <Header>Site Details</Header>
      {props.sites.map((site, i) => (
        <SiteInfoRow key={i} domain={site.site_name} ownerName={site.name} />
      ))}
    </div>
  );
};
