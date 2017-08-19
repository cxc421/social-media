import React from 'react';
import classNames from 'classnames';

const Box = (props) => {	
	return (
		<div className={ classNames('Box', props.bsClass) }>
			{props.children}
		</div>
	);
};

Box.defaultProps = {
	bsClass: null
};

export default Box;