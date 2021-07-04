import React from 'react';
import { SvgIcon } from '@material-ui/core';

const EmptyIcon = (props) => {
	return (
		<SvgIcon {...props}>
			<rect width="31" height="31" rx="8" fill="#2C2F47" />
		</SvgIcon>
	);
};

export default EmptyIcon;