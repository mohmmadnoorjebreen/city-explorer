import React from 'react'
import Button from 'react-bootstrap/Button'

import Modal from 'react-bootstrap/Modal'
export class ModelForError extends React.Component {
    render() {
        return (
            <div>
                <Modal show={this.props.showError} >
                    <Modal.Header closeButton>
                        <Modal.Title>Error</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>here an error in data API is { this.props.massageError} </Modal.Body>
                    <Button onClick={this.props.close}>CLOSE</Button>
                </Modal>
            </div>
        )
    }
}

export default ModelForError
