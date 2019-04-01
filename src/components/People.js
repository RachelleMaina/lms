import React, { Component } from "react";

export default class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data =>
        this.setState({
          users: data.slice(0, 5)
        })
      );
  }

  render() {
    const userItem = this.state.users.map(user => (
      <div key={user.id}>
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1553797505-315cf1244e9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            height="100"
            align="top"
          />
          <span className="name">{user.name}</span>
          <br />
          <br />
          <span className="body">{user.email}</span>
          <br />
          <span className="body">{user.phone}</span>
          <br />
          <span className="body">{user.website}</span>
        </div>
      </div>
    ));
    return <div>{userItem}</div>;
  }
}
