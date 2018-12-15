import React from "react";
import ReactDOM from "react-dom";
import { SiteList } from "./sitelist";
import { Container, Header } from "./utils";

const RequesterPanel = props => {
  return (
    <Container className="app">
      <Header>Requester Panel</Header>
      <SiteList sites={props.sites} />
    </Container>
  );
};

export default RequesterPanel;
