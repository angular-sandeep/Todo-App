import React, { Component } from 'react'
import Navbar from './../containers/Navbar';
import AddTodo from '../containers/AddTodo';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <AddTodo />
      </div>
    )
  }
}
