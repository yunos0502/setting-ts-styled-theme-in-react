import React, { FC, memo, useContext, useState } from 'react';
import { DefaultTheme, ThemeContext } from 'styled-components';

import Container from './LayoutStyle';
import Button from './Button';

const Layout: FC = () => {
	const themeContext = useContext<DefaultTheme>(ThemeContext);
	const [isDark, setIsDark] = useState<boolean>(false);

	const changeThemeBtn = () => {
		setIsDark(!isDark);
		console.log(themeContext);
	};

	return (
		<Container isDark={isDark}>
			<Button changeThemeBtn={changeThemeBtn} />
			<div style={{ width: '50vw', margin: '50px auto' }}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatem
				ipsum nam fugiat aut? Voluptate ex veritatis consequuntur accusantium
				beatae autem? Similique reiciendis facere perspiciatis sequi quasi
				expedita omnis. Est.
			</div>
		</Container>
	);
};

export default memo(Layout);
