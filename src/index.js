import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App/App"
import "./reset.css";
import "./Components/NavBar/NavBar.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);





/* OLD CODE 
ReactDOM.render(
    <Main/>, 
    document.getElementById("root")
  );
*/ 