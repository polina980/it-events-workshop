import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/App/App";
import { FiltersProvider } from "./utils/context/SearchFilterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <FiltersProvider>

<App />
    </FiltersProvider>
);
