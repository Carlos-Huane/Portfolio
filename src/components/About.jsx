import React from 'react'
import styles from '../styles/about.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h2>01. About me</h2>
        <div>
          <div className={styles.description}>
            <p>
            Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            <ul className={styles.skills}>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Node.js</li>
              <li>TypeScript</li>
              <li>Eleventy</li>
              <li>WordPress</li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default About