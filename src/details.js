import React from "react";

/** __An HTML link with some preset attributes__ */
export const Anchor = props => {
  return (
    <a href={props.to} title={props.title || undefined} target="_blank">
      {props.children}
    </a>
  );
};

/** __Descriptor for a Detail__ */
export const Label = props => {
  return <span style={{ fontWeight: "bold" }}>{props.children}:&nbsp;</span>;
};
/** __Represents a single unit of information__
 * @prop {string}     label  - Descriptor to prepend to the detail
 * @prop {string}     tip    - Additional text as a tool tip for the detail
 * @prop {boolean}    inline - Flag to render inline instead of block
 * @prop {string|URL} anchor - Render the detail as a link to this URL
 */
export const Detail = props => {
  const label = props.label ? <Label>{props.label}</Label> : null;
  return (
    <div
      style={{ display: props.inline ? "inline" : "block" }}
      title={props.tip}
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
