import React from "react";

/** __A generic header component__
 * has a lvl prop that is used to determine the header level
 * defaults to 3
 */
export const Header = props => {
  const heading = React.createElement("h" + props.lvl, null, props.children); //<h3 className="heading">{props.children}</h3>;
  return (
    <div style={{ position: "sticky", top: 0}}>
      {heading}
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

/** __A fancy separator using a CSS div instead of text. It will always be 1em tall__
 * @prop {string} width - the width of the separator in px
 * @prop {strong} color - the color of the separator
 */
export const Vl = props => {
  const lineStyles = {
    borderLeft: [props.width, "solid", props.color].join(" "),
    minHeight: "1em",
    display: "inline-block",
    marginBottom: "-.20em",
    marginLeft: (parseFloat(props.width) / 2) * -1 + "px"
  };
  return (
    <div style={{ display: "inline" }}>
      <span>&nbsp;</span>
      <div style={lineStyles} />
      <span>&nbsp;</span>
    </div>
  );
};
