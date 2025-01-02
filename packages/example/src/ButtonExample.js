import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import store from "store/store";

const ButtonExample = () => {
  const [count, setCount] = useState(store.count);
  useEffect(() => {
    store.subscribe(() => {
      setCount(store.count);
    });
  }, []);

  // Podbić wersje wszystkiego
  // React, Single-SPA, Module Federation
  // Spróbować z Vite (główny projekt i mikrofrontendy)

  return (
    <div
      className="mui-appbar mui--appbar-line-height"
      style={{ marginTop: "2rem", backgroundColor: "purple" }}
    >
      <table width="100%">
        <tbody>
          <tr style={{ verticalAlign: "middle" }}>
            <td
              className="mui--appbar-height mui--text-display1"
              style={{ paddingLeft: "1em" }}
            >
              Custom component
            </td>
            <td
              className="mui--appbar-height mui--text-display1"
              align="right"
              style={{ paddingRight: "1em" }}
            >
              [{count}]
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const buttonLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: ButtonExample,
});

export const bootstrap = buttonLifecycles.bootstrap;
export const mount = buttonLifecycles.mount;
export const unmount = buttonLifecycles.unmount;
