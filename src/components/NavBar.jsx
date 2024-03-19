import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { y: -65 },
    closed: { y: -200 },
  };

  return (
    <nav className="bg-white flex justify-between p-10 relative">
      <ul>
        <p className="font-thin">Nexus Technologies</p>
      </ul>
      <ul>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="font-thin"
        >
          {isOpen ? "close" : "menu"}
        </motion.button>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial="closed"
              animate="open"
              exit="closed"
              variants={variants}
              transition={{ duration: 0.5 }}
              className="absolute bg-orange-500 w-screen left-0 right-0 p-10 z-10 flex flex-row justify-between items-center"
            >
              <div className="flex flex-row">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </div>
              <motion.button
                className="font-thin"
                onClick={() => setIsOpen(!isOpen)}
              >
                close
              </motion.button>
            </motion.ul>
          )}
        </AnimatePresence>
      </ul>
    </nav>
  );
}
