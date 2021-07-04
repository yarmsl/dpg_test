import React from 'react';
import { SvgIcon } from '@material-ui/core';

const CheckedIcon = (props) => {
	return (
		<SvgIcon {...props}>
			<rect width="31" height="31" rx="8" fill="#2C2F47" />
			<path opacity="0.7" d="M22.5607 10.4296C21.9749 9.85681 21.0254 9.85681 20.4396 10.4296L13.2499 17.4587L10.5604 14.8296C9.97536 14.2569 9.02434 14.2569 8.43932 14.8296C7.85356 15.4024 7.85356 16.3308 8.43932 16.9035L12.1894 20.5703C12.4819 20.857 12.8659 21 13.2499 21C13.634 21 14.018 20.857 14.3105 20.5703L22.5607 12.5035C23.1464 11.9307 23.1464 11.0023 22.5607 10.4296Z" />

		</SvgIcon>
	);
};

export default CheckedIcon;
