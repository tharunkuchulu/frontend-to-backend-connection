// src/Message.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Message() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from Django API
    axios.get('http://127.0.0.1:8000/app/greet/')
      .then(response => {
        setMessage(response.data.message);  // Store response in state
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <h1 sx={{position:'relative', left:'250px'}}>{message}</h1> 
  );
}

export default Message;