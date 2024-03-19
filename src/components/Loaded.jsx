import { motion } from "framer-motion";

export default function Loaded() {
  return (
    <motion.div
      className="font-medium text-orange-500 underline text-2xl underline-offset-8"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, y: "-125%" }}
      transition={{ duration: 1, delay: 2 }}
      exit={{ opacity: 0 }}
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
    >
      {"Framing Tomorrow's Startups. Today.™".split(" ").map((word, index) => (
        <motion.span
          key={index}
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
          }}
          initial={{ opacity: 0, x: "100%" }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ delay: index * 0.2, duration: 1, type: "tween" }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.div>
  );
}
