import React, { PureComponent } from "react";
import axios from "axios";
import Card from "./Card";
import CardForm from "./CardForm";
import InformationApi from "./InformationApi";
import { api, ip } from "../constant.json";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ideas: [],
      showApi: false
    };
  }

  componentDidMount() {
    axios
      .get(`${api}/idea/all`)
      .then(({ data }) => {
        this.setState({ ideas: data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  addNewIdea = newIdea => {
    axios
      .post(`${api}/idea/`, newIdea)
      .then(({ data }) => {
        console.log(data);
        const newIdeas = [...this.state.ideas, data];
        this.setState({ ideas: newIdeas });
      })
      .catch(error => {
        console.log(error);
      });
  };

  onClickApiButton = () => {
    this.setState({ showApi: !this.state.showApi });
  };

  render() {
    const { ideas, showApi } = this.state;
    return (
      <div className="uk-container uk-margin-small-top">
        <p> url du site : {`${ip}:3000`}</p>
        <button
          className="uk-button uk-button-primary uk-button-small"
          onClick={this.onClickApiButton}
        >
          API
        </button>

        {showApi ? <InformationApi /> : ""}

        <CardForm addNewIdea={this.addNewIdea} />

        {Object.keys(ideas).map(key => {
          return <Card idea={ideas[key]} key={key} upvote={this.upvote} />;
        })}
      </div>
    );
  }
}

export default App;
