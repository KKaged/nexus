import { motion } from "framer-motion";

export default function Loaded() {
  return (
    <>
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
    </>
  );
}
