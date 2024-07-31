import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useWebSocket } from "../hooks/useWebSocket";

const ChatWindow = ({ selectedChat, onDeleteChat }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState(null);
  const { socket, sendMessage } = useWebSocket();

  useEffect(() => {
    if (selectedChat) {
      const dummyMessages = getDummyMessages(selectedChat);
      setMessages(dummyMessages);
    }
  }, [selectedChat]);

  const getDummyMessages = (name) => {
    switch (name) {
      case "Mighty Raju":
        return [
          { text: "Hey", sender: "user", time: new Date() },
          { text: "Hey Mighty raju", sender: "other", time: new Date() },
          {
            text: "How are you? When your new movie coming?",
            sender: "other",
            time: new Date(),
          },
        ];
      case "Chota Bheem":
        return [
          { text: "Hi", sender: "user", time: new Date() },
          {
            text: "Hi Bheem Nice to see you",
            sender: "other",
            time: new Date(),
          },
        ];
      default:
        return [];
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() || attachment) {
      const newMessage = {
        text: message,
        sender: "user",
        attachment,
        time: new Date(),
      };
      setMessages([...messages, newMessage]);
      sendMessage(selectedChat, { message, attachment });
      setMessage("");
      setAttachment(null);
    }
  };

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");

    // Determine AM or PM suffix
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert hours from 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Format hours to be 2 digits if needed
    const formattedHours = hours.toString().padStart(2, "0");

    // Return formatted time string with AM/PM suffix
    return `${formattedHours}:${minutes} ${ampm}`;
  };

  return (
    <div className="w-full lg:w-9/12 bg-[#181818] text-white p-4 flex flex-col h-screen">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          {selectedChat && (
            <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
              <img
                src={selectedChat.profileImage || "default-chat-image.jpg"} // Ensure this matches the profile image
                alt="User Profile"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <h2 className="text-xl">
            {selectedChat ? selectedChat.name : "Select a chat"}
          </h2>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onDeleteChat(selectedChat)}
            className="text-white hover:text-gray-400"
          >
            <span className="material-symbols-outlined">delete</span> Delete
          </button>
        </div>
      </div>
      <div className="flex-grow overflow-y-auto mb-2">
        {messages.length > 0 &&
          messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 ${
                msg.sender === "user"
                  ? "text-white bg-[#2F2F2F] mr-auto"
                  : "text-black bg-[#F3AE9F] ml-auto"
              } p-2 rounded w-fit`}
            >
              {msg.attachment && (
                <div className="mb-2">
                  {msg.attachment.type.startsWith("image/") ? (
                    <img
                      src={URL.createObjectURL(msg.attachment)}
                      alt="attachment"
                      className="w-32 h-32 object-cover"
                    />
                  ) : (
                    <div className="text-sm text-gray-500">
                      File: {msg.attachment.name}
                    </div>
                  )}
                </div>
              )}
              <p>{msg.text}</p>
              <div className="text-xs text-gray-400">
                {formatTime(msg.time)}
              </div>
            </div>
          ))}
      </div>
      {selectedChat && (
        <div className="flex flex-col lg:flex-row items-center mt-auto">
          <input
            type="file"
            onChange={(e) => setAttachment(e.target.files[0])}
            className="file-input mb-2 lg:mb-0"
            accept="image/*"
          />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            className="flex-grow bg-[#2F2F2F] text-white p-2 rounded"
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 bg-[#F3AE9F] p-2 rounded text-black"
          >
            Send
          </button>
        </div>
      )}
    </div>
  );
};

ChatWindow.propTypes = {
  selectedChat: PropTypes.object.isRequired,
  onDeleteChat: PropTypes.func.isRequired,
};

export default ChatWindow;

// ChatWindow.js old
// const ChatWindow = ({ selectedChat, onChatClick }) => {
//   const chatData = [
//     { name: 'Mighty Raju', imgSrc: 'https://m.media-amazon.com/images/S/pv-target-images/325e0b156b7af056567d6c35164deed4e06b3ffaa6c264373f11609e27e23d68.jpg'},
//     { name: 'Chota Bheem', imgSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Chhota_Bheem.jpg/250px-Chhota_Bheem.jpg' },
//     { name: 'Albin Arun', imgSrc: 'https://i.ytimg.com/vi/3_g2un5M350/sddefault.jpg' },
//     { name: 'Null', imgSrc: '' },
//   ];

//   const getDummyMessages = (name) => {
//     switch (name) {
//       case 'Mighty Raju':
//         return [
//           { text: 'Hey', sender: 'user' },
//           { text: 'Hey Mighty raju', sender: 'other' },
//           { text: 'How are you? When your new moving coming ', sender: 'other' }
//         ];
//       case 'Chota Bheem':
//         return [
//           { text: 'Hi ', sender: 'user' },
//           { text: 'Hi bheem Nice to see you', sender: 'other' }
//         ];
//       case 'Albin Arun':
//         return [
//           { text: 'Hey Arpan', sender: 'user' },
//           { text: 'hello albin', sender: 'other' },
//           { text: 'What\'s up?', sender: 'other' },
//           { text: 'Bro looks like your are fan of weeknd', sender: 'other ' },

//         ];
//       default:
//         return [];
//     }
//   };

//   return (
//     <div className="w-full lg:w-10/12 bg-[#181818] text-white p-4 flex flex-col h-full">
//       <div className="flex justify-between items-center mb-4">
//         <div className="flex items-center">
//           {/* Retrieve user profile picture from ChatList */}
//           {selectedChat && (
//             <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
//               <img
//                 src={chatData.find((chat) => chat.name === selectedChat)?.imgSrc || "user-profile-image.jpg"}
//                 alt="User Profile"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           )}
//           {/* Display user name here */}
//           <h2 className="text-xl">{selectedChat || 'Select a chat'}</h2>
//         </div>
//         <div className="flex space-x-2">
//           <button className="text-white hover:text-gray-400">
//             <span className="material-symbols-outlined align-middle">arrow_back</span> Back
//           </button>
//           <button className="text-white hover:text-gray-400">
//             <span className="material-symbols-outlined align-middle">delete</span> Delete
//           </button>
//         </div>
//       </div>
//       <div className="flex-grow">
//         {getDummyMessages(selectedChat).map((message, index) => (
//           <div
//             key={index}
//             className={`mb-2 ${message.sender === 'user' ? 'text-white bg-[#2F2F2F] mr-auto' : 'text-black bg-[#F3AE9F] ml-auto'} p-2 rounded w-fit`}
//           >
//             {message.text}
//           </div>
//         ))}
//       </div>
//       <div className="flex items-end">
//         <input
//           type="text"
//           placeholder="Message here"
//           className="p-2 w-full rounded-full  bg-[#2F2F2F] text-white"
//         />
//         <button className="bg-[#F3AE9F] text-black px-4 py-2 rounded-full ml-2"><span className="material-symbols-outlined align-text-bottom ">send</span></button>
//       </div>
//     </div>
//   );

// };

// export default ChatWindow;
