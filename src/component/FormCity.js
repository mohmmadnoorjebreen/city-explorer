import React from 'react'

import Form from 'react-bootstrap/Form'

import Button from 'react-bootstrap/Button'

export class FornmCity extends React.Component {
    render() {
        return (
            <div>
                <Form onSubmit={this.props.submit} style={{ width: 960, margin: 'auto', textAlign: "center", backgroundColor: "blue" }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{ color: "white", fontSize: '6mm' }}>city name  </Form.Label>
                        <Form.Control type="text" placeholder="Enter city name " onChange={this.props.impute} style={{ width: 500, margin: 'auto' }} />
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Explore!
                    </Button>

                </Form>
            </div>
        )
    }
}

export default FornmCity
