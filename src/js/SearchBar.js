import React from 'react';
import classNames from 'classnames';

const SearchBar = (props) => {	
	const classStr = `SearchBar ${props.bsClass}`;	
	return (
	  <div className={classNames('SearchBar', props.bsClass)}>
	    <button>
	      <i className="fa fa-search" aria-hidden="true"></i>
	    </button>
	    <input type="text" placeholder='搜尋' />
	  </div>		
	);
};

SearchBar.defaultProps = {
	bsClass: null
};

export default SearchBar;