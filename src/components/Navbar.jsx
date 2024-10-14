import React, { useEffect, useState } from "react";

import { navLinks } from "../constants";
import { styles } from "../styles";


const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX
        } w-full flex items-center justify-center py-3 sm:py-5 fixed top-0 left-0 right-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
    >
      <div className='w-full flex flex-col sm:flex-row justify-center items-center max-w-7xl mx-auto'>
        <ul className='list-none flex flex-row sm:flex-row gap-4 sm:gap-10 w-full justify-center items-center'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[16px] sm:text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                if (nav.id !== "home") return setActive(nav.title);
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
