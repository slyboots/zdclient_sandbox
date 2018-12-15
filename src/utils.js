import React from "react";

/** __A generic header component__ */
export const Header = props => {
  const content = props.linkto ? (
    <a href="{props.linkto}" target="_blank">
      {props.children}
    </a>
  ) : (
    <>{props.children}</>
  );
  return (
    <div>
      <h2>{content}</h2>
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
