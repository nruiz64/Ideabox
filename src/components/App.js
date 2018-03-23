import React, { PureComponent } from "react";
import Card from "./Card";
import CardForm from "./CardForm";
import axios from "axios";
import { api } from "../constant.json";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ideas: []
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
        const newIdeas = [...this.state.ideas, data];
        this.setState({ ideas: newIdeas });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { ideas } = this.state;
    return (
      <div className="uk-container uk-margin-large-top">
        <CardForm addNewIdea={this.addNewIdea} />

        {Object.keys(ideas).map(key => {
          return <Card idea={ideas[key]} key={key} />;
        })}
      </div>
    );
  }
}

export default App;
