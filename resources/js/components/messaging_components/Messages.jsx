import React, { useState, useEffect } from 'react';
import './Messages.scss';
import Pusher from 'pusher-js';
import axios from 'axios';

const MessageList = () => {

    const [email,setEmail] = useState('email');
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    let allMessages = [];

    useEffect(() => {

        Pusher.logToConsole = true;

        const pusher = new Pusher('23a7461cd84735f3285c', {
        cluster: 'eu'
        });

        const channel = pusher.subscribe('chat');
        channel.bind('message', function(data) {
            allMessages.push(data);
            setMessages(allMessages);
        });

    },[]);
    
    useEffect(() => {
        const showMessage = async () => {
            try {
                const response = await axios.get('/api/messages', {
                    params: {
                        email: email,
                        message: message,
                    },
                });
    
                setMessage(response.data);
            } catch (error) {
            
                console.error('Error fetching messages:', error);
            }
        };
    
        showMessage();
    }, [email, message]);
        
    const submit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/messages', {
                email: email,
                message: message
            })

            setMessage('');

        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    }
// console.log(messages);
  return (
        <div className='chat-container'>
            <div className='chat-message'>
                <div className='user-link'>
                    <input className='user-input' value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className='message-box'>
                    
                    {messages.map((message, index) => (

                        <div className='message-details'>   
                            <div className='message-header' key={index}>
                                <strong className='message-sender'>{message.user.name}:</strong>
                                <small className='message-time'>Created at: {message.created_at}</small>
                            </div>
                            <div className='message-content'>{message.message}</div>
                        </div>

                    ))}

                    
                </div>
            </div>
            <form onSubmit={e => submit(e)}>
                <input className='form_control' placeholder='Write message...' value={message}
                    onChange={e => setMessage(e.target.value)}
                />
            </form>
        </div>
    );
};

export default MessageList;