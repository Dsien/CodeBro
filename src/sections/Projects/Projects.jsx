import React from 'react';
import styles from './ProjectsStyles.module.css';
import CarLogo from '../../assets/CarLogo.png';
import EmployeeTracker from '../../assets/EmployeeTracker.png';
import JobLogo from '../../assets/JobLogo.png';
import ReadMeLogo from '../../assets/ReadMeLogo.png';
import SuperHeroLogo from '../../assets/SuperHeroLogo.png';
import WeatherLogo from '../../assets/WeatherLogo.png';
import ProjectCard from '../../common/ProjectCard';

function Projects () {
  return ( 
  <section id="projects" className={styles.container}>
    <h1 className={styles.sectionTitle}>Projects</h1>
    <div className={styles.projectsContainer}>
        <ProjectCard 
        src={CarLogo} 
        link="https://github.com/Dsien/MotorBoss.git"
        h3="MotorBoss"
        p="Car App"
        />
        <ProjectCard 
        src={EmployeeTracker} 
        link="https://github.com/Dsien/sql-employee-tracker-pro.git"
        h3="Employee Tracker"
        p="Employee App"
        />
        <ProjectCard 
        src={JobLogo} 
        link="https://github.com/Dsien/JobTrack.git"
        h3="JobTrack"
        p="Job App"
        />
        <ProjectCard 
        src={ReadMeLogo} 
        link="https://github.com/Dsien/CodeMuse-Read.git"
        h3="CodeMuse"
        p="ReadMe App"
        />
        <ProjectCard 
        src={SuperHeroLogo} 
        link="https://github.com/Dsien/HeroTest.git"
        h3="SuperHero"
        p="Hero App"
        />
        <ProjectCard 
        src={WeatherLogo} 
        link="https://github.com/Dsien/NewWeatherAPI.git"
        h3="WeatherAPI"
        p="Weather App"
        />
    </div>
    </section>
    );
} 

export default Projects;
