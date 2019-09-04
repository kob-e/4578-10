import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
	counter;
	constructor(props) {
		super(props);
		this.state = {
			profiles: []
		}
		this.counter = 0;
	}

	addUser = async (u) => {
		console.log(u);
		const resp = await fetch(`https://api.github.com/users/${u}`);
		const newUser = await resp.json();
		newUser.key = this.counter++;
		this.setState((prevState) => {
			return {
				profiles: [...prevState.profiles, newUser]
			};
		});
	}

	render() {
		return (
			<div>
				<Header />
				<Form addUser={this.addUser} />
				<List profiles={this.state.profiles} />
			</div>
		)
	}
}

export default App;
