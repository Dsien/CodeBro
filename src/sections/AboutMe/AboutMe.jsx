import React from 'react';
import styles from './AboutMe.module.css';

const AboutMe = () => {
  return (
    <section className={styles.aboutMe} id="about">
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
          <p className={styles.description}>
            As a dedicated software engineer with a passion for innovative problem-solving, 
            I specialize in developing robust and scalable applications.
          </p>
          <p className={styles.description}>
            With expertise in languages such as Python, React, and JavaScript, 
            I thrive in collaborative environments where I can leverage my skills in software design and architecture.
          </p>
          <p className={styles.description}>
            My experience spans across various industries, allowing me to adapt quickly and implement 
            effective solutions that enhance user experience and drive project success. Committed to 
            continuous learning, I stay updated with the latest technologies and best practices to 
            ensure my work remains at the forefront of the ever-evolving tech landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
