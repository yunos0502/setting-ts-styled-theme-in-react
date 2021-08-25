import { DefaultTheme } from 'styled-components';
import { COLOR } from '../types/constant';

const dark = {
	isDark: true,
	color: COLOR.WHITE,
	backgroundColor: COLOR.BLACK,
};

const white = {
	isDark: false,
	color: COLOR.BLACK,
	backgroundColor: COLOR.WHITE,
};

export const themeMode = { dark, white };

const theme: DefaultTheme = white;

export default theme;
