import React from "react";

import { Detail, DetailGroup } from "./details";

// import "./sitelist.css";

const SiteListRow = props => {
  return (
    <div className="sitelist__row">
      <DetailGroup>
        <Detail>{props.domain}</Detail>
        <Detail label="Owner">
          <small>{props.ownerName || "Unassigned"}</small>
        </Detail>
      </DetailGroup>
    </div>
  );
};

export const SiteList = props => {
  return (
    <div className="sitelist">
      {props.sites.map((site, i) => (
        <SiteListRow key={i} domain={site.site_name} ownerName={site.name} />
      ))}
    </div>
  );
};
