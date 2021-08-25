import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		isDark: boolean;
		color: string;
		backgroundColor: string;
	}
}
