import React, { Component } from 'react'
import * as api from '../utils/api'

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
        <input type='text' onChange={this.handleKeyUp} id="city-input" value={this.state.details.city} placeholder="City"></input>
        <input type='email' onChange={this.handleKeyUp} id="email-input" value={this.state.details.email} placeholder="Email"></input>
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

  handleSubmit = async (event) => {
    event.preventDefault()
    const {city, email} = this.state.details

    let data = await api.postDetails(city, email)
    console.log(data)
    this.setState({
      details: {
        city: '',
        email: ''
      }
    }, () => {
      console.log(this.state.details)
    })


  }
}

export default DetailInputList
