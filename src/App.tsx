import React, { FC, memo } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import theme from './styles/theme';
import Layout from './components/Layout';

const App: FC = (): JSX.Element => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Layout />
		</ThemeProvider>
	);
};

export default memo(App);
