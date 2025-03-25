import * as motion from "motion/react-client"
import myVideo from '../assets/x.mp4'

export default function Projects() {

  return (
    <motion.section
    // style={ball}
    initial={{ opacity: 0.5, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{
        duration: 1.7,
        scale: { type: "tween", visualDuration: 0.7, bounce: 0.5 },
    }}
    className="projects">
       <video autoPlay muted loop id="background-video">
                <source src={myVideo} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            {/* <div className="content">
                <h1>Welcome to My Website</h1>
                <p>This is a simple page with a video background.</p>
            </div> */}
    </motion.section>
  )
}
