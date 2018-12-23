import React from "react";

import { Vl } from "./utils";

import "./details.css";

/** __An HTML link with some preset attributes__ */
export const Anchor = props => (
  <a href={props.to || ""} target="_blank" rel="noopener noreferrer">
    {props.children}
  </a>
);

/** __Descriptor for a Detail__ */
export const Label = props => (
  <span className="detail-label">{props.children}:&nbsp;</span>
);

/** __Represents a single unit of information__
 * @prop {string}     label  - Descriptor to prepend to the detail
 * @prop {string}     hint    - Additional text as a tool tip for the detail
 * @prop {boolean}    inline - Flag to render inline instead of block
 * @prop {string|URL} anchor - Render the detail as a link to this URL
 */
export const Detail = props => {
  const label = props.label ? <Label>{props.label}</Label> : null;
  return (
    <div
      className={"detail " + (props.inline ? "inline" : "block")}
      title={props.hint}
    >
      {label}
      {props.anchor ? (
        <Anchor to={props.anchor}>{props.children}</Anchor>
      ) : (
        props.children
      )}
    </div>
  );
};
/** __A specialized Detail for rendering boolean values__
 * @prop {boolean} true - if provided then the flag is true
 * @prop {string} name  - the name of the flag to be used as a Detail label
 */
export const Flag = props => {
  return (
    <Detail label={props.name} hint={props.name}>
      {props.true ? "✔" : "✘"}
    </Detail>
  );
};
/** __Renders a group of details__
 * @prop {boolean} inline - whether or not to render children inline default is false
 */
export const DetailGroup = props => {
  const { inline } = props;
  const children = React.Children.toArray(props.children);
  const count = React.Children.count(props.children);
  const formattedChildren = children.map(child =>
    React.cloneElement(child, {
      inline: child.props.inline || inline ? true : false
    })
  );
  return (
    <div className={"detail-group " + (inline ? "inline" : "block")}>
      {formattedChildren.map((child, i) => {
        const shouldSeparate = inline && ++i < count;
        return (
          <>
            {child}
            {shouldSeparate ? <Vl width="2px" color="black" /> : null}
          </>
        );
      })}
    </div>
  );
};
