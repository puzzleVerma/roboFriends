import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img
          src={`https://robohash.org/${this.props.ind}?size=250x200`}
          alt=""
        />
        <div className="tc f-2">
          <h4>{this.props.name}</h4>
          <p>{this.props.email}</p>
        </div>
      </div>
    );
  }
}

export default Card;
