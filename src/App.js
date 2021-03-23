import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputBar from './InputBar.js';
import List from './List.js';
import FilterBar from './FilterBar.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      filter: '',
      list: [{ id: 1, text: "Something", status: true },
      { id: 2, text: "Something else", status: true }]
    }
  }

  submitClicked() {
    this.addListItem();
  }

  checkClicked() {
    this.checkItem();
  }

  removeClicked() {
    this.removeItem();
  }

  filterClicked() {
    this.changeFilter();
  }

  clearClicked() {
    this.clearCompleted();
  }

  addListItem() {

  }

  checkItem() {

  }

  removeItem() {

  }

  changeFilter() {

  }

  clearCompleted() {

  }

  render() {
    return (
      <div className='container text-center'>
        <div className='row'>
          <div className='col-md-4 offset-md-4 col-sm-12'>
            <InputBar></InputBar>
            <FilterBar></FilterBar>
            <List
              todos={this.state.list}
            ></List>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
