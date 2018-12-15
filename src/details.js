import React from "react";

import "./details.css";

/** __An HTML link with some preset attributes__ */
export const Anchor = props => (
  <a href={props.to} target="_blank">
    {props.children}
  </a>
);

/** __Descriptor for a Detail__ */
export const Label = props => (
  <span className="detail__label">{props.children}:&nbsp;</span>
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
      className={"detail " + (props.inline ? "detail-inline" : "detail-block")}
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

export const DetailGroup = props => {
  return <div className="detail__group">{props.children}</div>;
};
