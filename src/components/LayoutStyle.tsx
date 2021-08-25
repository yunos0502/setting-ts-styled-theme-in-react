import styled from 'styled-components';
import { themeMode } from '../styles/theme';

type Props = {
	isDark: boolean;
};

const Container = styled.div.attrs((props: Props) => ({
	style: props.isDark ? themeMode.dark : themeMode.white,
}))<Props>`
	width: 100vw;
	height: 100vh;
`;

export default Container;
