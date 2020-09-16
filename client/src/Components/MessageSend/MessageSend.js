import React from 'react';
import './MessageSend.css';
import { MdSend } from "react-icons/md";
function MessageSend({message,sendMessage,setMessage}) {
    return (
        <div className="messagesend-container">
            <input type="text" placeholder="Type a message"
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                onKeyPress={e=>e.key === 'Enter' ? sendMessage(e) : null}
            />
            <span onClick={(e)=>{sendMessage(e)}}><MdSend/></span>
        </div>
    )
}

export default MessageSend
