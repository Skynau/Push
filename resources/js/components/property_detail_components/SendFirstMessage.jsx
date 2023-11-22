import axios from "axios";
import React, { useState } from "react";

const SendFirstMessage = ({user_id}) => {

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
        <>
            <form onSubmit={onSubmit}>
                <input name="text" onChange={handleInputChange} value={text.text} placeholder="Write your message"></input>
                <button type="submit">Send</button>
            </form>
        </>
    )

}

export default SendFirstMessage;