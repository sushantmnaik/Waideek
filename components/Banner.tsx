// // 'use client';
// // // import Image from "next/image"
// // import '../app/extra.css'
// // // import ban from '../components/ban'


// // // import React from 'react'
// // import { useState, useRef, useEffect } from 'react';

// // const Banner = () => {
// // const [input, setInput] = useState('');
// //   const [messages, setMessages] = useState<{role: string, text: string}[]>([]);
// // const inprf= useRef<HTMLInputElement>(null);

// // useEffect(()=>{
// //   const inp =inprf.current
// //   if (!inp) return;

// //   const handleKeyPress = (e: KeyboardEvent) => {
// //       if (e.key === "Enter") {
// //         console.log(e);
// //         // Call your sendMessage logic here if needed
// //         sendMessage()
// //       }
// //     };

// //     inp.addEventListener("keypress", handleKeyPress);

// //     // Cleanup the event listener on unmount
// //     return () => {
// //       inp.removeEventListener("keypress", handleKeyPress);
// //     };
// //   }, []);

// // })

  
  

// //   const sendMessage = async () => {
// //     if (!input.trim()) return;

// //     // Add user message to UI
// //     setMessages([...messages, { role: 'user', text: input }]);
    
// //     // Call your own internal API
// //     const res = await fetch('/api/ai', {
// //       method: 'POST',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify({ message: input }),
// //     });
    
// //     const data = await res.json();
// //     setMessages(prev => [...prev, { role: 'ai', text: data.reply }]);
// //     setInput('');
// //   };

// //   return (
// //     <>
// //     <input type="search" name="srch" id="srch" placeholder='What do you want to ask...' value={input} onChange={(e) => setInput(e.target.value)} /> 
// //     <button type="submit" onClick={sendMessage} className="fl mr-5 hover:text-white inline-flex items-center border-2 py-1 px-1 bg-gray-600 focus:outline-none hover:bg-gray-500 rounded text-base mt-4 cursor-pointer md:mt-0" >Search</button>
// //     {messages.map((m, i) => < p key={i} className=' opacity-80 border-4 border-blue-400 bg-blue-400 p-2'><strong className="col-end-1 bold ">{m.role}:</strong> {m.text}</p>)}

// //     </>
// //   )
// // }

// // export default Banner


// 'use client';
// // import Image from "next/image"
// import '../app/extra.css'
// // import ban from '../components/ban'

// // import React from 'react'
// import { useState, useRef, useEffect } from 'react';

// const Banner = () => {
//   const [input, setInput] = useState('');
//   const [messages, setMessages] = useState<{role: string, text: string}[]>([]);
//   const inprf = useRef<HTMLInputElement>(null);

//   async function sendMessage() {
//     if (!input.trim()) return;

//     // Add user message to UI
//     setMessages(prev => [...prev, { role: 'user', text: input }]);
    
//     // Call your own internal API
//     const res = await fetch('/api/ai', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ message: input }),
//     });
    
//     const data = await res.json();
//     setMessages(prev => [...prev, { role: 'ai', text: data.reply }]);
//     setInput('');
//   };


//   useEffect(() => {
//     const inp = inprf.current;
//     if (!inp) return;

//     const handleKeyPress = (e: KeyboardEvent) => {
//       if (e.key === "Enter") {
//         sendMessage();
//       }
//     };

//     inp.addEventListener("keypress", handleKeyPress);

//     // Cleanup the event listener on unmount
//     return () => {
//       inp.removeEventListener("keypress", handleKeyPress);
//     };
//   }, []);

  
//   return (
//     <>
//       <input 
//         type="search" 
//         name="srch" 
//         id="srch" 
//         ref={inprf} 
//         placeholder='What do you want to ask...' 
//         value={input} 
//         onChange={(e) => setInput(e.target.value)} 
//       /> 
//       <button 
//         type="submit" 
//         onClick={sendMessage} 
//         className="fl mr-5 hover:text-white inline-flex items-center border-2 py-1 px-1 bg-gray-600 focus:outline-none hover:bg-gray-500 rounded text-base mt-4 cursor-pointer md:mt-0"
//       >
//         Search
//       </button>
//       {messages.map((m, i) => (
//         <p key={i} className='opacity-80 border-4 border-blue-400 bg-blue-400 p-2'>
//           <strong className="col-end-1 bold">{m.role}:</strong> {m.text}
//         </p>
//       ))}
//     </>
//   );
// };

// export default Banner;


'use client';

import '../app/extra.css'
import { useState } from 'react';

const Banner = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: string, text: string}[]>([]);

  const sendMessage = async (e: React.FormEvent) => {
    // Prevent page reload on form submit
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message to UI
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    
    // Store current input for the API call before clearing
    const currentInput = input;
    setInput('');

    // Call your own internal API
    const res = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: currentInput }),
    });
    
    const data = await res.json();
    setMessages(prev => [...prev, { role: 'ai', text: data.reply }]);
  };

  return (
    <form onSubmit={sendMessage}>
      <input 
        type="search" 
        name="srch" 
        id="srch" 
        placeholder='What do you want to ask...' 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      /> 
      <button 
        type="submit" 
        className="fl mr-5 hover:text-white inline-flex items-center border-2 py-1 px-1 bg-gray-600 focus:outline-none hover:bg-gray-500 rounded text-base mt-4 cursor-pointer md:mt-0"
      >
        Search
      </button>
      {messages.map((m, i) => (
        <p key={i} className='opacity-80 border-4 border-blue-400 bg-blue-400 p-2'>
          <strong className="col-end-1 bold">{m.role}:</strong> {m.text}
        </p>
      ))}
    </form>
  );
};

export default Banner;