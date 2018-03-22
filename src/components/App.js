import React, { PureComponent } from 'react';
import Card from './Card';
import data from '../data.json';

class App extends PureComponent {
	render() {
		return (
			<div className="uk-container uk-margin-large-top">
				{Object.keys(data).map((key) => {
					return <Card data={data[key]} key={key} />;
				})}
			</div>
		);
	}
}

export default App;
