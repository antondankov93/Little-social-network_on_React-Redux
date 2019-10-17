import React from 'react';
import Post from "./Home-Page/MyPosts/Post";
import styles from "./InsideContent.module.css";
import Messages from "./My-Messages/Messages-template";
import Contacts from "./Contacts/contacts-template";
import Events from "./Events/events-template";
import Calendar from "./Events/Family-Calendar/calendar-template";
import TodoList from "./TODO-lists/todo-list-template";
import  {Route} from "react-router-dom";


const InsideContent = (props) => {

    return (
            <div className={styles.insideContent}>
                <Route path='/MainContent/InsideContent/Events' render={ () => <Events />} />
                <Route path='/MainContent/InsideContent/Contacts' render={ () => <Contacts />} />
                <Route path='/MainContent/InsideContent/TODO-lists' render={ () => <TodoList />} />
                <Route path='/MainContent/InsideContent/My-Messages' render={ () => <Messages AvatarLogo={props.AvatarLogo} MessagesProps={props.MessagesProps} Persons={props.Persons}/>} />
                <Route path='/MainContent/InsideContent/My-Profile' render={ () => <Post dispatch={props.dispatch} PostWindow={props.PostWindow}/>} />
            </div>

    );

}


export default InsideContent;