// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FlipMove from 'react-flip-move';
import { Pin, View } from 'react-desktop/macOs';
import UserItem from './ui/userItem';

export default class ListUsers extends Component {
  constructor(props){
    super(props);
    this.state = { users: [] };
  }
  componentWillMount() {
    const root = 'https://jsonplaceholder.typicode.com';
    let that = this;
    axios.get(`${root}/users`).then((data) => {
      that.setState({
        users: data.data
      });
      return true;
    }).catch((e) => {
      console.log(e);
    });
  }
  render() {
    return (
      <View>
        <div>
            <Link to="/">to home</Link>
            <Pin length={4} reveal />
            <FlipMove duration={750} easing="ease-out">
            {this.state.users.map((user) => {
              return (
                <UserItem key={user.id} user={user} />
              );
            })}
          </FlipMove>
        </div>
    </View>
    );
  }
}
