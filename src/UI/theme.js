import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
	breakpoints: {
		keys: {
			0: 'xs',
			1: 'sm',
			2: 'md',
			3: 'lg',
			4: 'xl',
		},
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920
		},
	},
	palette: {
		primary: {
			main: '#2C2F47',
		},
		secondary: {
			main: '#ffffff',
		},
		error: {
			main: '#F44336',
		},
		background: {
			default: '#171929',
		},
		text: {
			primary: '#fff',
			secondary: '#797ea3'
		}
	},
	typography: {
		h1: {
			fontSize: '55px',
			lineHeight: '66px',
			fontWeight: 500,
			color: '#fff'
		},
		body1: {
			fontSize: '18px',
			lineHeight: '120%',
			fontWeight: 400,
			letterSpacing: 0
		},
		body2: {
			fontSize: '15px',
			lineHeight: '120%',
			fontWeight: 300,
			letterSpacing: 0
		},
		button: {
			textTransform: 'none',
			color: 'rgba(255, 255, 255, 0.7)',
			fontSize: '18px',
			lineHeight: '120%',
			fontWeight: 400,
		}
	},
	shadows: [
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
	],
	shape: {
		borderRadius: 28,
	},
	overrides: {
		MuiButton: {
			contained: {
				padding: '11px 40px',
				'&$disabled': {
					color: '#fff'
				}
			}
		},
		MuiFormHelperText: {
			root: {
				marginTop: '0px',
				lineHeight: '15px',
			},
			contained: {
				marginLeft: '0px',
				marginRight: '0px',
			}
		},
		MuiSvgIcon: {
			fontSizeLarge: {
				fontSize: '31px'
			}
		}
	},
});

export default theme;