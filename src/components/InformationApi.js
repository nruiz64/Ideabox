import React, { PureComponent } from "react";

export default class InformationApi extends PureComponent {
  render() {
    return (
      <p>
        <span className="uk-label">GET</span> <b>/idea/all</b> :
        <i>get all ideas</i>
        <br />
        <span className="uk-label">POST</span> <b>/idea/</b> :
        <i>
          <br />
          {`{`}
          <br />
          String asker;<br />
          String title;<br />
          String description;<br />
          {`}`}
        </i>
        <br />
        <span className="uk-label">GET</span> <b>/idea/delete/{`{id}`}"</b> :
        <i>delete idea</i>
        <br />
        <span className="uk-label">GET</span> <b>/idea/upvote/{`{id}`}"</b> :
        <i>upvote idea</i>
        <br />
        <span className="uk-label">GET</span> <b>/idea/downvote/{`{id}`}"</b> :
        <i>downvote idea</i>
        <br />
      </p>
    );
  }
}
