import React from 'react'; // Import React
import styles from './AboutMe.module.css'; // Import CSS module for styling

const AboutMe = () => {
  return (
    <section className={styles.aboutMe} id="about"> {/* About Me section with styling and id */}
      <div className={styles.container}> {/* Container for the content */}
        <h2 className={styles.title}>About Me</h2> {/* Section title */}
        <div className={styles.content}> {/* Content wrapper */}
          <p className={styles.description}> {/* Paragraph with description styling */}
            As a dedicated software engineer with a passion for innovative problem-solving, 
            I specialize in developing robust and scalable applications.
          </p>
          <p className={styles.description}> {/* Paragraph with description styling */}
            With expertise in languages such as Python, React, and JavaScript, 
            I thrive in collaborative environments where I can leverage my skills in software design and architecture.
          </p>
          <p className={styles.description}> {/* Paragraph with description styling */}
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

export default AboutMe; // Export AboutMe component as default
