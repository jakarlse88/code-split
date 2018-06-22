import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import React, { Component, Fragment } from 'react';

class App extends Component {
	constructor() {
		super();

		this.state = {
			route: 'page1'
		};
	}

	onRouteChange = route => {
		this.setState({ route });
	}

	render() {
		const { route } = this.state;

		return (
			<Fragment>
				{route === 'page1' &&
					<Page1 onRouteChange={this.onRouteChange} />
				}
				{route === 'page2' &&
					<Page2 onRouteChange={this.onRouteChange} />
				}
				{route === 'page3' &&
					<Page3 onRouteChange={this.onRouteChange} />
				}
			</Fragment>
		);
	}
}

export default App;
