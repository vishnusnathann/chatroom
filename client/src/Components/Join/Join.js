import React,{useState,useContext} from 'react';
import './Join.css';
import {Context} from '../../App/App';
import {ADD_NAME,ADD_ROOM} from '../../types';

function Join(props) {


    const onJoinChat=(e)=>{
        e.preventDefault();
        props.history.push('/chat');
    }

    const context = useContext(Context);

    return (
            <>

            <div className="join-container" onSubmit={(e)=>onJoinChat(e)}>
                <form className="join-form">
                    <h2>Join Chat</h2>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={context.chatDetailsState.name} onChange={(e)=>{context.dispatch({type:ADD_NAME,payload:{name:e.target.value}})}} required/>
                    <label htmlFor="room">Room</label>
                    <input type="text" name="room" value={context.chatDetailsState.room} onChange={(e)=>{context.dispatch({type:ADD_ROOM,payload:{room:e.target.value}})}} required/>
                    <input type="submit" className="submit" value="Join" />
                </form>
            </div>
            </>
    )
}

export default Join
