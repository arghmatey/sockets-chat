import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EnterForm = () => {
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="formWrapper">
            <h1>Enter Room</h1>
            <input placeholder="Username" className="formInput" type="text" onChange={e => setUsername(e.target.value)} />
            <select placeholder="Select a Room" className="formInput" onChange={e => setRoom(e.target.value)}>
                <option disabled="" default>Select a Room</option>
                <option>Room 1</option>
                <option>Room 2</option>
                <option>Room 3</option>
            </select>
            <Link
                onClick={e => (!username || !room) ? e.preventDefault() : null}
                to={`/chatroom?username=${username}&room=${room}`}
            >
                <button className="formButton">Enter</button>
            </Link>
        </div>
    )
}

export default EnterForm;