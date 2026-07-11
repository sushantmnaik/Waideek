'use client';
// import Image from "next/image"
import '../app/extra.css'
// import ban from '../components/ban'


// import React from 'react'
import { useState } from 'react';

const Banner = () => {
const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: string, text: string}[]>([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to UI
    setMessages([...messages, { role: 'user', text: input }]);
    
    // Call your own internal API
    const res = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });
    
    const data = await res.json();
    setMessages(prev => [...prev, { role: 'ai', text: data.reply }]);
    setInput('');
  };

  return (
    <>
    <input type="search" name="srch" id="srch" placeholder='What do you want to ask...' value={input} onChange={(e) => setInput(e.target.value)} /> 
    <button type="submit" onClick={sendMessage}>Search</button>
    {messages.map((m, i) => <p key={i}><strong>{m.role}:</strong> {m.text}</p>)}

    </>
  )
}

export default Banner