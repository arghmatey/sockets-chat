import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chatroom = ({ location }) => {
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const endpoint = 'http://localhost:3000';

    useEffect(() => {
        const { username, room } = queryString.parse(location.search);

        socket = io(endpoint);
        setUsername(username);
        setRoom(room);

        socket.emit('join', { username, room });

        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [endpoint, location.search]);

    useEffect(() => {
        socket.on('message', message => {
            setMessages([...messages, message]);
        })
    }, [messages])

    const sendMessage = e => {
        e.preventDefault();

        if (message) {
            socket.emit('sendMessage', message);
            setMessage('');
        }
    }

    console.log(messages)

    return (
        <div className="chatWrapper">
            <div className="messagesWrapper">
                {/* messages here */}
            </div>
            <div className="usersWrapper">
                {/* list of users in room here */}
            </div>
            <div className="newWrapper">
                <input
                    placeholder="Type your message here..."
                    className="newMessage"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null} />
                <button
                    className="messageSend"
                    type="submit"
                    onClick={e => sendMessage(e)}>Send</button>
            </div>
        </div>
    )
}

export default Chatroom;