import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  from './app';
import * as serviceWorker from './serviceWorker';

/* React */

function List(props) {
	/*	{props.profiles.map(p => <Card name={p.name} company={p.company} />)} */
	return (
		<>
			{props.profiles.map(p => <Card {...p} />)}
		</>
	)
}

class Card extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<div>
					<img src={this.props.avatar_url} className="img"></img><br /><br /><br />
					<span className="name"><b>{this.props.name}</b></span><br />
					<span className="company">{this.props.company}</span>
				</div>
				<div className="clear"></div><hr />
			</>
		)
	}
}

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: 'david'
		}
	
	}
	clickEvent = (event) => {
		this.props.addUser(this.state.userName);
		this.setState({userName: ''});
	}

	render() {
		return (<div>
			<input value={this.state.userName} onChange={event => this.setState({ userName: event.target.value })} />
			<input type='button' value='add user' onClick={this.clickEvent} />
		</div>)
	}
}
function Header() {
	return <h1>The GitHub Cards App</h1>
}



ReactDOM.render(<App />, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
