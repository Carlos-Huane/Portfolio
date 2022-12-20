import React from 'react'
import styles from '../styles/main.module.css'
const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div>
          <p className={styles.subText}>Hi, my name is</p>
        </div>
        <div>
          <h2 className={styles.text}>Carlos Huane</h2>
        </div>
        <div>
          <h2 className={styles.text}>Front End Developer</h2>
        </div>
        <div className={styles.description}>
          <p>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. 
          Currently Sed non pellentesque neque, a suscipit lectus. Fusce lacinia sapien nec ex aliquet, a consectetur nisl semper.
          Ut blandit leo id lobortis commodo. Donec massa ex, hendrerit at nunc eu, eleifend gravida eros</p>
        </div>
      </div>
    </div>
  )
}

export default Main