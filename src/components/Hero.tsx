import { motion } from "motion/react";

export default function Hero() {
  return (
    <motion.section

    className="hero">
      <div className="system">system</div>
      <motion.div 
       initial={{ y: "-100%" }}
     
        animate={{
          type: "tween",
           y: "0%" ,
          scale: 1.3,
          transition: { duration: 3,
            //  repeat:Infinity 
            }
        }}
      className="stripe">
        <p className="x7">x7x9x777</p>
        <p className="x7">x7x9x777</p>
        <p className="x7">x7x9x777</p>
        <p className="x7">x7x9x777</p>
        <p className="x7">x7x9x777</p>
        <p className="x7">x7x9x777</p>
        <p className="x7">x7x9x777</p>
        <p className="x7">x7x9x777</p>
        <p className="x7">x7x9x777</p>
        <p className="x7">x7x9x777</p>
        <p className="x7">x7x9x777</p>
        <p className="x7">x7x9x777</p>
        <p className="x7">x7x9x777</p>
        <p className="x7">x7x9x777</p>
        <p className="x7">x7x9x777</p>
        <p className="x7">x7x9x777</p>
        <p className="x7">x7x9x777</p>
        <p className="x7">x7x9x777</p>
        <p className="x7">x7x9x777</p>
        <p className="x7">x7x9x777</p>
        <p className="x7">x7x9x777</p>
        <p className="x7">x7x9x777</p>
        <p className="x7">x7x9x777</p>
        <p className="x7">x7x9x777</p>
        <p className="x7">x7x9x777</p>
        <p className="x7">x7x9x777</p>
        <p className="x7">x7x9x777</p>
      </motion.div>
    </motion.section>
  );
}
