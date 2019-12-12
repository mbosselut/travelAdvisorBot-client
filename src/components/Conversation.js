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
            />
          </div>
  );
};

export default Conversation;