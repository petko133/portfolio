import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './Contacts.module.css';
import { FaMapMarked } from 'react-icons/fa';
import {HiMailOpen} from 'react-icons/hi'

const Contacts = () => {
  return (
    <Container className={classes.container} id="contacts">
      <Container className={classes['projects-header']}>
        <h5 className={classes.projects}>CONTACTS</h5>
        <h3 className={classes.header}>Don't be shy hit me up! 👇</h3>
        <Row className={classes['contacts-row']}>
          <Col xs={4}>
            <Row>
              <Col xs={3}>
                <i className={classes.icons}>
                  <FaMapMarked size="xs" />
                </i>
              </Col>
              <Col xs={7}>
                <h5 className={classes['header-contacts']}>Location</h5>
                <p className={classes['contacts-info']}>Plovdiv, Bulgaria</p>
              </Col>
            </Row>
          </Col>
          <Col xs={4}>
            <Row>
						<Col xs={3}>
                <i className={classes.icons}>
                  <HiMailOpen size="xs" />
                </i>
              </Col>
              <Col xs={7}>
                <h5 className={classes['header-contacts']}>Mail</h5>
                <p className={classes['contacts-info']}>petko.georgiev133@gmail.com</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contacts;
