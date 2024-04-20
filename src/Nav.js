import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

//Images
import helmet1 from "./image/helmet-one.png";
import helmet2 from "./image/helmet-two.png";
import helmet3 from "./image/helmet-three.png";

const Nav = () => {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  return (
    <nav className="text-sm">
      <div className="flex items-center justify-between w-full px-10 h-14">
        <div className="text-4xl flex-1 text-darkOrage font-bold tracking-wider py-2">
          EVNX.
        </div>
        <div className="flex flex-1 items-center justify-start space-x-0 uppercase h-full">
          <NavLink
            className="hover:bg-gray-200 h-full flex items-center px-4"
            end
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="hover:bg-gray-200 h-full flex items-center px-4"
            to="/blog"
          >
            Blog
          </NavLink>
          <NavLink
            className={`relative ${
              dropDownMenu ? "bg-gray-200" : ""
            } h-full px-4 flex items-center justify-between space-x-1 cursor-pointer`}
            to="/category"
            onMouseEnter={() => setDropDownMenu(true)}
            onMouseLeave={() => setDropDownMenu(false)}
          >
            <div className="flex items-center justify between space-x-1">
              <span>Category</span>
              <motion.div
                animate={{ rotate: dropDownMenu ? 180 : 0 }}
                transition={{ duration: 0.3, type: "spring" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="rgba(255, 79, 55, 1)"
                >
                  <path d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z"></path>
                </svg>
              </motion.div>
            </div>
            <AnimatePresence>
              {dropDownMenu && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 1, height: 0 }}
                  transition={{ duration: 0.05 }}
                  className="absolute -left-1 top-14 flex flex-col items-center
              justify-around w-max bg-gray-200"
                >
                  <div className="flex justify-start items-center border-b-[1px] border-gray-300 py-2 px-5 space-x-2 hover:bg-gray-100">
                    <img className="w-7" src={helmet1} alt="Helmet1" />
                    <div className="uppercase  whitespace-nowrap">
                      Full face helmet
                    </div>
                  </div>
                  <div className="flex justify-start items-center border-b-[1px]  py-2 px-5 space-x-2 hover:bg-gray-100">
                    <img className="w-7" src={helmet2} alt="Helmet1" />
                    <div className="uppercase  whitespace-nowrap">
                      Modular helmet
                    </div>
                  </div>
                  <div className="flex justify-start items-center border-b-[1px]  py-2 px-5 space-x-2 hover:bg-gray-100">
                    <img className="w-7" src={helmet3} alt="Helmet1" />
                    <div className="uppercase whitespace-nowrap">
                      Half face helmet
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </NavLink>
          <NavLink
            className="hover:bg-gray-200 h-full flex items-center px-4"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
        <div className="flex items-center justify-end space-x-10 flex-1">
          <div className="flex items-center justify-between space-x-1 cursor-pointer">
            <span>USD</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="rgba(255, 79, 55, 1)"
              whileHover={{ rotate: 180 }}
            >
              <path d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z"></path>
            </motion.svg>
          </div>
          <div className="flex items-center justify-between px-2 border border-gray-300 rounded-sm">
            <input
              className="outline-none"
              type="text"
              id="search"
              name="search"
              placeholder="Search"
              autoComplete="off"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="rgba(71, 71, 71, 1)"
            >
              <path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
            </svg>
          </div>
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill=" rgba(71, 71, 71, 1)"
            >
              <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path>
              <circle cx="10.5" cy="19.5" r="1.5"></circle>
              <circle cx="17.5" cy="19.5" r="1.5"></circle>
            </svg>
          </div>
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill=" rgba(71, 71, 71, 1)"
            >
              <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
