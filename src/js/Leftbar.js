import React from 'react';
import iconImg from '../img/doge.jpg';
import LeftbarNav from './LeftbarNav.js';
import * as IconTypes from './IconTypes.js';

const Leftbar = (props) => {
	return (
		<div className="Leftbar">		

			<div className="nav-wrapper">
				<div className="nav-item child-va">
					<img src={iconImg} alt="user-nav" />
					<span>汪星人</span>
				</div>
			</div>

			<div className="nav-wrapper">
				<LeftbarNav imgName={IconTypes.DYNAMIC_MESSAGE} text='動態消息' isSelect={true} />
				<LeftbarNav imgName={IconTypes.MESSENGER} text='Messenger' />
			</div>

			<div className="nav-wrapper">
				<div className="nav-header">探索</div>
				<LeftbarNav imgName={IconTypes.CLUB} text='社團' />
				<LeftbarNav imgName={IconTypes.FAN} text='粉絲專頁' />
				<LeftbarNav imgName={IconTypes.ACTIVITY} text='活動' />
				<LeftbarNav imgName={IconTypes.EDIT} text='編輯建議' />
				<LeftbarNav imgName={IconTypes.FRIEND} text='朋友名單' />
				<LeftbarNav imgName={IconTypes.GAME} text='遊戲' />
				<LeftbarNav imgName={IconTypes.TREASURE} text='我的珍藏' />
				<LeftbarNav imgName={IconTypes.TRADE_CLUB} text='商品買賣社團' />
				<LeftbarNav imgName={IconTypes.SHOP} text='商店' />
				<LeftbarNav imgName={IconTypes.DAY} text='我的這一天' />
				<div className="child-va nav-link">
					<i className="fa fa-caret-down" aria-hidden="true"></i>
					<a href="#">查看更多....</a>
				</div>
			</div>

			<div className="nav-wrapper">
				<div className="nav-header">建立</div>
				<div className="child-va nav-link">
					<a href="#">廣告</a>
					{" · "}
					<a href="#">粉絲專頁</a>
					{" · "}
					<a href="#">社團</a>
					{" · "}
					<a href="#">活動</a>
				</div>
			</div>
		</div>
	);
};

export default Leftbar;