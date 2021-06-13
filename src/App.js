import React from 'react'

import Form from 'react-bootstrap/Form'

import Button from 'react-bootstrap/Button'

import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

import Card from 'react-bootstrap/Card'

import Image from 'react-bootstrap/Image'

import Modal from 'react-bootstrap/Modal'




export class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cityName: '',
      cityData: {},
      Data: false,
      error: false
    }
  }

  inputCity = (e) => {
    this.setState({
      cityName: e.target.value
    });
  }

close = () =>{
  this.setState ({
    error: false,
  })
}



  submitForm = async (e) => {
    e.preventDefault();
    const axio = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.d36871f015649f915282f374cff76628&city=${this.state.cityName}&format=json`).catch(() => {
      this.setState ({
        error: true,
        
      });
      
    });;

    this.setState({
      cityData: axio.data[0],
      Data: true
    })
  }

  render() {
    return (
      <div  >
        <Form onSubmit={this.submitForm} style={{ width: 960, margin: 'auto', textAlign: "center", backgroundColor: "blue" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: "white", fontSize: '6mm' }}>city name  </Form.Label>
            <Form.Control type="text" placeholder="Enter city name " onChange={this.inputCity} style={{ width: 500, margin: 'auto' }} />
          </Form.Group>
          <Button variant="primary" type="submit" >
            Explore!
          </Button>

        </Form>
        {this.state.Data &&
          <div style={{ width: 960, margin: 'auto', textAlign: "center", backgroundColor: "blue" }}>
            <Card >
              <Card.Header as="h5" style={{ color: "red" }}> the city</Card.Header>
              <Card.Body>
                <Card.Title style={{ color: "blue" }}>City name : {this.state.cityData.display_name}</Card.Title>
                <Card.Text style={{ color: "green" }}>
                  latitude  = {this.state.cityData.lat}  </Card.Text>
                <Card.Text style={{ color: "green" }}>
                  longitude = {this.state.cityData.lon}  </Card.Text>
              </Card.Body>
            </Card>


            <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=15`} roundedCircle style={{ margin: 'auto' }} />

          </div>
        }
        {
          this.state.error &&
          <div>
            <Modal show={ this.state.error} >
              <Modal.Header closeButton>
                <Modal.Title>Error</Modal.Title>
              </Modal.Header>
              <Modal.Body>here an error in data API</Modal.Body>
              <Button onClick = {this.close}>CLOSE</Button>
            </Modal>
          </div>
        }

      </div>
    )
  }
}

export default App

export function getAllPeople() {
  return axios
    .get("/api/getAllPeople")
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });
}

