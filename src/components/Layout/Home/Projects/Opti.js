import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './Opti.module.css';
import { FiShare } from 'react-icons/fi';

const Opti = () => {
	return (
		<Container className={classes.container} id='project'>
			<Container className={classes['inner-container']}>
				<Row className='justify-content-md-center'>
					<Col className={classes.col}>
						<h3 className={classes['header-project']}>
							Opti-Wohnwlt | An e-commerce website
						</h3>
						<p className={classes['project-info']}>
							Developed and maintained complex e-commerce features
							using React, Next.js, TypeScript, and Redux,
							enhancing user engagement. Contributed to the
							successful migration of the website to a newer
							version of Next.js, implementing server-side
							rendering (SSR) and optimizing performance and
							functionality. Implemented various e-commerce
							features like category pages, product details pages,
							shopping cart, product card, and improved customer
							satisfaction. Developed and maintained reusable
							components and modules with TypeScript to ensure
							type safety and reduce bugs.
						</p>
						<i className={classes.links}>
							<a
								target='_blank'
								rel='noreferrer'
								className={classes.link}
								href='https://www.opti-wohnwelt.de/'
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

export default Opti;
