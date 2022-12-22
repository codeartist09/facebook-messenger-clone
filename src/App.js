import React, { useEffect, useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import './App.css';
import Message from './Message';
// import db from './firebase';
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp, orderBy, query } from "firebase/firestore";
import FlipMove from 'react-flip-move';
import { IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';


import { collection, addDoc, onSnapshot, setDoc, doc } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAldWypmExFBBCNpksrBenEwo3i8uanigQ",
  authDomain: "facebook-messenger-clone-5c4e2.firebaseapp.com",
  projectId: "facebook-messenger-clone-5c4e2",
  storageBucket: "facebook-messenger-clone-5c4e2.appspot.com",
  messagingSenderId: "15350702199",
  appId: "1:15350702199:web:560fb1f4b4ada8c05b6672",
  measurementId: "G-G6GSMXTHPD"

});

const db = getFirestore();

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  
  

  useEffect(() => {

    try {
      const messageCollection = collection(db, "messages")
      const q = query(messageCollection, orderBy("timestamp", "desc"))
      const unsub = onSnapshot(q, (snapshot) => {
        const mappedMessages= (snapshot.docs.map((doc) => ({id: doc.id, message: doc.data()})))
        setMessages(mappedMessages)
    });
    } catch (e) {
      console.error("Error getting snapshot: ", e);
    }

  }, [] )
  useEffect(() => {
    setUsername(prompt('Enter your name'))
  }, [] )

  const sendMessage = (event) => {
    // logic to send a message
    event.preventDefault();
    const document = addDoc(collection(db, "messages"), {
      username: username,
      text: input,
      timestamp: serverTimestamp()
    });
    setInput('');
  }
  return (
    <div className="App">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png?" width= "200" height ="200" />
      <h1>Messenger</h1>
      <h4>Welcome {username}</h4>
      <form className= "app__form">
      <FormControl class="app__formControl">
        <Input className="app__Input" placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)} />
        <IconButton className = "app__iconButton"
        disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage} >
          
          <SendIcon />

        </IconButton>
      </FormControl>
      </form>
      <FlipMove>
      {
        messages.map(({id, message}) => (
          <Message key={id} username={username} message={message} />
        ))
      }
      </FlipMove>
    </div>
  );
}

export default App;
