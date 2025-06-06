import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './GymBuddy.module.css';
import crypto from '../../../../assets/images/car-rental.jpg';
import { FaGithub } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';

const CarRental = () => {
	return (
		<Container className={classes.container} id='project'>
			<Container className={classes['inner-container']}>
				<Row className='justify-content-md-center'>
					<Col className={classes.col}>
						<h3 className={classes['header-project']}>
							CAR RENTAL 🚓
						</h3>
						<p className={classes['project-info']}>
							Car Rental is a website that allows the user to rent
							cars for personal or business use. It will allow
							users to select, search, compare and reserve
							different cars. It will offer different variety of
							cars depending on the trip people will take.
						</p>
						<i className={classes.links}>
							<a
								target='_blank'
								rel='noreferrer'
								className={classes.link}
								href='https://github.com/petko133/rent-a-car'
							>
								<p className={classes['icon-text']}>Code</p>{' '}
								<FaGithub size='xs' />
							</a>
							<a
								target='_blank'
								rel='noreferrer'
								className={classes.link}
								href='https://rent-a-car-mofz.onrender.com/'
							>
								<p className={classes['icon-text']}>Demo</p>
								<FiShare size='xs' />
							</a>
						</i>
					</Col>
					<Col className={classes.colimg}>
						<img
							src={crypto}
							alt='workplace'
							className={classes.workplace}
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default CarRental;
