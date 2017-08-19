import React from 'react';
import classNames from 'classnames';

const Brand = ({src, size, bsClass}) => {
	size = +size;
	const style = (size > 0) ? {width: size, height: size} : {};
	return (
		<div className={classNames('Brand', bsClass)} style={style} >
			<img className="img-responsive" src={src} alt="brand-img" />
		</div>
	);
};

Brand.defaultProps ={
	src: null,	
	bsClass: null
};

export default Brand;