import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../store/actions/actionCreators';

class BasicContainer extends Component {
	state = {
		msg: 'Hello there !'
	}
	onClickHandler(target) {
		switch(target) {
			case 'ADD' :
				this.props.addHello();
			break;
			case 'REMOVE' :
				this.props.removeHello();
			break; 
			default:
				console.log('Ups..');
			break;
		}        
	}
	renderHellos() {
		var hellos = [];
				
		for (let i = 0; i < this.props.helloCount; i++) {
			hellos.push(<p key={ 'hello ' + i }>Hello There !</p>);
		}
		return hellos;
	}
	render() {
		return(
			<div>
				{ this.renderHellos() }
				<img src='https://i.ytimg.com/vi/r_1N5P_PFRs/maxresdefault.jpg' alt='General Kenobi'/>
				<button name='ADD' onClick={ e => this.onClickHandler(e.target.name)}>+</button>
				<button name='REMOVE' onClick={ e => this.onClickHandler(e.target.name)}>-</button>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		helloCount: state.helloReducer.helloCount
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		addHello: Actions.addHello,
		removeHello: Actions.removeHello
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicContainer);