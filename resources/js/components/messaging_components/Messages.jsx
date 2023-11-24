import React, { useState, useEffect, useRef } from 'react';
import './Messages.scss';
import Pusher from 'pusher-js';
import axios from 'axios';
import { useParams } from 'react-router';

const MessageList = () => {

    const [email,setEmail] = useState('email');
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const messageBoxRef = useRef(null);
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
    
    const {chat_id} = useParams()

    // console.log(chat_id.chat_id);

    const showMessageSender = async () => {
        try {
            const response = await axios.get(`/api/messages/${chat_id}`);

            setMessages(response.data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    // console.log($chat_id);
    useEffect(() => {
        showMessageSender();
    }, []);

    // console.log(messages);
        
    const submit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`/api/messages/${chat_id}`, {
                email: email,
                message: message
            })

            setMessage('');
            showMessageSender();

        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    }

    // console.log(messages);

    return (
        <div className='chat-container'>
            <div className='chat-message'>
                <div className='message-box' id='message-box' ref={messageBoxRef}>
                {messages[0]?.map((item) => (
                    <div className='message-details' key={item.id}>
                        <div className='message-header_sender'>
                            <strong className='message-sender'>{item.user_id}:</strong>
                            <small className='message-time_sender'>
                                Created at: {item.created_at ? (
                                    new Date(item.created_at).toLocaleString('en-US', {
                                        year: 'numeric',
                                        month: 'numeric',
                                        day: 'numeric',
                                        hour: 'numeric',
                                        minute: 'numeric',
                                        second: 'numeric',
                                        hour12: true, // Change to false if you want 24-hour format
                                    })
                                    ) : (
                                    'N/A' // Or any other placeholder or message indicating that the timestamp is not available
                                )}
                            </small>
                        </div>
                        <div className='message-content sender-message'>{item.text}</div>
                    </div>
                ))}
                {messages[1]?.map((item) => (
                    <div className='message-details_from' key={item.id}>
                        <div className='message-header_reciever'>
                            <strong className='message-reciever'>{item.sender}:</strong>
                            <small className='message-time_reciever'>Created at: {item.created_at}</small>
                        </div>
                        <div className='message-content reciever-message'>{item.text}</div>
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