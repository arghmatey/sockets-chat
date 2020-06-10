import React from 'react';

const NewMessage = (props) => {
    return (
        <div className='newWrapper'>
            <input
                placeholder='Type your message here...'
                className='newMessage'
                value={props.message}
                onChange={e => props.setMessage(e.target.value)}
                onKeyPress={e => e.key === 'Enter' ? props.sendMessage(e) : null} />
            <button
                className='messageSend'
                type='submit'
                onClick={e => props.sendMessage(e)}>Send</button>
        </div>
    )
}

export default NewMessage;