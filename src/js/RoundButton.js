import React from 'react';
import Icon from './Icon.js';
import classNames from 'classnames';

const RoundButton = ({imgName, text}) => {
	return (		
		<div className={classNames('RoundButton', 'child-va', {'noText': text === ""})} >
			<Icon imgName={imgName} />
			<span>{text}</span>
		</div>
	);
};

RoundButton.defaultProps = {
	imgName: null,
	text: ''
};

export default RoundButton;