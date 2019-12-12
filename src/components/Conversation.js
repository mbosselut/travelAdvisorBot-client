import React from 'react';

const Conversation = (props) => {
  return (
    <div className="conversationContainer">
            <ul>{props.text}</ul>
            <input
              type="text"
              value={props.value}
              onChange={props.onChange}
              onKeyDown={props.onSubmit}
              placeholder="Type your message here and press Enter to submit"
            />
          </div>
  );
};

export default Conversation;