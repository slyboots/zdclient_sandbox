import React from "react";
import { SiteList } from "./sitelist";
import { SiteSummary } from "./sitesummary";
import { Container } from "./utils";

/**
 * Basically just a container for the site list.
 * Handles getting the data needed and passing it to the site list though
 */
class RequesterPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: props.sites.length === 1 ? 0 : props.focus // I KNOW THIS IS BAD BUT IM DOING THIS FOR NOW SO I CAN TEST IT
    }
    // this.setFocus = this.setFocus.bind(this);
  }
  setFocus = (i) => {
    this.setState((state) => {return {focus: state.focus === i? undefined : i}})
  }
  render() {
    const focused = this.state.focus >= 0
    return (
      <Container className="app">
        {focused? (
          <SiteSummary index={this.state.focus} site={this.props.sites[this.state.focus]} focusHandler={this.setFocus}/>
        ) : (
          <SiteList sites={this.props.sites} focusHandler={this.setFocus}/>
        )}
      </Container>
    );
  }
};

export default RequesterPanel;
