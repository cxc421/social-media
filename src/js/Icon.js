import React from 'react';
import classNames from 'classnames';
import barImg from '../img/bar-icon.png';
import barImg2 from '../img/bar-icon-2.png';
import barImg3 from '../img/bar-icon-3.png';
import barImg4 from '../img/bar-icon-4.png';
import barImg5 from '../img/bar-icon-5.png';
import barImg6 from '../img/bar-icon-6.png';
import barImg7 from '../img/bar-icon-7.png';
import barImg8 from '../img/bar-icon-8.png';
import barImg9 from '../img/bar-icon-9.png';
import * as IconTypes from './IconTypes.js';

function genBkImgStyle (imgName) {
	const styleObj = {
		backgroundImage: `url(${barImg})`,
		backgroundRepeat: 'no-repeat',
		backgrounSize: 'auto'
	};
	switch (imgName) {
		case IconTypes.DYNAMIC_MESSAGE:
			styleObj.backgroundPosition = '0 -663px';
		break;
		case IconTypes.MESSENGER:
			styleObj.backgroundPosition = '0 -411px';
		break;
		case IconTypes.CLUB:
			styleObj.backgroundPosition = '0 -579px';
		break;
		case IconTypes.FAN:
			styleObj.backgroundPosition = '0 -768px';
		break;
		case IconTypes.ACTIVITY:
			styleObj.backgroundImage = `url(${barImg2})`;
			styleObj.backgroundPosition = '0 -21px';
		break;
		case IconTypes.EDIT:
			styleObj.backgroundPosition = '0 -852px';
		break;
		case IconTypes.FRIEND:
			styleObj.backgroundPosition = '0 -684px';
		break;
		case IconTypes.GAME:
			styleObj.backgroundPosition = '0 -516px';
		break;
		case IconTypes.TREASURE:
			styleObj.backgroundPosition = '0 -894px';
		break;
		case IconTypes.TRADE_CLUB:
			styleObj.backgroundPosition = '0 -1202px';
		break;
		case IconTypes.SHOP:
			styleObj.backgroundPosition = '0 -453px';
		break;
		case IconTypes.DAY:
			styleObj.backgroundPosition = '0 -747px';
		break;		
		case IconTypes.PHOTO:
			styleObj.backgroundPosition = '0 -1188px';
		break;				
		case IconTypes.PEN:
			styleObj.backgroundImage = `url(${barImg3})`;
			styleObj.backgroundPosition = '-192px -70px';
		break;
		case IconTypes.CAMERA:
			styleObj.backgroundImage = `url(${barImg4})`;
			styleObj.backgroundPosition = '0 -153px';
		break;		
		case IconTypes.PICTURE:
			styleObj.backgroundPosition = '0 -306px';
		break;
		case IconTypes.SMILE:
			styleObj.backgroundPosition = '0 -180px';
		break;		
		case IconTypes.POINTS:
			styleObj.backgroundPosition = '0 -243px';
		break;	
		case IconTypes.MOOD_THUMBS_UP:
			styleObj.backgroundImage = `url(${barImg5})`;
			styleObj.backgroundPosition = '-68px -54px';		
		break;	
		case IconTypes.MOOD_ANGRY:
			styleObj.backgroundImage = `url(${barImg5})`;
			styleObj.backgroundPosition = '-152px -35px';				
		break;
		case IconTypes.MOOD_SAD:
			styleObj.backgroundImage = `url(${barImg5})`;
			styleObj.backgroundPosition = '-119px -54px';				
		break;		
		case IconTypes.ACTION_THUMBS_UP:
			styleObj.backgroundImage = `url(${barImg6})`;			
			styleObj.width = '14px';
			styleObj.height = '14px';
			styleObj.backgroundPosition = '-34px -284px';				
		break;
		case IconTypes.ACTION_LEAVE_MSG:
			styleObj.backgroundImage = `url(${barImg6})`;			
			styleObj.width = '14px';
			styleObj.height = '14px';
			styleObj.backgroundPosition = '-34px -269px';						
		break;
		case IconTypes.ACTION_SHARE:
			styleObj.backgroundImage = `url(${barImg6})`;			
			styleObj.width = '14px';
			styleObj.height = '14px';
			styleObj.backgroundPosition = '-15px -320px';								
		break;
		case IconTypes.DOWN_ARROW:
			styleObj.backgroundImage = `url(${barImg7})`;			
			styleObj.backgroundPosition = '-27px -24px';
		break;
		case IconTypes.EARTH:
			styleObj.backgroundImage = `url(${barImg8})`;			
			styleObj.width = '12px';
			styleObj.height = '12px';
			styleObj.backgroundPosition = '0 -17px';										
		break;
		case IconTypes.BUTTON_THUMBS_UP:
			styleObj.backgroundImage = `url(${barImg9})`;			
			styleObj.width = '16px';
			styleObj.height = '16px';
			styleObj.backgroundPosition = '0 -104px';												
		break;
		default:
	}
	return styleObj;
}

const Icon = ({imgName, bsClass}) => {	
	const style = genBkImgStyle(imgName);
	return <i style={style} className={classNames('Icon', bsClass)} ></i>;
};

Icon.defaultProps = {
	imgName: '',
	bsClass: null
};

export default Icon;