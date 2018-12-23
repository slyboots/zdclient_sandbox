import React from "react";
import ReactDOM from "react-dom";

import dummyData from "./dummydata";
import RequesterPanel from "./requesterpanel";
import {SiteList} from "./sitelist";
import {SiteSummary} from "./sitesummary"

import "./styles.css";

const Example = props => {
  return (
    <div className="example">
      <div class="example-header">
      <h2>{props.name}</h2>
      <i>{props.description}</i>
      <hr />
      </div>
      {props.render()}
    </div>
  );
};

const examples = [
  {
    name: "Site List Component",
    description: "When multiple sites were passed in",
    render: () => {
      return (
        <div className="app">
          <SiteList sites={dummyData.multiSite.base} />
        </div>
      );
    }
  },
  {
    name: "Site List Component",
    description: "When a single site was passed in",
    render: () => {
      return (
        <div className="app">
          <SiteList sites={dummyData.singleSite.base} />
        </div>
      );
    }
  },
  {
    name: "Site Details Component",
    description: "Summary of a site when given full site",
    render: () => {
      return (
        <div className="app">
          <SiteSummary site={dummyData.singleSite.full} />
        </div>
      );
    }
  },
  {
    name: "Requester Panel: Site List",
    description:
      'Multiple Sites: renders multiple sites result as a single column of small "cards"',
    render: () => {
      return (
        <RequesterPanel
          title="Multiple Sites"
          sites={dummyData.multiSite.base}
        />
      );
    }
  },
  {
    name: "Requester Panel: Site List",
    description:
      'Single Site: renders single site result as a single small "card"',
    render: () => {
      return (
        <RequesterPanel
          title="Matching Sites"
          sites={dummyData.singleSite.base}
        />
      );
    }
  }
];

function App() {
  return (
    <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "space-around"}}>
      {examples.map((e, i) => (
        <Example
          key={i}
          name={`${++i}: ${e.name}`}
          render={e.render}
          description={e.description}
        />
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
