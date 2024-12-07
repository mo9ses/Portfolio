import React from "react";

import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-20 h-20 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.heroSubText} scale-150 text-center`}>Certifications.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto text-center'
      >
        My certifications validate my expertise in various technical domains. For instance,
        my Comptia Network+ certification demonstrates my proficiency in computer networking.
        These certifications, along with my practical experience, solidify my commitment to
        continuous learning and professional growth.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
