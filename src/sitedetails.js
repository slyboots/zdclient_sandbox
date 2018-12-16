import React from "react";
import { Header, Separator } from "./utils";
import { Detail, DetailGroup, Flag } from "./details";

const SupportLinkGroup = props => {
  const site = props.site;
  const links = [
    { u: site.mcp_url, h: "mcp", c: "MCP" },
    { u: site.current_url + "/admin", h: "admin", c: "Admin" },
    { u: site.lm_url, h: "lm", c: "LM" },
    { u: site.drip_url, h: "drip", c: "Drip" },
    { u: site.accounts_url, h: "accounts", c: "Accounts" }
  ];
  return (
    <DetailGroup inline>
      {links.map((link, i) => {
        return (
          <Detail anchor={link.u} hint={link.h} key={i}>
            {link.c}
          </Detail>
        );
      })}
    </DetailGroup>
  );
};
export const ShortcutLink = props => {
  return (
    <a href={props.url || null} title={props.title} target="_blank">
      {props.children}
    </a>
  );
};

const BoardShortcut = props => {
  return (
    <div>
      <ShortcutLink url={props.ropeUrl} title="rope app">
        Rope: #{props.boardId}
      </ShortcutLink>
      <Separator use="::" />
      <ShortcutLink url={props.appUrl} title="rg boards app">
        Boards App
      </ShortcutLink>
      <Separator use="::" />
      <small>{props.updateTime}</small>
    </div>
  );
};

export const BoardShortcutContainer = props => {
  const { boards } = props.site;
  return (
    <DetailGroup id={props.id}>
      <Detail label="MCP" anchor={props.site.mcp_board_url} hint="RG MCP Board">
        {props.site.board_name}
      </Detail>
      {boards.map((board, i) => {
        return (
          <DetailGroup inline>
            <Detail
              label="Rope"
              id={board.board_id}
              anchor={board.rope_url}
              hint="Pulley MLS Data System"
            >
              #{board.board_id}
            </Detail>
            <Detail anchor={board.app_url} hint="Website Boards App">
              Boards App
            </Detail>
            <Detail hint="MLS Data Last Updated Timestamp">
              {board.update_time}
            </Detail>
          </DetailGroup>
        );
      })}
    </DetailGroup>
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
    return typeof site[k] === "boolean" && mapper.hasOwnProperty(k) ? (
      <Flag key={i} name={mapper[k]} true={site[k]} />
    ) : null;
  });
  return <DetailGroup id="statusFlagPanel">{details}</DetailGroup>;
};

export const SiteDetails = props => {
  const site = props.site;
  return (
    <div className="container">
      <Detail anchor={site.current_url}>
        <Header lvl="2">{site.site_name}</Header>
      </Detail>
      <DetailGroup id="owner">
        <Detail label="Owner">{site.name}</Detail>
        <Detail>{site.email}</Detail>
      </DetailGroup>
      <DetailGroup id="company">
        <Detail label="Start Date">{site.company_started}</Detail>
        <Detail label="Timezone">{site.timezone}</Detail>
        <DetailGroup inline>
          <Detail label="Agents">{site.number_of_agents}</Detail>
          <Detail label="Leads">{site.lead_count}</Detail>
        </DetailGroup>
      </DetailGroup>
      <DetailGroup id="support-links">
        <SupportLinkGroup site={site} />
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
