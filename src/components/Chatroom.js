import React, { useEffect, useState, useRef } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import ChatMessages from './ChatMessages';
import RoomInfo from './RoomInfo';
import NewMessage from './NewMessage';

let socket;

const Chatroom = ({ location }) => {
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState('');
    const endpoint = 'https://smalltalk-bigtalk.herokuapp.com/';
    const chatEl = useRef(null);

    useEffect(() => {
        const { username, room } = queryString.parse(location.search);

        socket = io(endpoint);
        setUsername(username);
        setRoom(room);

        socket.emit('join', { username, room });

        socket.on('roomUsers', ({ users }) => {
            setUsers(users);
        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [endpoint, location.search]);

    useEffect(() => {
        socket.on('message', message => {
            setMessages([...messages, message]);

            chatEl.current.scrollTop = chatEl.current.scrollHeight;
        });
    }, [messages]);

    const sendMessage = e => {
        e.preventDefault();

        if (message) {
            socket.emit('sendMessage', message);
            setMessage('');
        }
    }

    return (
        <div className="chatWrapper">
            <div ref={chatEl} className="messagesContainer">
                <ChatMessages
                    username={username}
                    messages={messages}
                />
            </div>
            <RoomInfo
                users={users}
                room={room}
            />
            <NewMessage
                message={message}
                setMessage={setMessage}
                sendMessage={sendMessage}
            />
        </div>
    )
}

export default Chatroom;