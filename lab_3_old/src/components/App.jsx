import React, { Component } from 'react';
import Navbar from './Navbar';
import Intro from './Intro'
import '../styles/index.sass'
import Main from './Main';

class App extends Component {
	render() {
		return (
			<>
				<header>
					<Navbar />
					<Intro />
				</header>
				<Main />
			</>
		);
	}
}

export default App;
