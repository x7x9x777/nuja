import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Text1by1({ text }: { text: string }) {
  const string = "abcdefghijklmnop";
  const chars = string.split("");
  const content = text.split("");
  const [mytext, setMytext] = useState(text);

  function hover(content: any) {
    let intervalCount = 0;
    const interval = setInterval(() => {
      const newText = content.split("").map(
        // (item: string)=>item!==" "?item=chars[Math.floor(Math.random() * chars.length )]: item=" "
        (item: string, index: any) => {
          if (item === " ") {
            return (item = " ");
          }

          if (intervalCount <= 9) {
            return (item = chars[Math.floor(Math.random() * chars.length)]);
          } else {
            setTimeout(() => {
              return text[index];
            }, 1000 * index);
          }
        }
      );
      setMytext(newText);

      intervalCount += 1;
      if (intervalCount > 9) {
        setMytext(text);
        clearInterval(interval);
      }
    }, 30);
  }

  return (
    <motion.a
      whileHover={{ scale: 1.2 }}
      onHoverStart={(event) => {
        hover(text);
      }}
      onHoverEnd={(event) => {}}
    >
      {mytext}
    </motion.a>
  );
}
