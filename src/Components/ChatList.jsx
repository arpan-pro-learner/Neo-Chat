import React, { useState } from "react";
import PropTypes from "prop-types";

const ChatList = ({ chats, onChatClick, onAddChat, onDeleteChat }) => {
  const [newChatName, setNewChatName] = useState("");
  const [newChatImg, setNewChatImg] = useState(null);

  const handleAddChatClick = () => {
    if (newChatName) {
      const imgSrc = newChatImg ? URL.createObjectURL(newChatImg) : "";
      onAddChat(newChatName, imgSrc);
      setNewChatName("");
      setNewChatImg(null);
    }
  };

  return (
    <div className="w-full lg:w-3/12 bg-[#181818] p-4 text-white m-3 rounded-xl">
      <h2 className="text-xl mb-4 text-gray-400">All Your Chats</h2>
      <div className="border bg-[#F3AE9F] rounded-lg p-2 mt-4 text-sm">
        <div className="flex flex-col items-center text-lg m-1">
          <button
            onClick={() => {
              const chatName = prompt("Enter new chat name:");
              const img = prompt("Enter image URL (or leave blank):");
              if (chatName) {
                onAddChat(chatName, img);
              }
            }}
            className="material-symbols-outlined align-left text-[#181818]"
          >
            chat
          </button>
          <span className="text-[#181818] font-semibold mt-2">
            Add New Chat
          </span>
        </div>
      </div>
      <p className="text-gray-300 text-sm m-3">
        Click the button Add New Chat Above to start a new chat
      </p>
      <div>
        {chats.length > 0 &&
          chats.map(({ name, imgSrc }) => (
            <div
              key={name}
              onClick={() => onChatClick(name)}
              className="cursor-pointer hover:bg-gray-700 p-2 rounded-full mb-2"
              style={{
                backgroundColor: "#2F2F2F",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                <img
                  src={imgSrc}
                  alt={`${name} profile`}
                  className="w-full h-full object-cover"
                />
              </div>
              <span>{name}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (window.confirm(`Delete chat with ${name}?`)) {
                    onDeleteChat(name);
                  }
                }}
                className="ml-2 text-red-500"
              >
                <span className="material-symbols-outlined align-middle">
                  delete
                </span>
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

ChatList.propTypes = {
  chats: PropTypes.array.isRequired,
  onChatClick: PropTypes.func.isRequired,
  onAddChat: PropTypes.func.isRequired,
  onDeleteChat: PropTypes.func.isRequired,
};

export default ChatList;

//old code chatlist

// eslint-disable-next-line react/prop-types
// const ChatList = ({ onChatClick }) => {
//   const chatData = [
//     {
//       name: "Mighty Raju",
//       imgSrc:
//         "https://m.media-amazon.com/images/S/pv-target-images/325e0b156b7af056567d6c35164deed4e06b3ffaa6c264373f11609e27e23d68.jpg",
//     },
//     {
//       name: "Chota Bheem",
//       imgSrc:
//         "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Chhota_Bheem.jpg/250px-Chhota_Bheem.jpg",
//     },
//     {
//       name: "Albin Arun",
//       imgSrc: "https://i.ytimg.com/vi/3_g2un5M350/sddefault.jpg",
//     },
//   ];

//   return (
//     <div className="w-full lg:w-3/12 bg-[#181818] p-4 text-white m-3 rounded-xl">
//       <h2 className="text-xl mb-4 text-gray-400">All Your Chats</h2>
//       <div className="border bg-[#F3AE9F] rounded-lg p-2 mt-4 text-sm">
//         <div className="flex justify-center items-center text-lg m-1">
//           <span className="text-[#181818] font-semibold">
//             <button className="material-symbols-outlined align-middle">
//               chat
//             </button>{" "}
//             Add New Chat
//           </span>
//         </div>
//       </div>
//       <p className="text-gray-300 text-sm m-3">
//         Click the button Add New Chat Above to start a new chat
//       </p>
//       <div>
//         {chatData.map(({ name, imgSrc }) => (
//           <div
//             key={name}
//             onClick={() => onChatClick(name)}
//             className="cursor-pointer hover:bg-gray-700 p-2 rounded-full mb-2"
//             style={{
//               backgroundColor: "#2F2F2F",
//               display: "flex",
//               alignItems: "center",
//             }}
//           >
//             <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
//               <img
//                 src={imgSrc}
//                 alt={`${name} profile`}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <span>{name}</span>
//           </div>
//         ))}
//       </div>
//       <div className="mt-4">
//         {/* <button className="bg-[#F3AE9F] text-black px-2 py-2 rounded-full relative align-middle ">
//           <span className="m-2  material-symbols-outlined   ">add</span>
//         </button> */}
//         {/* <p className="inline m-2 text-xl ml-2">Create new chat</p> */}
//       </div>
//     </div>
//   );
// };

// export default ChatList;
