import React from 'react';
import CoinBro from './Projects/CoinBro';
import CarRental from './Projects/CarRental';
import GymBuddy from './Projects/GymBuddy';
import Container from 'react-bootstrap/Container';
import classes from './Projects.module.css';
import ShopApp from './Projects/ShopApp';

const Projects = () => {
  return (
    <>
      <Container className={classes.container} id="projects">
        <Container className={classes['projects-header']}>
          <h5 className={classes.projects}>PROJECTS</h5>
          <h3 className={classes.header}>
            Some of my Projects with more to come. 🧩
          </h3>
        </Container>
        <GymBuddy />
        <ShopApp />
        <CoinBro />
        <CarRental />
      </Container>
    </>
  );
};

export default Projects;
