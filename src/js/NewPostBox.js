import React from 'react';
import Box from './Box.js';
import Icon from './Icon.js';
import Brand from './Brand';
import RoundButton from './RoundButton.js';
import * as IconTypes from './IconTypes.js';
import brandImg from '../img/doge.jpg';

const NewPostBox = (props) => {
	return (
		<Box bsClass="NewPostBox">
			<div className="tabArea">
				<div className="tab tab-select">
					 <Icon imgName={IconTypes.PEN} />
					 <span>建立貼文</span>
					 <span className="triangle"></span>
				</div>
				<div className="tab">
					 <Icon imgName={IconTypes.PHOTO} />
					 <span>相簿／影片專輯</span>
				</div>				
				<div className="tab">
					 <Icon imgName={IconTypes.CAMERA} />
					 <span>直播視訊</span>
				</div>								
			</div>	
			<div className="inputArea">
				<textarea placeholder="汪星人，在想些什麼？" ></textarea>
				<Brand src={brandImg} bsClass="brandImg" />
			</div>	
			<div className="btnArea">
				<span className="line"></span>
				<div>
					<RoundButton imgName={IconTypes.PICTURE} text="相片／影片" />
					<RoundButton imgName={IconTypes.SMILE} text="感受／活動" />
					<RoundButton imgName={IconTypes.POINTS} />
				</div>
			</div>	
		</Box>			
	);
};

export default NewPostBox;

/*
<Icon imgName={IconTypes.DAY} />
				<div className="brandImg">
					<img className="img-responsive" src={brandImg} alt="brand-img" />
				</div>				

*/