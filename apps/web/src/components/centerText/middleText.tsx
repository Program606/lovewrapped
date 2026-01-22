import React from "react";
import { motion } from "framer-motion";
interface MiddleTextProps {
  text: string;
}

const MiddleText: React.FC<MiddleTextProps> = ({ text }) => {
  return (
    <section className="w-screen h-screen bg-green-300 justify-center items-center">
        <motion.ul animate={{ rotate: 360 }} />
      <h1 className="text-6xl font-bold text-center">{text}</h1>
    </section>
  );
};

export default MiddleText;
