import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { rootChannels, channels, breadcrumbs } from "./reducers";
import AppContainer from "./containers/App";
import "./index.css";

const channelsData = {
  1: { id: "1", name: "Films", children: ["4", "5", "6", "7"] },
  2: { id: "2", name: "Sports", children: ["8", "9", "10", "11"] },
  3: { id: "3", name: "Places", children: ["12", "13", "14"] },
  4: { id: "4", name: "Star Wars", children: ["15", "16"] },
  5: { id: "5", name: "The Shawshank Redemption" },
  6: { id: "6", name: "The Dark KNight" },
  7: { id: "7", name: "Parasite" },
  8: { id: "8", name: "Cricket" },
  9: { id: "9", name: "Football" },
  10: { id: "10", name: "Hockey" },
  11: { id: "11", name: "BAseball" },
  12: { id: "12", name: "London" },
  13: { id: "13", name: "Paris" },
  14: { id: "14", name: "KOlkata" },
  15: { id: "15", name: "Episode V - The empire strikes back" },
  16: { id: "16", name: "Episode III -Revenge of the sith" },
};
const rootChannelsData = ["1", "2", "3"];
const breadcrumbsData = {};

const defaultData = {
  rootChannels: rootChannelsData,
  channels: channelsData,
  breadcrumbs: breadcrumbsData,
};
const store = createStore(
  combineReducers({ rootChannels, channels, breadcrumbs }),
  defaultData,
  window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);
