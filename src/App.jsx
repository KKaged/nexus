import { useState, useEffect } from "react";
import Loaded from "./components/Loaded";
import "./App.css";
import NavBar from "./components/NavBar";
import { motion } from "framer-motion";
import LandAbout from "./components/LandAbout";

function App() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <motion.div
        className="font-medium text-orange-500 underline text-2xl underline-offset-8 w-screen h-screen flex justify-center items-center bg-zinc-900 text-center"
        initial={{ opacity: 1 }}
        animate={{ y: "-125%" }}
        transition={{ duration: 1, delay: 2 }}
        onAnimationComplete={() => setAnimationComplete(true)} // Set animationComplete to true when the first animation is complete
      >
        <Loaded />
      </motion.div>

      {animationComplete && (
        <motion.div
          initial={{ y: 0, opacity: 0, visibility: "hidden" }}
          animate={{
            y: "-100vh",
            opacity: 1,
            visibility: "visible",
          }}
          transition={{ duration: 1 }}
        >
          <NavBar />
          <LandAbout />
        </motion.div>
      )}
    </>
  );
}

export default App;
