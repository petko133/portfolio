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
		<>
			<span className={classes.anchor} id='about'></span>
			<Container ref={ref} className={classes.container}>
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
						<Col className={classes.colimg}>
							<img
								src={workplace}
								alt='workplace'
								className={classes.workplace}
							/>
						</Col>

						<Col className={classes.col}>
							<Container className='justify-content-md-start'>
								<h5 className={classes.about}>ABOUT ME</h5>
								<h3 className={classes.header}>
									A dedicated Frontend Developer based in
									Plovdiv, Bulgaria📍
								</h3>
								<p className={classes['about-info']}>
									I'm a front-end developer with experience in
									technologies like Next.js, React,
									JavaScript/TypeScript, HTML/CSS, Redux, and
									TailwindCSS. I also have a beginner-level
									understanding of back-end technologies such
									as Node.js, Express, and MongoDB. I'm a
									passionate developer always looking for the
									next challenge to grow and improve. I'm
									genuinely excited about building great
									products and always bring a positive,
									collaborative attitude to every team I join.
								</p>
							</Container>
						</Col>
					</Row>
				</motion.div>
			</Container>
		</>
	);
};

export default About;
