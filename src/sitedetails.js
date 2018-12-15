import React from "react";
import { Header, Separator } from "./utils";
import {
  BoardShortcutContainer,
  SupportShortcutContainer,
  ShortcutLink
} from "./shortcuts";

const DetailGroup = props => {
  return (
    <div id={props.id} style={{ marginBottom: "10px" }}>
      {props.children}
      <hr />
    </div>
  );
};

const Detail = props => {
  const infoLabel = props.label ? (
    <span style={{ fontWeight: "bold" }}>{props.label}:&nbsp;</span>
  ) : null;
  return (
    <>
      {props.inline ? (
        <span>
          {infoLabel}
          {props.children}
        </span>
      ) : (
        <div>
          {infoLabel}
          {props.children}
        </div>
      )}
    </>
  );
};

const SiteStatusFlags = props => {
  const { site } = props;
  const mapper = {
    fb_managed_client: "FB Managed Mktg.",
    fb_tool_enabled: "FB Tool Enabled",
    real_leads_client: "Real Leads",
    seller_tool_enabled: "Seller Leads",
    dns_is_current: "On AWS",
    site_is_live: "Live",
    site_is_approved: "Approved",
    texting_enabled: "LM Texting Enabled",
    site_verified_with_google: "Google Verified",
    on_old_template: "Site using Old Template"
  };
  const details = Object.keys(site).map((k, i) => {
    console.log(k + " is " + site[k]);
    console.log("typeof " + k + " is " + typeof site[k]);
    return typeof site[k] == "boolean" && mapper.hasOwnProperty(k) ? (
      <Detail key={i} label={mapper[k]}>
        {site[k] ? "✔" : "✘"}
      </Detail>
    ) : null;
  });
  return <DetailGroup id="statusFlagPanel">{details}</DetailGroup>;
};

export const SiteDetails = props => {
  const { site } = props;
  return (
    <div className="container">
      <Header linkto={site.current_url}>{site.site_name}</Header>
      <DetailGroup id="ownerDetails">
        <Detail label="Owner">{site.name}</Detail>
        <Detail>
          <small>{site.email}</small>
        </Detail>
      </DetailGroup>
      <DetailGroup id="companyInfo">
        <Detail label="Start Date">{site.company_started}</Detail>
        <Detail label="Timezone">{site.timezone}</Detail>
        <Detail inline={true} label="Agents">
          {site.number_of_agents}
        </Detail>
        <Separator />
        <Detail inline={true} label="Leads">
          {site.lead_count}
        </Detail>
      </DetailGroup>
      <DetailGroup id="supportLinks">
        <SupportShortcutContainer site={{ site }} />
      </DetailGroup>
      <DetailGroup id="mlsBoardLinks">
        <BoardShortcutContainer id="" site={site} />
      </DetailGroup>
      <DetailGroup id="statusFlags">
        <SiteStatusFlags site={site} />
      </DetailGroup>
    </div>
  );
};
