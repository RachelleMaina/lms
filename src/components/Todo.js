import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(results =>
        this.setState({
          articles: results.slice(0, 15)
        })
      );
  }

  render() {
    const articleItem = this.state.articles.map(article => (
      <div key={article.id}>
        <div className="article">
          <span className="body">
            Task: &nbsp;
            {article.title}
            <br />
          </span>
        </div>
      </div>
    ));
    return <div className="container">{articleItem}</div>;
  }
}
