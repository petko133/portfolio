import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './GymBuddy.module.css';
import shopapp from '../../../../assets/images/ShopApp.jpg';
import { FaGithub } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';

const ShopApp = () => {
	return (
		<Container className={classes.container} id='project'>
			<Container className={classes['inner-container']}>
				<Row className='justify-content-md-center'>
					<Col className={classes.colimg}>
						<img
							src={shopapp}
							alt='shopapp'
							className={classes.workplace}
						/>
					</Col>
					<Col className={classes.col}>
						<h3 className={classes['header-project']}>
							SHOPBUDDY 🛒
						</h3>
						<p className={classes['project-info']}>
							A shop website frontpage that has clean look and
							allow users to filter by different categories,
							brands, prices and more.
						</p>
						<i className={classes.links}>
							<a
								target='_blank'
								rel='noreferrer'
								className={classes.link}
								href='https://github.com/petko133/shopbuddy'
							>
								<p className={classes['icon-text']}>Code</p>{' '}
								<FaGithub size='xs' />
							</a>
							<a
								target='_blank'
								rel='noreferrer'
								className={classes.link}
								href='https://shop-buddy-s677.onrender.com/'
							>
								<p className={classes['icon-text']}>Demo</p>
								<FiShare size='xs' />
							</a>
						</i>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default ShopApp;
