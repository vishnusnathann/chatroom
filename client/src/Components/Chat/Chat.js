import React,{useContext,useEffect,useState} from 'react'
import "./Chat.css";
import io from 'socket.io-client';
import {Context} from '../../App/App';
import InfoBar from '../InfoBar/InfoBar';
import MessageSend from '../MessageSend/MessageSend';
import MessagesSection from '../MeesagesSection/MessagesSection';

let socket;
function Chat(props) {

    const ENDPOINT = '/';
    // Context 
    const context = useContext(Context);
    // message state to store message
    // const [message, setMessage] = useState("");
    const [message, setMessage] = useState(' ');
    // messages array to store messages
    const [messages,setMessages] = useState([]);

    useEffect(() => {
        console.log(message);
        socket = io(ENDPOINT);
        socket.emit('join',{name:context.chatDetailsState.name,room:context.chatDetailsState.room}
        ,
        (res,error)=>{
            if(res)
                {if(!res.chatDataAvail)
                    props.history.push('/');}

            
            });

        return ()=>{
            socket.emit('disconnect');
            socket.off();
        }

    }, [ENDPOINT])

    useEffect(() => {
        console.log(messages);
        socket.on('message',(message)=>{
            setMessages([...messages,message]);
            
        })
        // return () => {
        // }
    }, [messages]);

    const sendMessage = (e) =>{
        e.preventDefault();
        if(message){
            socket.emit('sendMessage',message,() => setMessage(''));
        }
    }

    return (
        <div className="chat-container">
            <InfoBar roomname={context.chatDetailsState.room}/>
            <MessagesSection messages={messages} name={context.chatDetailsState.name}/>
            <MessageSend message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div>
    )
}

export default Chat
