import React from "react";

function Footer() {
  return (
    <footer className=" text-center text-sm mt-auto text-black dark:text-[#A6ADBA] p-4 bg-[#cedadf]  shadow-inner dark:bg-[#191D24] duration-200">
      <div className="border-b  border-[#2e2e2e94] dark:border-[#ffffff2a] p-4">
        <a href="https://www.twitter.com" target="_blank" className="text-2xl px-2 hover:text-[#6419E6] transition-all  dark:hover:text-white ">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" className="text-2xl px-2 hover:text-[#6419E6] transition-all  dark:hover:text-white ">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com" target="_blank" className="text-2xl px-2 hover:text-[#6419E6] transition-all  dark:hover:text-white ">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
      </div>
      <div className="p-4 ">
        <p>Copyright © 2024 - All right reserved</p>
        <p>
          Designed by{" "}
          <a
            className="font-medium text-black dark:text-white dark:lg:text-[#A6ADBA] hover:text-[#6419E6] dark:hover:text-white transition-all"
            href="https://github.com/Anuj579"
            target='_blank'
          >
            AnujChaudhary
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
