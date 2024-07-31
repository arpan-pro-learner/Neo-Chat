import React, { useState } from "react";
import ChatList from "../src/Components/ChatList";
import ChatWindow from "../src/Components/ChatWindow";
import Header from "../src/Components/Header";
import Footer from "../src/Components/Footer";

const App = () => {
  const [chats, setChats] = useState([
    {
      name: "Mighty Raju",
      imgSrc:
        "https://m.media-amazon.com/images/S/pv-target-images/325e0b156b7af056567d6c35164deed4e06b3ffaa6c264373f11609e27e23d68.jpg",
    },
    {
      name: "Chota Bheem",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Chhota_Bheem.jpg/250px-Chhota_Bheem.jpg",
    },
  ]);
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatClick = (chatName) => {
    setSelectedChat(chatName);
  };

  const handleAddChat = (chatName, imgSrc) => {
    setChats([...chats, { name: chatName, imgSrc }]);
  };

  const handleDeleteChat = (chatName) => {
    const newChats = chats.filter((chat) => chat.name !== chatName);
    setChats(newChats);
    if (selectedChat === chatName) {
      setSelectedChat(null);
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row h-screen">
        <ChatList
          chats={chats}
          onChatClick={handleChatClick}
          onAddChat={handleAddChat}
          onDeleteChat={handleDeleteChat}
        />
        <ChatWindow
          selectedChat={selectedChat}
          onChatClick={handleChatClick}
          onDeleteChat={handleDeleteChat}
        />
      </div>
      <Footer />
    </>
  );
};

export default App;
