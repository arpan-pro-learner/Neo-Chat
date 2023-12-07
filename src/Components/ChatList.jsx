// ChatList.js
// eslint-disable-next-line react/prop-types
const ChatList = ({ onChatClick }) => {
  const chatData = [
    { name: 'Mighty Raju', imgSrc: 'https://m.media-amazon.com/images/S/pv-target-images/325e0b156b7af056567d6c35164deed4e06b3ffaa6c264373f11609e27e23d68.jpg'},
    { name: 'Chota Bheem', imgSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Chhota_Bheem.jpg/250px-Chhota_Bheem.jpg' },
    { name: 'Albin Arun', imgSrc: 'https://i.ytimg.com/vi/3_g2un5M350/sddefault.jpg' },
  ];

  return (
    <div className="w-full lg:w-3/12 bg-[#181818] p-4 text-white m-3 rounded-xl">
      <h2 className="text-xl mb-4 text-gray-400">All Your Chats</h2>
      <div className="border bg-[#F3AE9F] rounded-lg p-2 mt-4 text-sm">
        <div className="flex justify-center items-center text-lg m-1">
          <span className="text-[#181818] font-semibold"><span className="material-symbols-outlined align-middle">chat</span> Chat Images: ON</span>
        </div>
      </div>
      <p className="text-gray-300 text-sm m-3">When a bot sends you images, you will be charged one secondary image</p>
      <div>
        {chatData.map(({ name, imgSrc }) => (
          <div
            key={name}
            onClick={() => onChatClick(name)}
            className="cursor-pointer hover:bg-gray-700 p-2 rounded-full mb-2"
            style={{ backgroundColor: '#2F2F2F', display: 'flex', alignItems: 'center' }}
          >
            <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
              <img src={imgSrc} alt={`${name} profile`} className="w-full h-full object-cover" />
            </div>
            <span>{name}</span>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button className="bg-[#F3AE9F] text-black px-2 py-2 rounded-full relative align-middle ">
          <span className="m-2  material-symbols-outlined   ">add</span>
        </button>
        <p className="inline m-2 text-xl ml-2">Create a bot</p>
      </div>
    </div>
  );
};

export default ChatList;
