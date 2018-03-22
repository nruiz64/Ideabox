import React, { PureComponent } from 'react';

export default class Card extends PureComponent {
	render() {
		const { data } = this.props;
		const { title, description, asker, accepted } = data;
		return (
			<div className="uk-card uk-card-default uk-card-body uk-width-1-2@m margin-top-5 ">
				<h3 className="uk-card-title">
					{asker}:{' '}
					<em>
						{title} <span uk-icon="check" />
						<span uk-icon="close" />
					</em>
				</h3>
				<p>{description}</p>
			</div>
		);
	}
}
