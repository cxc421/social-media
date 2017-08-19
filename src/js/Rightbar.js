import React from 'react';
import Advert from './Advert.js';
import Box from './Box.js';
import AdImg_1 from '../img/ad-4.png';
import AdImg_2 from '../img/ad-5.png';
import SquareButton from './SquareButton';

const adList = [
	{		
		img: AdImg_1,
		title: '‼原創再造，經典主窄 ‼ Levis型格窄管褲',
		url: 'tw.buy.yahoo.com',
		content: `‼原創再造，經典主窄 ‼
👑 夏特賣優惠➪goo.gl/NRjdaq
經典與現代的丹寧碰撞，融合重磅與彈性的全新褲型
長褲/短褲，一次滿足你
經典。必須入手➤➤ goo.gl/7D...`
	},
	{
		img: AdImg_2,
		title: '戶外必备神器 整套只需NT999',
		url: 'monogram.com',
		content: `简约大气的外观时尚耐看，握感舒适稳定，细节彰显真章。加上全光学玻璃大目镜，距离远，观影清晰，用过的人都说好。`
	},
];


const Rightbar = (props) => {
	return (
		<div className="Rightbar">
			<Box>
				<div className="header-nav">
					<a href="#">刊登廣告</a>
				</div>			
				<div> 
					{
						adList.map((adObj, idx)=>{
							return <Advert {...adObj} key={idx} />;
						})
					}
				</div>							
			</Box>
			<Box bsClass="language-box" >
				<div className="container-fliud">
					<div className="row">
						<div className="pull-left">
							<a href="#" className="disableLink">中文(台灣)</a>{' · '}
							<a href="#" >English (US)</a>{' · '}
							<a href="#" >Español</a>{' · '}
							<a href="#" >Português (Brasil)</a>{' · '}
							<a href="#" >Français (France)</a>							
						</div>
						<div className="pull-right">
							<SquareButton bsClass="plusBtn">
								<i className="fa fa-plus" aria-hidden="true"></i>
							</SquareButton>
						</div>
					</div>
				</div>
			</Box>
			<Box bsClass="copyright-box">
				<div>
					<a href="#" >隱私政策</a>{' · '}
					<a href="#" >使用條款</a>{' · '}
					<a href="#" >廣告</a>{' · '}
					<a href="#" >Ad Choices</a>{' · '}	
					<a href="#" >Cookie</a>{' · '}					
					<a href="#" >更多</a>{' '}
					<i className="fa fa-caret-down" aria-hidden="true"></i>									
				</div>
				<div>
					<a href="#" className="disableLink"> Facebook © 2017</a>
				</div>
			</Box>
		</div>
	);
};

export default Rightbar;