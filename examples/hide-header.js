webpackJsonp([10],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(255);


/***/ },

/***/ 255:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/* eslint-disable no-console,func-names,react/no-multi-comp */
	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(40);
	var Table = __webpack_require__(185);
	__webpack_require__(202);
	
	var columns = [{ title: 'title1', dataIndex: 'a', key: 'a', width: 100 }, { id: '123', title: 'title2', dataIndex: 'b', key: 'b', width: 100 }, { title: 'title3', dataIndex: 'c', key: 'c', width: 200 }, {
	  title: 'Operations', dataIndex: '', key: 'd', render: function render() {
	    return React.createElement(
	      'a',
	      { href: '#' },
	      'Operations'
	    );
	  }
	}];
	
	var data = [{ a: '123', key: '1' }, { a: 'cdd', b: 'edd', key: '2' }, { a: '1333', c: 'eee', d: 2, key: '3' }];
	
	ReactDOM.render(React.createElement(
	  'div',
	  null,
	  React.createElement(
	    'h2',
	    null,
	    'hide table head'
	  ),
	  React.createElement(Table, {
	    columns: columns,
	    showHeader: false,
	    data: data
	  })
	), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=hide-header.js.map