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
      <div className="example-header">
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
    description: "Multiple sites with no focus",
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
    description: "Single site with no focus",
    render: () => {
      return (
        <div className="app">
          <SiteList sites={dummyData.singleSite.base} />
        </div>
      );
    }
  },
  {
    name: "Site List Component",
    description: "Multiple sites with focus set",
    render: () => {
      return (
        <div className="app">
          <SiteList sites={dummyData.multiSite.base} focus={2} />
        </div>
      );
    }
  },
  {
    name: "Site List Component",
    description: "Single site with focus set",
    render: () => {
      return (
        <div className="app">
          <SiteList sites={dummyData.singleSite.base} focus={0}/>
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
      'Multiple sites with focus set',
    render: () => {
      return (
        <RequesterPanel
          title="Multiple Sites"
          sites={dummyData.multiSite.base}
          focus={3}
        />
      );
    }
  },
  {
    name: "Requester Panel: Site List",
    description:
      'Single Site with focus set',
    render: () => {
      return (
        <RequesterPanel
          title="Matching Sites"
          sites={dummyData.singleSite.base}
          focus={1}
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
          key={"ex"+i}
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
