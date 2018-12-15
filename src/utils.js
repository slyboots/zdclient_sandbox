import React from "react";

import { Anchor } from "./details";

/** __A generic header component__ */
export const Header = props => {
  const heading = <h3 className="heading">{props.children}</h3>;
  return (
    <div>
      {props.linkto ? <Anchor to={props.linkto}>{heading}</Anchor> : heading}
      <hr />
    </div>
  );
};

/** __Generic container component__ */
export const Container = props => {
  return (
    <div className={"container " + (props.className || "")}>
      {props.children}
    </div>
  );
};

/** __A separator that can be placed between sections of text__ */
export const Separator = props => {
  return <>&nbsp;{props.use || "|"}&nbsp;</>;
};
