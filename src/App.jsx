import { useState } from "react";
import Loaded from "./components/Loaded";
import "./App.css";
import NavBar from "./components/NavBar";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <Loaded />
      <motion.div
        initial={{ y: 0, opacity: 0, visibility: "hidden" }}
        animate={{
          y: "-100vh",
          opacity: 1,
          visibility: "visible",
        }}
        transition={{ duration: 1, delay: 2 }}
      >
        <NavBar />
      </motion.div>
    </>
  );
}

export default App;
