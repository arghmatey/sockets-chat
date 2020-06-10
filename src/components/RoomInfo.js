import React from 'react';

const RoomInfo = (props) => {
    let roomInfo = props.users ?
        <div>
            <h3>{props.room}</h3>
            <div>
                {props.users.map(user => (
                    <div key={user.id}>{user.username}</div>
                ))}
            </div>
        </div>
        :
        null;
    return (
        <div className="usersWrapper">
            {roomInfo}
        </div>
    )
};

export default RoomInfo;