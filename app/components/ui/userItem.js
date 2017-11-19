// @flow
import React, { Component } from 'react';

export default class UserItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const user = this.props.user;
    return (
      <div>
        <p> {user.name} </p>
        <p>{user.email}</p>
      </div>
    );
  }
}
