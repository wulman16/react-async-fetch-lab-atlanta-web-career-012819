import React, { Component } from 'react'
import 'isomorphic-fetch';
require('es6-promise').polyfill();
require('isomorphic-fetch');

class App extends Component {

  state = {
    peopleInSpace: []
  }

  componentDidMount() {
    fetch(`http://api.open-notify.org/astros.json`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        peopleInSpace: data.people
      })
    })
  }

  render() {
    return (
      <div>{this.state.peopleInSpace.map(person => person.name)}</div>
    )
  }
}

export default App
