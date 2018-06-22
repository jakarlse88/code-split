import './App.css';
import Page1 from './components/Page1';
import React, { Component } from 'react';

class App extends Component {
	constructor() {
		super();

		this.state = {
			route: 'page1',
			component: ''
		};
	}

	onRouteChange = async route => {
		if (route === 'page1') {
			this.setState({ route: route });
		} else if (route === 'page2') {
			const Page2 = await import('./components/Page2');
			this.setState({ route: route, component: Page2.default });
		} else if (route === 'page3') {
			const Page3 = await import('./components/Page3');
			this.setState({ route: route, component: Page3.default });
		}
	}

	render() {
		const { route } = this.state;

		if (route === 'page1') {
			return <Page1 onRouteChange={this.onRouteChange} />
		} else {
			return <this.state.component onRouteChange={this.onRouteChange} />
		}
	}
}

export default App;
