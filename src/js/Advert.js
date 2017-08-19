import React from 'react';

const Advert = (props) => {
	const {img, url, title, content} = props;
	return (
		<div className="Advert">
			<img className="img-responsive" src={img} alt="add-img" />
			<div className="Advert-title" title={title} >{title}</div>
			<div className="Advert-url">{url}</div>
			<div className="Advert-content">{content}</div>
		</div>
	);
};

Advert.defaultProps = {
	img: null,
	url: '',
	title: '',
	content: ''
};

export default Advert;