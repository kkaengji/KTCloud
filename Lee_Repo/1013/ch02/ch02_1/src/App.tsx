import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import Demo from "./components/Demo";
import EventListener from "./pages/EventListener";
import Home from "./pages/Home";

const children = [
  <li key="external-links">
    <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
      <p>go to Google</p>
    </a>
    <a href="http://www.facbook.com" target="_blank" rel="noopener noreferrer">
      <p>go to Facebook</p>
    </a>
    <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
      <p>go to Twitter</p>
    </a>
  </li>,
];

function App() {
  return (
    <ul>
      <li>
        <EventListener />
      </li>
      <li>
        <Home />
      </li>
      <li>
        <Profile />
      </li>
      <li>
        <Demo />
      </li>
      {children}
    </ul>
  );
}

export default App;
