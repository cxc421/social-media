import React from 'react';

const SearchBar = (props) => {	
	const classStr = `SearchBar ${props.bsClass}`;	
	return (
	  <div className={classStr}>
	    <button>
	      <i className="fa fa-search" aria-hidden="true"></i>
	    </button>
	    <input type="text" placeholder='搜尋'/>
	  </div>		
	);
};

export default SearchBar;