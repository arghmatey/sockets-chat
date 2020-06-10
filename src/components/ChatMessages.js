import React from 'react';

const ChatMessages = (props) => {
    return (
        <div className="messagesWrapper">
            {props.messages.map((message, idx) => (
                props.username === message.user
                    ?
                    <div key={idx} className="userMessage" >
                        <h4>{message.user}</h4>
                        <div>{message.text}</div>
                    </div>
                    :
                    <div key={idx} className="chatMessage">
                        <h4>{message.user}</h4>
                        <div>{message.text}</div>
                    </div>
            ))}
        </div >
    )
}

export default ChatMessages;