import { useState, useEffect } from "react";
import Loaded from "./components/Loaded";
import "./App.css";
import NavBar from "./components/NavBar";
import { motion } from "framer-motion";

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
        className="font-medium text-orange-500 underline text-2xl underline-offset-8"
        initial={{ opacity: 1 }}
        animate={{ y: "-125%" }}
        transition={{ duration: 1, delay: 2 }}
        style={{
          backgroundColor: "rgb(25, 23, 23)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          overflow: "hidden",
          width: "100vw",
          height: "100vh",
        }}
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
        </motion.div>
      )}
    </>
  );
}

export default App;
