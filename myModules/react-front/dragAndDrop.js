var React = require('react');

module.exports  = React.createClass({
	displayName: 'dragAndDrop',
	render: function(){
		return(
			<div className="row">
			  <div className="col-xs-12 text-xs-center">
			    <button className="btn btn-primary-outline" type="submit">Drag &amp; Drop files or Click here</button>
			  </div>
			</div>
		);
	}
});