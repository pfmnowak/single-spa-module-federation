import React from "react";
import ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";
import App from "./App";

let linkEl: HTMLLinkElement;

function bootstrapCss() {
  linkEl = globalThis.document.createElement("link");
  linkEl.rel = "stylesheet";
  const base = import.meta.env.BASE_URL;
  linkEl.href =
    base +
    (base.endsWith("/") ? "" : "/") +
    "assets/vpss(react-mfe-example)spa-C8Hd5el7.css";

  return Promise.resolve();
}

function mountCss() {
  globalThis.document.head.appendChild(linkEl);
  return Promise.resolve();
}

function unmountCss() {
  globalThis.document.head.removeChild(linkEl);
  return Promise.resolve();
}

const lc = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: App,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  errorBoundary(err: any, _info: any, _props: any) {
    return <div>Error: {err}</div>;
  },
});

export const bootstrap = [bootstrapCss, lc.bootstrap];
export const mount = [mountCss, lc.mount];
export const unmount = [unmountCss, lc.unmount];
