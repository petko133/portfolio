import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './Uniko.module.css';
import { FiShare } from 'react-icons/fi';

const Uniko = () => {
	return (
		<Container className={classes.container} id='project'>
			<Container className={classes['inner-container']}>
				<Row className='justify-content-md-center'>
					<Col className={classes.col}>
						<h3 className={classes['header-project']}>
							Uniko Models | A model agency website
						</h3>
						<p className={classes['project-info']}>
							Migrated the model agency website to the latest
							version of Next.js, leveraging Server-Side Rendering
							(SSR) to improve SEO and performance. As part of the
							modernization, I refactored the front-end using
							React and TypeScript, and set up Redux Toolkit for
							efficiency and scalability.
						</p>
						<i className={classes.links}>
							<a
								target='_blank'
								rel='noreferrer'
								className={classes.link}
								href='https://www.unikomodels.com/'
							>
								<p className={classes['icon-text']}>Website</p>
								<FiShare size='xs' />
							</a>
						</i>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default Uniko;
