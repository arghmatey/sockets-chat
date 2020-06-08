import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chatroom = ({ location }) => {
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');
    const endpoint = 'http://localhost:3000';

    useEffect(() => {
        const { username, room } = queryString.parse(location.search);
        socket = io(endpoint);
        setUsername(username);
        setRoom(room);
    })

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