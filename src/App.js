import React, { Component } from "react";
import { connect } from "react-redux";
import { sendMessage } from "./actions";
import "./App.css";
import "./images.js";
import Conversation from "./components/Conversation";
import Gallery from "./components/Gallery";
import { images } from "./images.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  state = {
    value: "",
    pictureList: [],
    loadPics: false,
    country: ""
  };

  galleryClasses = "gallery";
  picturesClasses = [];

  onChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };

  onSubmit = event => {
    const sendMessage = this.props.sendMessage;
    const inputText = event.target.value;
    if (event.keyCode === 13) {
      this.setState({ value: "" });
      return sendMessage(inputText);
    }
  };

  loadPictures = country => {
    if (this.state.loadPics === false) {
      this.setState({
        pictureList: images.find(element => element.country == country)
          .pictures,
        loadPics: true,
        country:country
      });
      this.galleryClasses = "gallery-show";
      this.pictureClasses = ["picture-0", "picture-1", "picture-2"];
    }
  };

  styledText = [];

  render() {
    const { feed } = this.props;
    const { lastSender } = this.props;
    this.styledText = feed.map((entry, index) => {
      if (entry.text.includes("My recommandation") && entry.sender == "bot") {
        const str = entry.text.split(" ");
        const len = str.length;
        const country = str[len - 2];
        this.loadPictures(country);
      }
      return (
        <li className={entry.sender} key={index}>
          {entry.text}
        </li>
      );
    });

    return (
      <div>
        <h1 className="header">
          Your Travel Advisor bot &nbsp;
          <FontAwesomeIcon icon={faPlaneDeparture} className="icon" />
          &nbsp;
          <FontAwesomeIcon icon={faRobot} className="icon" />
        </h1>
        <div className="mainContent">
          <Conversation
            text={this.styledText}
            value={this.state.value}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            lastSender={lastSender}
          />
          <Gallery
            galleryClasses={this.galleryClasses}
            pictures={this.state.pictureList}
            pictureClasses={this.pictureClasses}
            loadPics={this.state.loadPics}
            country={this.state.country}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  feed: state.feed,
  lastSender: state.lastSender
});
export default connect(mapStateToProps, { sendMessage })(App);
