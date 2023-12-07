// ChatWindow.js old 
const ChatWindow = ({ selectedChat, onChatClick }) => {
  const chatData = [
    { name: 'Mighty Raju', imgSrc: 'https://m.media-amazon.com/images/S/pv-target-images/325e0b156b7af056567d6c35164deed4e06b3ffaa6c264373f11609e27e23d68.jpg'},
    { name: 'Chota Bheem', imgSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Chhota_Bheem.jpg/250px-Chhota_Bheem.jpg' },
    { name: 'Albin Arun', imgSrc: 'https://i.ytimg.com/vi/3_g2un5M350/sddefault.jpg' },
    { name: 'Null', imgSrc: '' },
  ];

  const getDummyMessages = (name) => {
    switch (name) {
      case 'Mighty Raju':
        return [
          { text: 'Hey', sender: 'user' },
          { text: 'Hey Mighty raju', sender: 'other' },
          { text: 'How are you? When your new moving coming ', sender: 'other' }
        ];
      case 'Chota Bheem':
        return [
          { text: 'Hi ', sender: 'user' },
          { text: 'Hi bheem Nice to see you', sender: 'other' }
        ];
      case 'Albin Arun':
        return [
          { text: 'Hey Arpan', sender: 'user' },
          { text: 'hello albin', sender: 'other' },
          { text: 'What\'s up?', sender: 'other' },
          { text: 'Bro looks like your are fan of weeknd', sender: 'other ' },
        
        ];
      default:
        return [];
    }
  };

  return (
    <div className="w-full lg:w-10/12 bg-[#181818] text-white p-4 flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          {/* Retrieve user profile picture from ChatList */}
          {selectedChat && (
            <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
              <img
                src={chatData.find((chat) => chat.name === selectedChat)?.imgSrc || "user-profile-image.jpg"}
                alt="User Profile"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          {/* Display user name here */}
          <h2 className="text-xl">{selectedChat || 'Select a chat'}</h2>
        </div>
        <div className="flex space-x-2">
          <button className="text-white hover:text-gray-400">
            <span className="material-symbols-outlined align-middle">arrow_back</span> Back
          </button>
          <button className="text-white hover:text-gray-400">
            <span className="material-symbols-outlined align-middle">delete</span> Delete
          </button>
        </div>
      </div>
      <div className="flex-grow">
        {getDummyMessages(selectedChat).map((message, index) => (
          <div
            key={index}
            className={`mb-2 ${message.sender === 'user' ? 'text-white bg-[#2F2F2F] mr-auto' : 'text-black bg-[#F3AE9F] ml-auto'} p-2 rounded w-fit`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="flex items-end">
        <input
          type="text"
          placeholder="Message here"
          className="p-2 w-full rounded-full  bg-[#2F2F2F] text-white"
        />
        <button className="bg-[#F3AE9F] text-black px-4 py-2 rounded-full ml-2"><span className="material-symbols-outlined align-text-bottom ">send</span></button>
      </div>
    </div>
  );
  
};

export default ChatWindow;
