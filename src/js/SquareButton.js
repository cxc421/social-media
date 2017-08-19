import React from 'react';
import classNames from 'classnames';

const SquareButton = ({bsClass, children})=>{
	return (
		<div className={classNames('SquareButton', bsClass)}>
			{children}
		</div>
	)
};

SquareButton.defaultProps = {
	bsClass: null
};

export default SquareButton;