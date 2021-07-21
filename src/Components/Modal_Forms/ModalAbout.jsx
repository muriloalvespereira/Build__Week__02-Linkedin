import React from 'react'
import { Modal, Button, Form, Col } from 'react-bootstrap'
import {useState, useEffect} from 'react'

function ModalAbout(props) {
   const [formData, setFormData] = useState({
    surname: 'propsSurname',
    title: 'propsTitle',
    name: ' propsName',
    bio: 'propsBio',
    area: 'propsArea'
  })

  const handleForm=(key, value)=>{
    setFormData({
      ...formData,
      [key]: value
    })
  }

  const updateProfileInfo = async()=>{
    try {
                let response = await fetch('https://striveschool-api.herokuapp.com/api/profile/', {
                    method: 'PUT',
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWYwNmIzNTgxNzAwMTVjMjI3MDUiLCJpYXQiOjE2MjYyNzAyMjMsImV4cCI6MTYyNzQ3OTgyM30.0IcvG8-Zqf633mRWGCRlzG5yDVI6njZjZGZzJfuGulw",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)

                })
                let sent = await response.json()
                console.log(sent)
            } catch (e) {
                return e
            }
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit summary
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="bio">
              <Form.Label>Description</Form.Label> 
              <Form.Control type="text" as='textarea' rows={5} placeholder="Enter propsName" onChange={(e)=>handleForm('bio', e.target.value)} />
            </Form.Group>
          </Form.Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
        <Button variant="primary" 
        // onClick={props.onHide}
        >Save</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalAbout
