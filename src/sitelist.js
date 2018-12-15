import React from "react";

import { Detail, DetailGroup } from "./details";

const SiteInfoRow = props => {
  return (
    <DetailGroup>
      <Detail anchor={props.domain}>{props.domain}</Detail>

      <Detail label="Owner">
        <small>{props.ownerName || "Unassigned"}</small>
      </Detail>
    </DetailGroup>
  );
};

export const SiteList = props => {
  return (
    <div class="container">
      {props.sites.map((site, i) => (
        <SiteInfoRow key={i} domain={site.site_name} ownerName={site.name} />
      ))}
    </div>
  );
};
