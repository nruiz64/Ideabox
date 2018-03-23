import React, { PureComponent } from "react";
import { api } from "../constant.json";
export default class CardForm extends PureComponent {
  state = { asker: "", title: "", description: "" };

  onChangeAsker = e => {
    this.setState({ asker: e.target.value });
  };

  onChangeTitle = e => {
    this.setState({ title: e.target.value });
  };

  onChangeDescription = e => {
    this.setState({ title: e.target.value });
  };

  onAddIdea = () => {
    const idea = {
      asker: this.state.asker,
      title: this.state.title,
      description: this.state.description
    };
    this.props.addNewIdea(idea);
  };

  render() {
    return (
      <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m margin-top-5 ">
        <div className="uk-margin">
          <input
            className="uk-input uk-form-width-large"
            type="text"
            placeholder="Demandeur"
            onChange={this.onChangeAsker}
          />
        </div>
        <div className="uk-margin">
          <input
            className="uk-input uk-form-width-large"
            type="text"
            placeholder="Titre"
            onChange={this.onChangeTitle}
            name="title"
          />
        </div>
        <div className="uk-margin">
          <textarea
            className="uk-textarea"
            onChange={this.onChangeDescription}
            placeholder="description"
          />
        </div>
        <button
          className="uk-button uk-button-default"
          onClick={this.onAddIdea}
        >
          Add idea
        </button>
      </div>
    );
  }
}
