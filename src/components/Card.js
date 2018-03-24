import React, { PureComponent } from 'react';
import axios from 'axios';
import { api } from '../constant.json';

export default class Card extends PureComponent {
	state = {
		data: {}
	};
	upvote = (e) => {
		axios
			.get(`${api}/idea/upvote/${this.props.idea.id}`)
			.then(({ data }) => {
				this.setState({ data });
			})
			.catch((error) => {
				console.log(error);
			});
	};

	downvote = (e) => {
		axios
			.get(`${api}/idea/downvote/${this.props.idea.id}`)
			.then(({ data }) => {
				this.setState({ data });
			})
			.catch((error) => {
				console.log(error);
			});
	};
	render() {
		const { idea } = this.props;
		const { title, description, asker, id, vote } = idea;
		return (
			<div className="uk-card uk-card-default uk-card-body uk-width-1-1@m margin-top-5 custom-card">
				<h3 className="uk-card-title">
					{asker}
					<br />
					<em>{title}</em>&nbsp;
					<button uk-icon="arrow-up" onClick={this.upvote} />&nbsp;
					<button uk-icon="arrow-down" onClick={this.downvote} />&nbsp; : &nbsp;{this.state.data.vote != null ? this.state.data.vote : vote}
				</h3>
				<p>{description}</p>
			</div>
		);
	}
}
