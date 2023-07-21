import React from 'react';
import Container from 'react-bootstrap/Container';
import classes from './Footer.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={classes.background}>
      <Container className={classes.container}>
        <h1 className={classes.copyright}>Copyright © 2023. All rights are reserved</h1>
				<i className={classes.links}>
              <a className={classes.link} href="https://github.com/petko133">
                <FaGithub size="xs" />
              </a>
              <a
                className={classes.link}
                href="https://www.linkedin.com/in/petko-georgiev-a2ab2723a/"
              >
                <FaLinkedin size="xs" />
              </a>
            </i>
      </Container>
    </div>
  );
};

export default Footer;
