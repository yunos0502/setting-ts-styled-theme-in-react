import React, { memo } from 'react';

type buttonProps = {
	changeThemeBtn: () => void;
};

const Button = ({ changeThemeBtn }: buttonProps): JSX.Element => {
	return <button onClick={changeThemeBtn}>테마 변경</button>;
};

export default memo(Button);
