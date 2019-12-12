import React, { Component } from "react";
import { connect } from "react-redux";
import { sendMessage } from "./actions";
import "./App.css";
import "./images.js";
import Conversation from "./components/Conversation";
import Gallery from "./components/Gallery";

class App extends Component {
  state = {
    value: "",
    pictureList: [
      "https://www.realgap.co.uk/tpl/lib/img/public/compressed-images/tpl/lib/img/private/media/1721_496829791__website__-_crop-1200x0-85.jpg",
      "https://d1slf0jqvy1d13.cloudfront.net/www.joker.be/production/field_collection/header/image/miyajimaitsukushimanicki-eliza-schinow-plfde8.jpg?auto=format&fit=max&fm=jpg&h=940&ixlib=php-1.1.0&q=60&w=2560&s=e6e17e97d87ae5f94d36d3793f2eca93",
      "https://www.telegraph.co.uk/content/dam/Travel/2019/August/iStock-1047662500.jpg?imwidth=450"
    ]
  };

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

  styledText = [];

  render() {
    const { feed } = this.props;
    let galleryClasses = "gallery";
    let hasFrench = false;
    this.styledText = feed.map((entry, index) => {
      // if (entry.text.includes("My recommandation") && entry.sender == "bot") {
      //   console.log('coucou hasFrench');
      //   const str = entry.text.split(' ');
      //   const len = str.length;
      //   const country = str[len-2];
      //   console.log(country);
      //   galleryClasses = "gallery gallery-full";
      //   hasFrench = true;
      // } else {
      //   console.log('coucou hasNoFrench');
      //   hasFrench = false;
      // }
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
          {/* <div className="conversationContainer">
            
            <ul>{this.styledText}</ul>
            {hasFrench ? (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/1200px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg"
                alt="france"
              />
            ) : null}
            <input
              type="text"
              value={this.state.value}
              onChange={this.onChange}
              onKeyDown={this.onSubmit}
            />
          </div> */}
          <Gallery
            galleryClasses={galleryClasses}
            pictures={this.state.pictureList}
          />
          {/* <div className={galleryClasses}>
            <img src="https://www.realgap.co.uk/tpl/lib/img/public/compressed-images/tpl/lib/img/private/media/1721_496829791__website__-_crop-1200x0-85.jpg" alt='japan' className='picture'/>
            <img src="https://d1slf0jqvy1d13.cloudfront.net/www.joker.be/production/field_collection/header/image/miyajimaitsukushimanicki-eliza-schinow-plfde8.jpg?auto=format&fit=max&fm=jpg&h=940&ixlib=php-1.1.0&q=60&w=2560&s=e6e17e97d87ae5f94d36d3793f2eca93" alt="miyajima" className='picture'/>
            <img src="https://www.telegraph.co.uk/content/dam/Travel/2019/August/iStock-1047662500.jpg?imwidth=450" alt='japan2' className='picture'/>
          </div> */}
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
