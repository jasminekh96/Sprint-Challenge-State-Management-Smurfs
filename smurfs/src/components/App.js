import React, { Component } from 'react';
import './App.css';
import SmurfPeople from './SmurfPeople';
class App extends Component {
	render() {
		return (
			<div className='App'>
				<h1>SMURF VILLAGE</h1>
				<h2>Welcome to Smurf Village!</h2>
				<p>Meet some of our small blue peeps!</p>
				<SmurfPeople />
			</div>
		);
	}
}

export default App;
