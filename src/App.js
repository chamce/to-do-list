import React, { Component } from 'react';
import './App.css';
import Item from './Item.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      filter: 'All',
      list: []
    }
    this.textEntered = this.textEntered.bind(this);
    this.addClicked = this.addClicked.bind(this);
    this.checkmarkClicked = this.checkmarkClicked.bind(this);
    this.deleteClicked = this.deleteClicked.bind(this);
    this.filterClicked = this.filterClicked.bind(this);
    this.clearClicked = this.clearClicked.bind(this);
    this.listMapper = this.listMapper.bind(this);
    this.listFilterer = this.listFilterer.bind(this);
  }

  addClicked() {
    // add list item
    let item = { text: this.state.input, time: Date.now(), status: true };
    this.setState({
      list: this.state.list.concat(item),
      input: ''
    });
  }

  checkmarkClicked(time) {
    // checkmark item
    let temp = this.state.list;
    for (let item of temp) {
      if (item.time === time) {
        item.status = !item.status;
      }
    }
    this.setState({
      list: temp
    });
  }

  deleteClicked(time) {
    // delete item
    this.setState({
      list: this.state.list.filter(item => item.time !== time)
    });
  }

  filterClicked(newFilter) {
    // change filter
    this.setState({
      filter: newFilter
    });
  }

  clearClicked() {
    // clear completed

  }

  listMapper(item, index) {
    console.log(item, index);
    return <Item item={item} key={index} delete={this.deleteClicked} checkmark={this.checkmarkClicked}></Item>;
  }

  listFilterer(item) {
    if (this.state.filter === 'All') {
      return item;
    }
    else if (this.state.filter === 'Active' && item.status) {
      return item;
    }
    else if (this.state.filter === 'Completed' && !item.status) {
      return item;
    }
  }

  textEntered(event) {
    this.setState({ input: event.target.value });
    console.log(this.state.input);
  }

  render() {

    return (
      <div className='container text-center'>
        <div className='row'>
          <div className='col-md-4 offset-md-4 col-sm-12'>
            <>
              <div className='row'>
                <h3>What needs to be done?</h3>
              </div>
              <div className='row mb-2'>
                <input type="text" name="name" value={this.state.input} onChange={this.textEntered} />
              </div>
              <div className='row mb-2'>
                <button className='bg-dark text-white' onClick={this.addClicked}>Add</button>
              </div>
            </>
            <>
              <div className='row mb-1'>
                <div className="btn-group" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-primary" onClick={() => this.filterClicked('All')}>All</button>
                  <button type="button" className="btn btn-primary" onClick={() => this.filterClicked('Active')}>Active</button>
                  <button type="button" className="btn btn-primary" onClick={() => this.filterClicked('Completed')}>Completed</button>
                </div>
              </div>
              <div className='row text-start'>
                <h6>{this.state.list.filter(item => item.status === true).length} active tasks</h6>
              </div>
            </>
            <>
              <div className='row mb-2'>
                {this.state.list.filter(this.listFilterer).map(this.listMapper)}
              </div>
            </>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
