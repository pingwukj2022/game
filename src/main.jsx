import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
// import Login from './pages/login/login.jsx'
import Home from "./pages/home/home.jsx";
// import Board from "./pages/home/jingzigame.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // <React.StrictMode>
  //   <Login />
  // </React.StrictMode>,
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
  // <React.StrictMode>
  //   <Board />
  // </React.StrictMode>
);
