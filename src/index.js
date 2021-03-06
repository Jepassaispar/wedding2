import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

ReactDOM.render(
  <ParallaxProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ParallaxProvider>,
  document.getElementById("root")
);
