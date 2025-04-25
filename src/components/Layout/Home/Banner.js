import React, { useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import photo from '../../../assets/images/photo.jpg';
import js from '../../../assets/images/icons8-javascript-48.png';
import ts from '../../../assets/images/icons8-typescript-48.png';
import react from '../../../assets/images/icons8-react-native-48.png';
import nodejs from '../../../assets/images/icons8-nodejs-48.png';
import ht from '../../../assets/images/icons8-html5-48.png';
import boot from '../../../assets/images/icons8-bootstrap-48.png';
import python from '../../../assets/images/icons8-python-48.png';
import linux from '../../../assets/images/icons8-linux-48.png';
import nextjs from '../../../assets/images/nextjs-icon.png';
import classes from './Banner.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, useInView, useAnimation } from 'framer-motion';

const Banner = () => {
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
		<Container
			ref={ref}
			className={classes['banner-container']}
			id='banner'
		>
			<motion.div
				variants={{
					hidden: { opacity: 0, y: 75 },
					visible: { opacity: 1, y: 0 },
				}}
				initial='hidden'
				animate={filterControls}
				transition={{ duration: 1, delay: 0.25 }}
			>
				<Row className='justify-content-md-center'>
					<Col className={classes.col}>
						<Container className='justify-content-md-start'>
							<h1 className={classes.header}>
								Frontend Developer
							</h1>
							<p className={classes.description}>
								Hi, I'm Petko Georgiev. A passionate Frontend
								Developer based in Plovdiv, Bulgaria. 📍
							</p>
							<i className={classes.links}>
								<a
									className={classes.link}
									href='https://github.com/petko133'
								>
									<FaGithub size='xs' />
								</a>
								<a
									className={classes.link}
									href='https://www.linkedin.com/in/petko-georgiev-a2ab2723a/'
								>
									<FaLinkedin size='xs' />
								</a>
							</i>
						</Container>
					</Col>
					<Col className={classes.col}>
						<img
							src={photo}
							alt='petko'
							className={classes.photo}
						/>
					</Col>
				</Row>
			</motion.div>
			<motion.div
				variants={{
					hidden: { opacity: 0, y: 75 },
					visible: { opacity: 1, y: 0 },
				}}
				initial='hidden'
				animate={filterControls}
				transition={{ duration: 1, delay: 0.25 }}
			>
				<Row className='justify-content-md-start'>
					<Container className={classes.container}>
						<Col className={classes.stack}>
							<p>
								Tech Stack |{' '}
								<img
									src={js}
									alt='js'
									className={classes.icons}
								/>
								<img
									src={ts}
									alt='ts'
									className={classes.icons}
								/>
								<img
									src={nextjs}
									alt='nextjs'
									className={classes.icons}
								/>
								<img
									src={react}
									alt='react'
									className={classes.icons}
								/>
								<img
									src={nodejs}
									alt='nodejs'
									className={classes.icons}
								/>
								<img
									src={ht}
									alt='ht'
									className={classes.icons}
								/>
								<img
									src={boot}
									alt='boot'
									className={classes.icons}
								/>
								<img
									src={python}
									alt='python'
									className={classes.icons}
								/>
								<img
									src={linux}
									alt='linux'
									className={classes.icons}
								/>
							</p>
						</Col>
					</Container>
				</Row>
			</motion.div>
		</Container>
	);
};

export default Banner;
