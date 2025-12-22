import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "normalize.css";

import App from "@/App";
import { store } from "@/store/store";

import "@/styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
);
