import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EnterForm = () => {
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="formWrapper">
            <h1>Enter Chat</h1>
            <input placeholder="Username" className="formInput" type="text" onChange={e => setUsername(e.target.value)} />
            <input placeholder="Room name" className="formInput" type="text" onChange={e => setRoom(e.target.value)} />
            <Link
                onClick={e => (!username && !room) ? e.preventDefault() : null}
                to={'/chatroom'}
                username={username}
                room={room}
            >
                <button className="formButton" type="submit">Enter</button>
            </Link>
        </div>
    )
}

export default EnterForm;