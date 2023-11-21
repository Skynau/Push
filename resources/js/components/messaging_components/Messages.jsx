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

    const submit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/messages', {
                email: email,
                message: message
            })

            setMessage('');

        } catch (error) {
            
        }
        // await fetch('http://www.push.test/api/messages', {
        //     method: "POST",
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({
        //         username,
        //         message
        //     })
        // });

        // setMessage('');

    }

  return (
        <div className='chat-container'>
            <div className='chat-message'>
                <div className='user-link'>
                    <input className='user-input' value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className='message-box'>
                    
                    {messages.map(message => {

                        return (
                            <div className='message-details'>   
                                <div className='message-header'>
                                    <strong className='message-sender'>{message.username}</strong>
                                    <small className='message-time'>Tues</small>
                                </div>
                                <div className='message-content'>{message.message}</div>
                            </div>
                        )

                    })}

                    
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