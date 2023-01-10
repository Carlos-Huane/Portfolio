import React from 'react'
import styles from '../styles/about.module.css'
import foto2 from '../assets/foto2.svg'
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h2 className={styles.title}>01. About me</h2>
        <div>
          <div className={styles.description}>
            <div className={styles.information}>
              {/* <p>
              Hello! My name is Carlos Huane and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
              My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
              My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
              </p> */}
              <p>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
              <p>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
              <p>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</p>
              <p>Here are a few technologies I’ve been working with recently:</p>
              <ul className={styles.skills}>
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Node.js</li>
                <li>TypeScript</li>
                <li>Eleventy</li>
                <li>WordPress</li>
              </ul>
            </div>
            <div className={styles.containerFoto}>
              <img src={foto2} className={styles.foto} />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default About