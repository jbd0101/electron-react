// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

export default class ListUsers extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>get users</h2>
          <Link to="/">to home</Link>
        </div>
      </div>
    );
  }
}
