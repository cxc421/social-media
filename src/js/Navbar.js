import React from 'react';
import SearchBar from './SearchBar.js';
import brandImg from '../img/doge.jpg';

const Navbar = (props) => {
	return (
		<header className="Navbar">
			<div className="container-fluid">
				<div className="row">

					<div className="pull-left">
						<i className="fa fa-facebook-official icon" aria-hidden="true"></i>
						<SearchBar />
					</div>

					<div className="pull-right">
						<div className="user child-va with-hover">
							<img src={brandImg} alt="icon.jpg" />
							<span>汪星人</span>
						</div>						
						<div className="item child-va with-hover with-left-bar">
							<span>首頁</span>
						</div>						
						<div className="item child-va with-hover with-left-bar">
							<span>尋找朋友</span>
						</div>																								
						<div className="imgs-area child-va">
							<i className="fa fa-address-book" aria-hidden="true"></i>
							<i className="fa fa-commenting" aria-hidden="true"></i>
							<i className="fa fa-globe" aria-hidden="true"></i>
						</div>
						<div className="imgs-area-2 child-va with-left-bar">
							<i className="fa fa-question-circle" aria-hidden="true"></i>
							<i className="fa fa-caret-down" aria-hidden="true"></i>
						</div>
					</div>

				</div>
			</div>
		</header>
	);
};


export default Navbar;