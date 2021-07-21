import React from 'react'
import { Modal, Button, Form, Col } from 'react-bootstrap'
import {useState, useEffect} from 'react'

function ModalAddNewExperience(props) {
    const [formData, setFormData] = useState({
        role: 'propsRole',
        company: 'propsCompany',
        startDate: ' propsStartDate',
        endDate: 'propsEndDate',
        description: 'propsDescription',
        area: 'propsArea'
      })
    
      const handleForm=(key, value)=>{
        setFormData({
          ...formData,
          [key]: value
        })
      }
    
     
    // POST Goes to the Token owner independently of the ID
        const postUserExperience = async (userId) => {
            try {
                let response = await fetch('https://striveschool-api.herokuapp.com/api/profile/60f52a800efe7800155c3497/experiences', {
                    method: 'POST',
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWYwNmIzNTgxNzAwMTVjMjI3MDUiLCJpYXQiOjE2MjY3NzE0ODUsImV4cCI6MTYyNzk4MTA4NX0.LInoNCSsxHbV1FD7e-JxGb3z_-64r2PKAZ2PYIdhl5c",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                })
                console.log(response)

                let newExperienceSent = await response.json()
                console.log(newExperienceSent)

                // props.onHide() needs to turn on after request is sent
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
              <Form.Group as={Col} controlId="company">
                <Form.Label>Company</Form.Label>
                <Form.Control type="text" placeholder="Enter propsCompany" onChange={(e)=>handleForm('company', e.target.value)} />
              </Form.Group>
  
              <Form.Group as={Col} controlId="role">
                <Form.Label>Role</Form.Label>
                <Form.Control type="text" placeholder="Enter propsrole" onChange={(e)=>handleForm('role', e.target.value)} />
              </Form.Group>
            </Form.Row>
           <Form.Row>
              <Form.Group as={Col} controlId="title">
                <Form.Label>Start Date</Form.Label>
                <Form.Control type="date" placeholder="propsStartDate" onChange={(e)=>handleForm('startDate', e.target.value)} />
              </Form.Group>
              <Form.Group as={Col} controlId="title">
                <Form.Label>End Date</Form.Label>
                <Form.Control type="date" placeholder="propsEndDate" onChange={(e)=>handleForm('endDate', e.target.value)} />
              </Form.Group>
              <Form.Group as={Col} controlId="area">
                <Form.Label>City, Country</Form.Label>
                <Form.Control type="text" placeholder="propsArea" onChange={(e)=>handleForm('area', e.target.value)} />
              </Form.Group>
           </Form.Row>
          </Form>
          <Form.Row>
              <Form.Group as={Col} controlId="description">
                <Form.Label>Start Date</Form.Label>
                <Form.Control type="text" as="textarea" rows={5}  placeholder="propsDescription" onChange={(e)=>handleForm('description', e.target.value)} />
              </Form.Group>
             
           </Form.Row>
        </Modal.Body>
        <Modal.Footer>
         
          <Button variant="primary" 
          onClick={()=>postUserExperience()}
          >Save</Button>
        </Modal.Footer>
      </Modal>
    )
  }

export default ModalAddNewExperience
