import React from 'react';
import classNames from 'classnames';
import Icon from './Icon.js';

const LeftbarNav = (props) => {
	const {isSelect, imgName, text} = props;
	return (			
		<div className={ classNames('nav-item', 'child-va', { 'select-nav-item': isSelect } )  } >		
			<Icon imgName={imgName} />
			<span>{text}</span>
		</div>						
	);
};

LeftbarNav.defaultProps = {
	isSelect: false,
	imgName: '',
	text: ''
};

export default LeftbarNav;