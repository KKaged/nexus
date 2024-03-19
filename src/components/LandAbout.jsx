import { motion } from "framer-motion";

export default function LandAbout() {
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      className="bg-orange-100 h-screen"
      initial={{ opacity: 0, y: 200 }}
      transition={{ duration: 1.3 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <motion.div
        variants={itemVariants}
        initial="closed"
        animate="open"
        className="flex flex-row p-10 justify-between text-center"
      >
        <p className="text-4xl font-thin">Innovation. Technology.</p>
        <p className="text-4xl font-thin">Japan / Egypt</p>
      </motion.div>
      <hr className="border-t-2 border-gray-500 p-5" />
      <p className="text-6xl font-medium text-center">
        We are a technology company that specializes in creating and maintaining
        web applications, mobile applications, and other software solutions. We
        also provide consulting services to help you make the best technology
        decisions for your business. You have an idea, we have a plan.
      </p>
      <p className="text-6xl p-2 font-thin text-center ">
        Transforming visions into reality.
      </p>
    </motion.div>
  );
}
