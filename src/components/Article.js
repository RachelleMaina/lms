import React, { Component } from "react";

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(results =>
        this.setState({
          articles: results.slice(0, 5)
        })
      );
  }

  render() {
    const articleItem = this.state.articles.map(article => (
      <div key={article.id}>
        <div className="article">
          <h3 className="title">
            <img
              src="https://images.unsplash.com/photo-1553778807-7763a30b402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
              height="100"
              align="top"
            />
            {article.title}
            <br />
            <span>
              <i className="rate text-warning fa fa-star" />
            </span>
            <span>
              <i className="rate text-warning fa fa-star" />
            </span>
            <span>
              <i className="rate text-warning fa fa-star" />
            </span>
            <span>
              <i className="rate fa fa-star" />
            </span>
          </h3>
          <span className="body">{article.body}</span>
        </div>
      </div>
    ));
    return <div className="container">{articleItem}</div>;
  }
}
