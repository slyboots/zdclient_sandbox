import React from "react";
import { SiteList } from "./sitelist";
import { Container } from "./utils";

/**
 * Basically just a container for the site list.
 * Handles getting the data needed and passing it to the site list though
 */
const RequesterPanel = props => {
  return (
    <Container className="app">
      <SiteList sites={props.sites} />
    </Container>
  );
};

export default RequesterPanel;
