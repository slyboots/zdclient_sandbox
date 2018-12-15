import React from "react";
import ReactDOM from "react-dom";

import dummyData from "./dummydata";
import RequesterPanel from "./requesterpanel";
import { SiteDetails } from "./sitedetails";
import { SiteList } from "./sitelist";

import "./styles.css";

const Example = props => {
  return (
    <div className="example">
      <h1>{props.name}</h1>
      {props.render()}
    </div>
  );
};

const examples = [
  {
    name: "Site List",
    render: () => {
      return (
        <div className="app">
          <SiteList sites={dummyData.multiSite.base} />
        </div>
      );
    }
  },
  {
    name: "Site Details",
    render: () => {
      return (
        <div className="app">
          <SiteDetails site={dummyData.singleSite} />
        </div>
      );
    }
  }
];

function App() {
  return (
    <div>
      {examples.map((e, i) => (
        <Example key={i} name={`${++i}: ${e.name}`} render={e.render} />
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
