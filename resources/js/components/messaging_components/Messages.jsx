import React, { useEffect, useState } from 'react';
import './Messages.scss';
import axios from 'axios';

const Messages = ()  => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        axios.get('/api/messages')
            .then(response => setMessages(response.data))
            .catch(error => console.error('Error fetching messages:', error));
    }, []);

    const sendMessage = () => {
        axios.post('/api/messages/store', {
            user_id: userId,
            text: newMessage,
        })
            .then(response =>  setMessages([...messages, response.data]))
            .catch(error => console.error('Error fetching messages:', error));
        
        setNewMessage('')
    };

    return (
        <div className='main_message_container'>
            <div id='message_container'>

                {messages.map(message => (

                    <div key={message.id} className='message'>

                        {message.text}

                    </div>

                ))}
            </div>
            <div id='input_container'>

                <input
                    type='text'
                    value={newMessage}
                    onChange={e => setNewMessage(e.target.value)}
                    placeholder='Type your message...'
                />

                <button onClick={sendMessage}>Send</button>

            </div>
        </div>
    );
}

export default Messages;