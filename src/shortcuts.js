import React from "react";
import { Separator } from "./utils";

export const ShortcutLink = props => {
  return (
    <a href={props.url || null} title={props.title} target="_blank">
      {props.children}
    </a>
  );
};

export const SupportShortcutContainer = props => {
  const { site } = props.site;
  const links = [
    { u: site.mcp_url, t: "mcp", c: "MCP" },
    { u: site.current_url + "/admin", t: "admin", c: "Admin" },
    { u: site.lm_url, t: "lm", c: "LM" },
    { u: site.drip_url, t: "drip", c: "Drip" },
    { u: site.accounts_url, t: "accounts", c: "Accounts" }
  ];
  return (
    <div>
      {links.map((link, i) => {
        return (
          <div style={{ display: "inline" }}>
            <ShortcutLink key={i} url={link.u} title={link.t}>
              {link.c}
            </ShortcutLink>
            {i < links.length - 1 ? <Separator use="|" /> : null}
          </div>
        );
      })}
    </div>
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
    <div id={props.id}>
      <ShortcutLink url={props.site.mcp_board_url} title="mcp board">
        {props.site.board_name}
      </ShortcutLink>
      {boards.map((board, i) => {
        return (
          <>
            <BoardShortcut
              id={board.board_id}
              boardId={board.board_id}
              ropeUrl={board.rope_url}
              appUrl={board.app_url}
              updateTime={board.update_time}
            />
          </>
        );
      })}
    </div>
  );
};
