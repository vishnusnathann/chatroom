import React,{useEffect, useReducer} from 'react';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom';
import './App.css'
import {ADD_NAME,ADD_ROOM} from '../types';
import Join from '../Components/Join/Join';
import Chat from '../Components/Chat/Chat';

const intialState ={
    name:"",
    room:""
}

const reducer = (state,action) =>{
    switch(action.type){
        case ADD_NAME:
            return {...state,name:action.payload.name};
        case ADD_ROOM:
            return {...state,room:action.payload.room};
        default:
            return state;

    }
}

    export const Context = React.createContext()
    

function App() { 

    const [chatDetailsState , dispatch] = useReducer(reducer,intialState)

useEffect(() => {
    console.log(chatDetailsState);
}, [chatDetailsState])


    return (
        <Context.Provider value={{ chatDetailsState, dispatch }}>
            <div>
                <Router>
                    <Route path="/" exact component={Join} />
                    <Route path="/chat" component={Chat} />
                    <Redirect to="/" />
                </Router>
            </div>
        </Context.Provider>
    )
}

export default App
