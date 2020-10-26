import React, { Component } from 'react'

export class DetailInputList extends Component {
  state = {
    details : {
      city: '',
      email: ''
    }
  }

  render() {
    return (
      <form className="detail-input-form" onSubmit={this.handleSubmit}>
        <input type='text' onKeyUp={this.handleKeyUp} id="city-input"></input>
        <input type='text' onKeyUp={this.handleKeyUp} id="email-input"></input>
        <button type="submit" onClick={this.handleSubmit} className="addItemButton">
          Subscribe
        </button>
        
      </form>
    )
  }

  handleKeyUp = (event) => {
    const {value, id} = event.target;
    console.log(value, event.target.id)
    this.setState((currentState) => {
      let newCity = currentState.details.city
      let newEmail = currentState.details.email
      if (id === 'city-input') {
        newCity = value;
      } else newEmail = value;
      return {details: {city: newCity, email: newEmail}}
    }, () => {
      console.log(this.state)
    })

  }

  handleSubmit = (event) => {

  }
}

export default DetailInputList
