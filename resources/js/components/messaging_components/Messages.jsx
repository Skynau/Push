import React, { useState, useEffect } from 'react';
import './Messages.scss';
import Pusher from 'pusher-js';
import axios from 'axios';
import Chat from './Chat';

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
    
    const showMessageSender = async () => {
        try {
            const response = await axios.get('/api/messages');

            setMessages(response.data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    useEffect(() => {
        showMessageSender();
    }, []);

    // console.log(messages);
        
    const submit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/messages', {
                email: email,
                message: message
            })

            setMessage('');
            showMessageSender();

        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    }
    console.log(messages);

    return (
        <div className='chat-container'>
            <Chat />
            <div className='chat-message'>
                <div className='user-link'>
                <input
                    className='user-input'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <div className='message-box' id='message-box'>
                {messages[0]?.map((item) => (
                    <div className='message-details' key={item.id}>
                    <div className='message-header'>
                        <strong className='message-sender'>{item.user_id}:</strong>
                        <small className='message-time'>Created at: {item.created_at}</small>
                    </div>
                    <div className='message-content user-message'>{item.text}</div>
                    </div>
                ))}
                {messages[1]?.map((item) => (
                    <div className='message-details_from' key={item.id}>
                    <div className='message-header'>
                        {/* <strong className='message-sender'>{item.user_id}:</strong> */}
                        <small className='message-time'>Created at: {item.created_at}</small>
                    </div>
                    <div className='message-content admin-message'>{item.text}</div>
                    </div>
                ))}
                </div>
            </div>
            <form onSubmit={(e) => submit(e)}>
                <input
                className='form_control'
                placeholder='Write message...'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                />
            </form>
        </div>
    );
};

export default MessageList;