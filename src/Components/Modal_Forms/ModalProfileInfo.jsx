import React from 'react'
import { Modal, Button, Form, Col } from 'react-bootstrap'
import {useState, useEffect} from 'react'

function ModalProfileInfo(props) {
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
          Edit intro
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="name">
              <Form.Label>Fisrt Name</Form.Label>
              <Form.Control type="text" placeholder="Enter propsName" onChange={(e)=>handleForm('name', e.target.value)} />
            </Form.Group>

            <Form.Group as={Col} controlId="surname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter propsSurname" onChange={(e)=>handleForm('surname', e.target.value)} />
            </Form.Group>
          </Form.Row>
         <Form.Row>
            <Form.Group as={Col} controlId="title">
              <Form.Label>Job Title</Form.Label>
              <Form.Control as='textarea' type="text" placeholder="propsTitle" onChange={(e)=>handleForm('title', e.target.value)} />
            </Form.Group>
         </Form.Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
        <Button variant="primary" onClick={props.onHide}>Save</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalProfileInfo
