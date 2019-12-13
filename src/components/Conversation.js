import React from 'react';

const Conversation = (props) => {
  return (
    <div className="conversationContainer">
            <ul>{props.text}
              {props.lastSender === 'user' ? <li className='bot'><em>Bot typing...</em></li> : null}
            </ul>
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