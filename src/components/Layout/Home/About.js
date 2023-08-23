import React, { useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import workplace from '../../../assets/images/istockphoto-929848296-612x612.jpg';
import classes from './About.module.css';
import { motion, useInView, useAnimation } from 'framer-motion';

const About = () => {
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
    <Container ref={ref} className={classes.container} id="about">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={filterControls}
        transition={{ duration: 1, delay: 0.25 }}
      >
        <Row className="justify-content-md-center">
          <Col className={classes.colimg}>
            <img
              src={workplace}
              alt="workplace"
              className={classes.workplace}
            />
          </Col>

          <Col className={classes.col}>
            <Container className="justify-content-md-start">
              <h5 className={classes.about}>ABOUT ME</h5>
              <h3 className={classes.header}>
                A dedicated Full Stack Web Developer based in Plovdiv,
                Bulgaria📍
              </h3>
              <p className={classes['about-info']}>
                As a beginner Full Stack Web Developer, I possess a good arsenal
                of skill in JavaScript, NodeJS, React, TypeScript, HTML, CSS. I
                first started learning Python to begin my first steps into
                programming and it didn't take long to fall in love with it.
                After a while I got the opportunity to join a team of friends
                for a couple of months and learn JavaScript, TypeScript and
                NodeJS, with my focus being on the Back-End Development. After
                that I decided to also dive into Front-End Development with
                React.
              </p>
            </Container>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default About;
