// Footer.js


// Footer.js
const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row justify-between items-center p-4 bg-black text-white">
      <div className="text-2xl font-bold text-[#F3AE9F]">Logo</div>
      <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
        <p className="text-gray-500">dummy@email.com</p>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-[#F3AE9F]">
            Instagram
          </a>
          <a href="#" className="text-white hover:text-[#F3AE9F]">
            Telegram
          </a>
          <a href="#" className="text-white hover:text-[#F3AE9F]">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
