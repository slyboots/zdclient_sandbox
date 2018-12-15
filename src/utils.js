import React from "react";

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

export const Separator = props => {
  return <>&nbsp;{props.use || "|"}&nbsp;</>;
};
