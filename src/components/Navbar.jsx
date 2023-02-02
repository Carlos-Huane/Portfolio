import React from 'react'
import styles from '../styles/navbar.module.css'
import {logo, close, menu} from '../assets';
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.contenedor}>
   
        <nav className={styles.navbar}>
          <img src={logo} alt="logo" className={styles.logo}/>
          <ul className={styles.links}>
            <li className={styles.content}><span>01.</span> About</li>
            <li className={styles.content}><span>02.</span> Skills</li>
            <li className={styles.content}><span>03.</span> Work</li>
            <li className={styles.content}><span>04.</span> Contact</li>
          </ul>

          <div className={styles.toggle}>
            <img 
              src={toggle? close : menu} 
              alt ="menu"
              className={styles.imgToggle}
              onClick={() => setToggle(prev => !prev)} 
            />
             <div className={styles.contentToggle} style={toggle? {display:'flex'}: {display: 'none'}}>
                <ul className='list-none flex justify-end items-center flex-1 flex-col' >
                  <li className={styles.content}><span>01.</span> About</li>
                  <li className={styles.content}><span>02.</span> Experience</li>
                  <li className={styles.content}><span>03.</span> Work</li>
                  <li className={styles.content}><span>04.</span> Contact</li>
                </ul>
            </div>
          </div>
        </nav>
      
    </div>
    
  )
}

export default Navbar