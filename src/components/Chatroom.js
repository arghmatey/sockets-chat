import React from 'react';

const Chatroom = () => {
    return (
        <div className="chatWrapper">
            <div className="messagesWrapper">
                {/* messages here */}
            </div>
            <div className="usersWrapper">
                {/* list of users in room here */}
            </div>
            <div className="newWrapper">
                <input placeholder="Type your message here..." className="newMessage" type="text" />
                <button className="messageSend" type="submit">Send</button>
            </div>
        </div>
    )
}

export default Chatroom;