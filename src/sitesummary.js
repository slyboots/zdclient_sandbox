import React from "react";
import { Header } from "./utils";
import { Detail, DetailGroup, Flag } from "./details";


/**
 * Section containing basic site owner info
 * @param {any} props
 */
const OwnerInfoGroup = props => {
  const { site } = props;
  return (
    <DetailGroup id="owner">
        <Detail label="Owner">{site.name}</Detail>
        <Detail>{site.email}</Detail>
    </DetailGroup>
  )
}

/**
 * Section containing useful information about a company
 * @param {any} props
 */
const CompanyInfoGroup = props => {
  const { site } = props;
  return (
    <DetailGroup id="company">
        <Detail label="Start Date">{site.company_started}</Detail>
        <Detail label="Timezone">{site.timezone}</Detail>
        <DetailGroup inline>
          <Detail label="Agents">{site.number_of_agents}</Detail>
          <Detail label="Leads">{site.lead_count}</Detail>
        </DetailGroup>
      </DetailGroup>
  )
}

/**
 * Section containing links to useful support resources
 * @param {any} props
 */
const SupportLinkGroup = props => {
  const { site } = props;
  const links = [
    { u: site.mcp_url, h: "mcp", c: "MCP" },
    { u: site.current_url + "/admin", h: "admin", c: "Admin" },
    { u: site.lm_url, h: "lm", c: "LM" },
    { u: site.drip_url, h: "drip", c: "Drip" },
    { u: site.accounts_url, h: "accounts", c: "Accounts" }
  ];
  return (
    <DetailGroup inline id="supportLinkGroup">
      {links.map((link, i) => {
        return (
          <Detail anchor={link.u} hint={link.h} key={link.u}>
            {link.c}
          </Detail>
        );
      })}
    </DetailGroup>
  );
};

/**
 * Section containing links to useful MLS board / rope resources
 * @param {any} props
 */
export const BoardLinkGroup = props => {
  const { site } = props;
  const { boards } = site;
  return (
    <DetailGroup id="boardLinkGroup">
      <Detail label="MCP" anchor={site.mcp_board_url} hint="RG MCP Board">
        {site.board_name}
      </Detail>
      {boards.map((board, i) => {
        const {board_id,rope_url,app_url,update_time} = board
        return (
          <DetailGroup key={board_id} inline>
            <Detail label="Rope" anchor={rope_url} hint="Data mapping system">
              #{board_id}
            </Detail>
            <Detail anchor={app_url} hint="Find MLS contact/billing info here">
              Boards App
            </Detail>
            <Detail hint="MLS Data Last Updated Timestamp">
              {update_time}
            </Detail>
          </DetailGroup>
        );
      })}
    </DetailGroup>
  );
};

/**
 * Just displays various status / account flags
 * @param {any} props
 */
const StatusFlagGroup = props => {
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
    return typeof site[k] === "boolean" && mapper.hasOwnProperty(k) ? (
      <Flag key={k} name={mapper[k]} true={site[k]} />
    ) : null;
  });
  return <DetailGroup id="statusFlagGroup">{details}</DetailGroup>;
};

export const SiteSummary = props => {
  const { site } = props;
  return (
    <div className="container">
      <Detail anchor={site.current_url}>
        <Header lvl="2">{site.site_name}</Header>
      </Detail>
      <OwnerInfoGroup site={site} />
      <CompanyInfoGroup site={site} />
      <SupportLinkGroup site={site} />
      <BoardLinkGroup site={site} />
      <StatusFlagGroup site={site} />
    </div>
  );
};
