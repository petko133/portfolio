import React, { useEffect, useRef } from 'react';
import CoinBro from './Projects/CoinBro';
import CarRental from './Projects/CarRental';
import GymBuddy from './Projects/GymBuddy';
import Container from 'react-bootstrap/Container';
import classes from './Projects.module.css';
import ShopApp from './Projects/ShopApp';
import { motion, useInView, useAnimation } from 'framer-motion';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filterControls = useAnimation();
  const itemsControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      filterControls.start('visible');
      itemsControl.start('visible');
    }
  }, [isInView]);
  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={filterControls}
        transition={{ duration: 1, delay: 0.25 }}
      >
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
      </motion.div>
    </div>
  );
};

export default Projects;
