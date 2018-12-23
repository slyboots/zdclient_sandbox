import React from "react";
import ReactDOM from "react-dom";

import dummyData from "./dummydata";
import RequesterPanel from "./requesterpanel";
import {SiteList} from "./sitelist";

import "./styles.css";

const Example = props => {
  return (
    <div className="example">
      <h2>{props.name}</h2>
      <i>{props.description}</i>
      <hr />
      {props.render()}
    </div>
  );
};

const examples = [
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
  },
  {
    name: "Site List Component",
    render: () => {
      return (
        <div className="app">
          <SiteList sites={dummyData.multiSite.base} />
        </div>
      );
    }
  },
  // {
  //   name: "Site Details Component",
  //   render: () => {
  //     return (
  //       <div className="app">
  //         <SiteDetails site={dummyData.singleSite.full} />
  //       </div>
  //     );
  //   }
  // },
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
