import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './CoinBro.module.css';
import crypto from '../../../../assets/images/crypto.jpg';
import { FaGithub } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';

const CoinBro = () => {
  return (
    <Container className={classes.container} id="projects">
      <Container className={classes['projects-header']}>
        <h5 className={classes.projects}>PROJECTS</h5>
        <h3 className={classes.header}>
          Some of my Projects with more to come. 🧩
        </h3>
      </Container>
      <Container className={classes['inner-container']}>
        <Row className="justify-content-md-center">
          <Col className={classes.col}>
            <h3 className={classes['header-project']}>COINBRO 🥮</h3>
            <p className={classes['project-info']}>
              CoinBro is a Crypto app that allows users keep track of the
              Cryptocurrency prices. They can log in and add or remove coins
              from their watchlist.
            </p>
						<h5 className={classes['header-demo']}>Demo Account:</h5>
						<p className={classes['demo-info']}>Email: demo@email.com</p>
						<p className={classes['demo-info']}>Password: demo1234</p>
						<i className={classes.links}>
              <a className={classes.link} href="https://github.com/petko133">
                <p className={classes['icon-text']}>Code</p> <FaGithub size="xs" />
              </a>
              <a
                className={classes.link}
                href="https://crypto-lm7u.onrender.com/"
              >
                <p className={classes['icon-text']}>Demo</p><FiShare size="xs" />
              </a>
            </i>
          </Col>
          <Col className={classes.colimg}>
            <img src={crypto} alt="workplace" className={classes.workplace} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default CoinBro;
