import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Chat.scss';
import { Link } from 'react-router-dom';


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

    // console.log(fetchChats);
    
    return (
        <div className="chat-list-container">
            <div className="chat-list">
                {chats &&
                chats.map((chat, index) => (
                    <div key={index} className="chat-item">
                        <p className='participant'>From: <strong>{chat.user?.first_name}</strong></p>
                        <p className='participant'>To: {chat.sender}</p>
                        <Link to={`/chat/${chat.chat_id}`}>
                            <button className="reply-button">Reply</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
  );

}
