import React from 'react';

const RoomInfo = (props) => {
    let roomInfo = props.users ?
        <div>
            <h2>Room:</h2>
            <h3>{props.room}</h3>
            <div>
                {props.users.map(user => (
                    <div>{user.username}</div>
                ))}
            </div>
        </div>
        :
        null;
    return (
        <>
            {roomInfo}
        </>
    )
};

export default RoomInfo;