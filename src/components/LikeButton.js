import React, { Component } from "react";
import "./likeButton.scss";

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = { nrOfLikes: 0 };
  }
  handleClick = () => {
    this.setState(prevState => ({ nrOfLikes: prevState.nrOfLikes + 1 }));
  };
  render() {
    return (
      <button className="like-btn" onClick={this.handleClick}>
        {this.state.nrOfLikes} Likes
      </button>
    );
  }
}

export default LikeButton;
