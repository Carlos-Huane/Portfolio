import React from 'react';
import styles from '../styles/contact.module.css';

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}> 
        <h2 className={styles.subTitle}>04. What’s Next?</h2>
        <h2 className={styles.title}>Get In Touch</h2>
        <p className={styles.paragraph}>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
        {/* <button className={styles.button}>Contact me</button> */}
        <a href="mailto:carloshuanesarmiento@gmail.com" rel="noopener noreferrer" target="_blank"><button className={styles.button}>Contact me</button></a>
      </div>
    </div>
  )
}

export default Contact