import React, {Component} from 'react';
import $ from 'jquery';
//import { Grid, Navbar, Image } from 'react-bootstrap';
//import logoImg from '../img/logo.png';
import Navbar from './Navbar.js';
import Leftbar from './Leftbar.js';
import Rightbar from './Rightbar.js';
import MainContent from './MainContent.js';


class App extends Component {
	constructor () {
		super(...arguments);		
		this._initFixedArea = this._initFixedArea.bind(this);
	}
	_initFixedArea (dom) {
		let $target = $(dom),
				$parent = $target.parent(),
				{top}   = $parent.offset(),
				width   = $parent.width();
		$target.css({
			display: 'block',
			position: 'fixed',
			top: top,
			width: width,
			height: 300,
			//background: 'rgba(0,0,0,0.1)'
		});
	}
	componentDidMount () {
		this._initFixedArea(this.refs.sidebarLeftWrapper);
		this._initFixedArea(this.refs.sidebarRightWrapper);
	}
	render () {
	  return (
	  	<div>
		    <Navbar></Navbar>    
		    <div className="container-fluid globalContainer">    	
		    	<div className="row">
		    		<div className="pull-left sidebar-left">
		    			<div ref="sidebarLeftWrapper" className="sidebar-wrapper">
		    				<Leftbar />
		    			</div>
		    		</div>
		    		<div className="pull-left main-content">
		    			<MainContent />
		    		</div>
		    		<div className="pull-right sidebar-right">
		    			<div ref="sidebarRightWrapper" className="sidebar-wrapper">
								<Rightbar />
		    			</div>
		    		</div>
		    	</div>
		    </div>  		
	  	</div>
	  );
	}
}

export default App;