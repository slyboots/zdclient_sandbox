import React from "react";
import ReactDOM from "react-dom";

import dummyData from "./dummydata";
import RequesterPanel from "./requesterpanel";
import { SiteDetails } from "./sitedetails";

import "./styles.css";

const Example = props => {
  return (
    <div className="example">
      <h1>{props.name}</h1>
      {props.children}
    </div>
  );
};

function App() {
  return (
    <div>
      <Example name="Site List">
        <div className="app">
          <RequesterPanel
            title="Site Details Two Sites"
            sites={dummyData.multiSite.base}
          />
        </div>
      </Example>
      <Example name="Site Details">
        <div className="app">
          <SiteDetails site={dummyData.singleSite} />
        </div>
      </Example>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
