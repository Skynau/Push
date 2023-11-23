import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Chat.scss';


export default function Chat () {

    const [chats, setChats] = useState([]);
    
    const fetchChats = async () => {
      try {
        const response = await axios.get('/api/chats');

        console.log(response.data.chats);
        setChats(response.data.chats);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

  useEffect(() => {
      fetchChats();
    }, []);
    
    return (
        <div className="chat-list-container">
            <div className="chat-list">
                {chats &&
                chats.map((chat, index) => (
                    <div key={index} className="chat-item">
                    <span className="chat-id">Chat ID: {chat.chat_id}</span>
                    <p className='participant'>User ID: {chat.user_id}</p>
                    <p className='participant'>Sender: {chat.sender}</p>
                    </div>
                ))}
            </div>
        </div>
  );

}
