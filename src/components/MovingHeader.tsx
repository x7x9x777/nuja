import { useState } from "react";
import { motion } from "framer-motion";

export default function MovingHeader() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionHeight = 100; // Adjust based on design

  return (
    <div className="section-a">
      {/* Moving Header */}
      <motion.div
        className="fixed top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-blue-500 rounded"
        animate={{ y: activeIndex * sectionHeight }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
      >
        Section {activeIndex + 1}
      </motion.div>

      {/* Sections */}
      <div className="flex flex-col gap-4 mt-20">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={`w-64 h-20 flex items-center justify-center rounded cursor-pointer ${
              activeIndex === index ? "bg-blue-500" : "bg-gray-700"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            Section {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}