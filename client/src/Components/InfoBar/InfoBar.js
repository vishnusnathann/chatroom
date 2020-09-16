import React from 'react';
import "./InfoBar.css";
import {Context} from '../../App/App';
import { FaRegWindowClose } from "react-icons/fa";

function InfoBar(props) {
    return (
        <div className="infobar-container">
            <span className="room-name">{props.roomname}</span>
            <a className="close" href="/"><FaRegWindowClose/></a>
        </div>
    )
}

export default InfoBar
