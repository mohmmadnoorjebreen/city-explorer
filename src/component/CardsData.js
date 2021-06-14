import React from 'react'

import Card from 'react-bootstrap/Card'

export class CardsData extends React.Component {
    render() {
        return (
            <div>
                 <Card >
              <Card.Header as="h5" style={{ color: "red" }}> the city</Card.Header>
              <Card.Body>
                <Card.Title style={{ color: "blue" }}>City name : {this.props.cityNames}</Card.Title>
                <Card.Text style={{ color: "green" }}>
                  latitude  = {this.props.latitude}  </Card.Text>
                <Card.Text style={{ color: "green" }}>
                  longitude = {this.props.longitude}  </Card.Text>
              </Card.Body>
            </Card>
            </div>
        )
    }
}

export default CardsData
