// import React, { useState } from 'react';
// import useWebSocket from '../hooks/useWebSocket';

// const ChatComponent = () => {
//     const { messages, sendMessage } = useWebSocket();
//     const [message, setMessage] = useState('');

//     const handleSendMessage = (e: React.FormEvent) => {
//         e.preventDefault();
//         sendMessage(message);  // Gửi tin nhắn qua WebSocket
//         setMessage(''); // Xóa input sau khi gửi
//     };

//     return (
//         <div>
//             <h1>Chat</h1>
//             <form onSubmit={handleSendMessage}>
//                 <input
//                     type="text"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     placeholder="Enter your message"
//                     required
//                 />
//                 <button type="submit">Send</button>
//             </form>

//             <div>
//                 <h2>Messages:</h2>
//                 <ul>
//                     {messages.map((msg, index) => (
//                         <li key={index}>{msg}</li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default ChatComponent;
