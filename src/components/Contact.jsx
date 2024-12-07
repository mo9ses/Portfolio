import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { platforms } from "../constants";

const PlatformGoto = ({ title, icon, link }) => (
  <div className='flex flex-row justify-center items-center white-bg rounded-md p-3 cursor-pointer'>
    <a href={link} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2">
      <img
        src={icon}
        alt='source_code'
        className='w-10 h-10 object-contain'
      />
      <span>{title}</span>
    </a>
  </div>
);

const Contact = () => {

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        {platforms.map((platform, index) => (
          <PlatformGoto {...platform} />
        ))}
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
