import React from "react";
import "../style.scss";
import LikeButton from "./LikeButton.js";

const App = () => {
  return (
    <div className="hello">
      HELLO REACT!
      <br />
      <LikeButton />
    </div>
  );
};

export default App;
