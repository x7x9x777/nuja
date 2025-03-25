import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import styles from "./paragraph.module.scss";
import { useRef } from "react";

export default function Paragraph({ content }: { content: string }) {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    //90% hight. end 100%

    offset: ["start 0.9", "start 0.25"],
  });

  const words = content.split(" ");

  return (
    <motion.p className={styles.paragraph} ref={element}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </motion.p>
  );
}

export const Word = ({
  children,
  range,
  progress,
}: {
  children: React.ReactNode;
  range: [number, number];
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className={styles.word}>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
