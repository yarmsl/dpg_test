import React from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import bg from '../UI/img/bg.webp';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
	root: {
		backgroundImage: `url(${bg})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
		backgroundSize: 'cover',
		width: '100vw',
		height: 'auto',
	},
	container: {
		width: '100vw',
		height: '100vh',
		minHeight: '1000px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	}
}));

const MainLayout = ({ children }) => {

	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<Container className={classes.container}>
				{children}
			</Container>
		</Box>
	);
};
MainLayout.propTypes = {
	children: PropTypes.node.isRequired
};
export default MainLayout;
