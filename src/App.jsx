
import Header from './Components/Header';
import Footer from './Components/Footer';
import ChatList from './Components/ChatList';
import ChatWindow from './Components/ChatWindow';
import { useState } from 'react';

const App = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatClick = (name) => {
    setSelectedChat(name);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <ChatList onChatClick={handleChatClick} />
        <ChatWindow selectedChat={selectedChat} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
