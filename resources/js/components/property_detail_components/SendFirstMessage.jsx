import axios from "axios";
import React, { useState } from "react";
import './SendFirstMessage.scss';

const SendFirstMessage = ({user_id, toggleMessage}) => {

    const [text, setText] = useState('');

    const handleInputChange = (e) => {
        setText({
            [e.target.name]: e.target.value,
        });
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        try {

            const response = await axios.post(`/api/message-first/${user_id}`, text)
            
        } catch (error) {
            console.log("error", error);
        }
        
    }
    return (
        <div className="modal-content">
            <div className="message-quit" onClick={toggleMessage}>
                <p className="message-quit_cross">&#10006;</p>
            </div>
            <form onSubmit={onSubmit} className="form_message">
                <textarea className="input_message" name="text" onChange={handleInputChange} value={text.text} placeholder="Write your message"></textarea>
                <button className="button_message" type="submit">Send</button>
            </form>
        </div>
    );
}

export default SendFirstMessage;