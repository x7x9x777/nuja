import { motion } from "motion/react";
import { useEffect, useState } from "react";


export default function TextScramble ({text}:{text:string}) {

const chars = "abcdefghijklmnop"    
const content = text.split("")
const [mytext,setMytext] = useState(text)

function hover(content:any){
 for(let i=0; i<=content.length;i++){
    const newcontent=text.split("")
    setInterval(()=>myCallback(i),5

    )
  function myCallback(i:any){
  newcontent[i]= chars[Math.floor(Math.random() * (chars.length ))];
  setMytext(newcontent.join(""))
  }

 }




}

 



  return (
    <motion.a
    whileHover={{ scale: 1.2 }}
    onHoverStart={event => {hover(text)}}
    onHoverEnd={event => {}}
  >
    {mytext}
    </motion.a>
  )
}

