import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { y: -65 },
    closed: { y: -300 },
  };
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
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
          Menu
        </motion.button>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial="closed"
              animate="open"
              exit="closed"
              variants={variants}
              transition={{ duration: 0.5 }}
              className="absolute bg-orange-500 w-screen left-0 right-0 p-10 z-10 flex flex-row justify-between items-start"
            >
              <p className="font-thin">Nexus Technologies</p>
              <motion.ul
                variants={{
                  open: {
                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.7,
                      delayChildren: 0.3,
                      staggerChildren: 0.05,
                    },
                  },
                  closed: {
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.3,
                    },
                  },
                }}
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
              >
                <motion.li variants={itemVariants}>Home</motion.li>
                <motion.li variants={itemVariants}>About</motion.li>
                <motion.li variants={itemVariants}>Services</motion.li>
                <motion.li variants={itemVariants}>Contact</motion.li>
              </motion.ul>
              <motion.button
                className="font-thin"
                onClick={() => setIsOpen(!isOpen)}
              >
                Close
              </motion.button>
            </motion.ul>
          )}
        </AnimatePresence>
      </ul>
    </nav>
  );
}
