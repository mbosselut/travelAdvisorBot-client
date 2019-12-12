import React, { Component } from "react";
import { connect } from "react-redux";
import { sendMessage } from "./actions";
import "./App.css";
import "./images.js";
import Conversation from "./components/Conversation";
import Gallery from "./components/Gallery";
import { images } from "./images.js";
import {CSSTransition} from 'react-transition-group';

class App extends Component {
  state = {
    value: "",
    pictureList: [],
    loadPics: false,
    showGallery: false
  };

  galleryClasses = "gallery";

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

  loadPictures = (country) => {
    if (this.state.loadPics === false) {
      this.setState({pictureList: images.find(element => element.country == country).pictures, loadPics: true, showGallery: true});
      this.galleryClasses = "gallery-show";
      console.log('loadpics', country)
    }
  }

  styledText = [];

  render() {
    const { feed } = this.props;
    this.styledText = feed.map((entry, index) => {
      if (entry.text.includes("My recommandation") && entry.sender == "bot") {
        console.log('coucou hasFrench');
        const str = entry.text.split(' ');
        const len = str.length;
        const country = str[len-2];
        console.log(country);
        this.loadPictures(country);
      } else {
        console.log('coucou hasNoFrench');
      }
      return (
        <li className={entry.sender} key={index}>
          {entry.text}
        </li>
      );
    });


    return (
      <div>
        <h1>Hello Chat !</h1>
        <div className="mainContent">
          <Conversation
            text={this.styledText}
            value={this.state.value}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
          />
          {/* <CSSTransition
          in={this.state.showGallery}
          timeout={400}
          classNames="list-transition"
          unmountOnExit
          appear
          onEntered={this.listSwitch}
          onExit={this.listSwitch}
        > */}
          <Gallery
            galleryClasses={this.galleryClasses}
            pictures={this.state.pictureList}
          />
          {/* </CSSTransition> */}
        </div>
        {/* <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/2d1dbf29-77f7-4d06-a36e-4269708e262b"></iframe> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  feed: state
});
export default connect(mapStateToProps, { sendMessage })(App);
