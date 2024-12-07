import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Introduction.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto text-center'
      >
        Hello! My name is Bryan Athanas and I'm a skilled future cloud engineer with
        experience in TypeScript, JavaScript, Java, Python, and many more languages. I am a quick learner
        and I want to create efficient, scalable, and user-friendly solutions in the future.
      </motion.p>
      <div className='mt-16 flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");