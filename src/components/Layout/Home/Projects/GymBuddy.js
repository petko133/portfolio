import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './GymBuddy.module.css';
import gymbuddy from '../../../../assets/images/gym-buddy.jpg';
import { FaGithub } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';

const GymBuddy = () => {
	return (
		<Container className={classes.container} id='project'>
			<Container className={classes['inner-container']}>
				<Row className='justify-content-md-center'>
					<Col className={classes.col}>
						<h3 className={classes['header-project']}>
							GYMBUDDY 🥊
						</h3>
						<p className={classes['project-info']}>
							A gym website that is a comprehensive resource for
							fitness information, class schedules, membership
							options, and tools to help users achieve their
							fitness goals.
						</p>
						<i className={classes.links}>
							<a
								target='_blank'
								rel='noreferrer'
								className={classes.link}
								href='https://github.com/petko133/gym-buddy'
							>
								<p className={classes['icon-text']}>Code</p>{' '}
								<FaGithub size='xs' />
							</a>
							<a
								target='_blank'
								rel='noreferrer'
								className={classes.link}
								href='https://gym-buddy-8uyr.onrender.com/'
							>
								<p className={classes['icon-text']}>Demo</p>
								<FiShare size='xs' />
							</a>
						</i>
					</Col>
					<Col className={classes.colimg}>
						<img
							src={gymbuddy}
							alt='gymbuddy'
							className={classes.workplace}
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default GymBuddy;
