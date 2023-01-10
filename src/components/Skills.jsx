import React from 'react'
import styles from '../styles/skills.module.css'
const Skills = () => {
  return (
    <div className= {styles.container}>
      <div className={styles.information1}>
        <h2 className={styles.title}>02. Skills</h2>
        <p>Since beginning my journey as a freelance developer nearly 10 years ago, I’ve done remote work for agencies, consulted for startups, and collaborated with talented people to create web products for both business and consumer use.</p>
        <p>I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.</p>
        <p>I also have full-stack developer experience with popular open-source CMS like (WordPress, Drupal, Magento, Keystone.js and others) .</p>
        <p>Visit my <a href="https://www.linkedin.com/in/carlos-huane-317934235/">LinkedIn</a> profile for more details or just contact me.</p>
      </div>
      <div className={styles.information2}>
        <h2>contenido 2 </h2>
      </div>
    </div>
  )
}

export default Skills