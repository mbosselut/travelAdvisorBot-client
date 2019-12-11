import React, { Component } from "react";
import { connect } from "react-redux";
import { sendMessage } from "./actions";
import "./App.css";

class App extends Component {

  state = {
    value: ""
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };
  
  styledText = [];

  render() {
    const { feed, sendMessage } = this.props;
    let hasFrench = false;
    this.styledText = feed.map((entry, index) => {
      if (entry.text.includes("French" && entry.sender === 'bot')) {
        hasFrench = true;
      } else {
        hasFrench = false;
      }
      return <li className={entry.sender} key={index}>{entry.text}</li>;

    });

    return (
      <div>
        <h1>Hello Chat !</h1>
        <div className="conversationContainer">
        <ul>
          {this.styledText}
          {/* {feed.map(entry => (
            <li>{entry.text}</li>
          ))} */}
        </ul>
        {hasFrench ? (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/1200px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg"
            alt="france"
          />
        ) : null}
        <input
          type="text"
          onChange={this.onChange}
          onKeyDown={e => 
            e.keyCode === 13 ? sendMessage(e.target.value) : null
          }
        />
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
