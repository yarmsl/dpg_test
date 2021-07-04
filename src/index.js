import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import Form from './pages/Form';
import theme from './UI/theme';
import MainLayout from './layout/MainLayout';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<MainLayout>
				<Form />
			</MainLayout>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);