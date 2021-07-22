import React from 'react'
import { Modal, Button, Form, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'

function ModalProfileImage(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Change Image
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="profile">
                            <Form.Label>Profile Image</Form.Label>
                            <Form.Control type="file" placeholder="Update your profile image" onChange={(e) => console.log( e.target.files)} />
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                {/* <Button onClick={props.onHide}>Close</Button> */}
                <Button variant="primary"
                    
                >Save</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalProfileImage
