import React, {Component} from 'react';
import $ from 'jquery';
import Box from './Box';
import Icon from './Icon';
import Brand from './Brand';
import SquareButton from './SquareButton';
import * as IconTypes from './IconTypes';
import * as MessageBoxTypes from './MessageBoxTypes';

const MoodIcon = ({imgName}) => {
	return (
		<span className="MoodIcon">
			<Icon imgName={imgName} />
		</span>
	);
};

const ActionBtn = ({imgName, text}) => {
	return (
		<div className="ActionBtn child-va">
			<Icon imgName={imgName}/>
			<span className="b-link">{text}</span>
		</div>
	);
};

class MessageBoxSub extends Component {
	constructor() {
		super(...arguments);
		this._convertNumberToDollar = this._convertNumberToDollar.bind(this);
	}
	_convertNumberToDollar (number) {
		return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	}
	componentDidMount() {
		const $iconArea = $(this.refs.iconArea);
		const $icons = $iconArea.children().filter('.MoodIcon');
		const iconLen = $icons.length;
		$icons.each(function(idx){
			$(this).css({
				zIndex: iconLen - idx
			});
		});
	}
	render() {
		const {moodList, moodCount, msgCount, shareCount} = this.props;		
		return (
			<div className="MessageBoxSub">
				<div className="wrapper">

					<div className="container-fliud rowArea-1">
						<div className="row child-va">
							<div ref="iconArea" className="pull-left child-va icon-area">		
								{
									moodList.map((imgName) => <MoodIcon imgName={imgName} />)
								}
								<span className="b-link moodCount">{this._convertNumberToDollar(moodCount)}</span>								
							</div>
							<div className="pull-right text-area">
								<span className="b-link">{`${this._convertNumberToDollar(msgCount)}則留言`}</span>
								<span className="b-link">{`${this._convertNumberToDollar(shareCount)}則分享`}</span>								
							</div>
						</div>
					</div>

					<div className="container-fliud rowArea-2">
						<div className="row child-va">
							<ActionBtn imgName={IconTypes.ACTION_THUMBS_UP} text="讚" />							
							<ActionBtn imgName={IconTypes.ACTION_LEAVE_MSG} text="留言" />
							<ActionBtn imgName={IconTypes.ACTION_SHARE} text="分享" />
						</div>
					</div>
				</div>
			</div>
		);			
	}
}

const MessageBoxTop = ({brand, author, hour, shareType, isSponsor}) => {
	let authJSX = null;
	switch (shareType) {
		case MessageBoxTypes.SHARE_A_LINK:
			authJSX = (
				<div>
					<h5>
						<span className="b-link">{author}</span>
						<span className="normal-text">分享了 1 條</span>
						<span className="b-link">連結</span>
					</h5>					
				</div>											
			);
		break;
		default:
			authJSX = (
				<div>
					<h5>
						<span className="b-link">{author}</span>
					</h5>					
				</div>											
			);
	}
	return (									
		<div className="container-fluid MessageBoxTop">
			<Icon bsClass="down-img" imgName={IconTypes.DOWN_ARROW} />	
			<div className="row">
				<Brand src={brand} size="40" />
				<div  className="text-area">
					{authJSX}
					<div>
						<span className="b-link">{isSponsor ? `贊助` : `${hour} 小時`}</span>
						{' · '}
						<Icon imgName={IconTypes.EARTH} />
					</div>
				</div>
			</div>
		</div>							
	);
};

const MessageBoxOutLink = ({img, title, linkFrom, describe}) => {
	return (
		<div className="MessageBoxOutLink">
			<div className="img-area">
				<img className="img-responsive" src={img} alt="outlink-img" />
			</div>	
			<div className="content-area">
				<div className="title">{title}</div>
				<div className="describe">{describe}</div>
				<div className="from">{linkFrom}</div>
			</div>		
		</div>
	);
};

const MessageBoxMain = ({mainCountentJSX, outContent}) => {
	const outContentJSX = (outContent) 
					? <MessageBoxOutLink {...outContent} />
					: null;
	return (
		<div className="MessageBoxMain">
			{mainCountentJSX}
			{outContentJSX}
		</div>
	);
};

const MessageBoxHead = ({type}) => {
	if (!type) {
		return null;
	}	
	return (
		<div className="MessageBoxHead">			
			<span>推薦貼文</span>
			<SquareButton bsClass="recBtn">
				<Icon imgName={IconTypes.BUTTON_THUMBS_UP} />
				<span>說這專頁讚</span>
			</SquareButton>
		</div>
	);
};

const MessageBox = ({top, sub, main, head}) => {
	return (
		<div className="MessageBox">
			<Box>				
				<MessageBoxHead {...head} />
				<MessageBoxTop {...top} />
				<MessageBoxMain {...main} />
			</Box>			
			<MessageBoxSub {...sub} />
		</div>
	);
};

export default MessageBox;