import React from 'react';
import NewPostBox from './NewPostBox.js';
import MessageBox from './MessageBox';
import * as IconTypes from './IconTypes';
import * as MessageBoxTypes from './MessageBoxTypes';

import Logo_1 from '../img/logo-1.jpg';
import Outlink_1 from '../img/outlink-1.jpg';

import Logo_3 from '../img/logo-3.jpg';
import Outlink_3 from '../img/outlink-3.jpg';

import Logo_2 from '../img/logo-2.jpg';

const message = [
	{
		top: {
			brand: Logo_1,
			author: '噪咖',
			hour: 1
		},	
		sub: {
			moodList: [IconTypes.MOOD_THUMBS_UP, IconTypes.MOOD_ANGRY, IconTypes.MOOD_SAD],
			moodCount : 1510,
			msgCount  : 35,
			shareCount: 30
		},
		main: {
			mainCountentJSX: (
				<div>
					<div>日本真的超多聯名 有夠吸引人的</div>
					<div>小編離兒童超遠了也想要~(暴露年齡嗚嗚இдஇ)</div>
					<hr />
					<div className="b-link">#噪咖同樂會</div>
					<div>
						<span className="b-link">#日本遊樂通</span>
						<span>⋯⋯</span>
						<span className="b-link">更多</span>
					</div>
					<hr />
				</div>				
			),
			outContent: {
				img     : Outlink_1,
				title   : '不是公仔是真的可以玩！日本麥當勞聯名神偷奶爸，不是兒童也要點兒童餐來收集呀~',
				linkFrom: 'ebcbuzz.com'
			}
		}
	},
	{
		top: {
			brand: Logo_2,
			author: 'Vesti 美式休閒風',
			isSponsor: true
		},	
		sub: {
			moodList: [IconTypes.MOOD_THUMBS_UP],
			moodCount : 18,
			msgCount  : 35,
			shareCount: 30
		},
		main: {
			mainCountentJSX: (
				<div>
					<div>【科技發達，出遊更要聰明選擇😏】</div>
					<div> 自拍棒 多功能行動電源藍牙音響</div>
					<div>
						<span> 這裡買 ►</span><span className="b-link">https://goo.gl/qugxnP</span>
					</div>
					<div>3C產品一堆，出遊總是大包小包👜👛👝</div>
					<div>
						<span>現在你有更聰明的選擇🎓⋯⋯</span>
						<span className="b-link">更多</span>
					</div>
					<hr />
					<div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/_fDYScwehvk?ecver=1" frameBorder="0" allowFullScreen></iframe>
          </div>					
				</div>
			)
		}
	},		
	{
		head: {
			type: MessageBoxTypes.RECOMANND
		},
		top: {
			brand: Logo_3,
			author: '娛樂新聞社',
			hour: 2,
			shareType: MessageBoxTypes.SHARE_A_LINK		
		},	
		sub: {
			moodList: [IconTypes.MOOD_THUMBS_UP],
			moodCount : 18,
			msgCount  : 35,
			shareCount: 30
		},
		main: {
			outContent: {
				img     : Outlink_3,
				title   : '《戰狼2》票房達到了45.77億！周星馳看完終於發話了，一針見血句句扎心！',
				describe: '《戰狼2》票房達到了45.77億！周星馳看完終於發話了，一針見血句…',
				linkFrom: 'unbrellanews.com'
			}
		}
	}	
];

const MainContent = (props) => {
	return (
		<div className="MainContent">
			<NewPostBox />
			{
				message.map((obj, idx)=>{
					return <MessageBox {...obj} key={idx} />
				})
			}			
		</div>
	);
};

export default MainContent;