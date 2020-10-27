import React, { Component } from 'react'
import * as api from '../utils/api'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


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
          <h3>Enter your email address and city for email notifications on rainy days</h3>
         <TextField  label="City" variant="filled" onChange={this.handleKeyUp} id="city-input" value={this.state.details.city} placeholder="e.g. London"/>
         <TextField  label="Email" variant="filled" onChange={this.handleKeyUp} id="email-input" value={this.state.details.email} placeholder="e.g. example@domain.com"/>
         <Button variant="contained" color="primary" component="span" onClick={this.handleSubmit} id="subscribe-button">
          Subscribe
        </Button>
        
        
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
