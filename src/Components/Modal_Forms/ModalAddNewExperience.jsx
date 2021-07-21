import React from 'react'
import { Modal, Button, Form, Col } from 'react-bootstrap'
import {useState, useEffect} from 'react'

function ModalAddNewExperience(props) {
    const [formData, setFormData] = useState({
        role: '',
        company: 'propsCompany',
        startDate: ' propsStartDate',
        endDate: 'propsEndDate',
        description: 'propsDescription',
        area: 'propsArea'
      })
      const [endpoint, setEndpoint] = useState('')

      
      useEffect(()=>{
        if(props.userExperience)
        setFormData(
          {
            role: props.userExperience.role,
            company: props.userExperience.company,
            startDate: props.userExperience.startDate,
            endDate: props.userExperience.endDate,
            description: props.userExperience.description,
            area: props.userExperience.area
            
          }
          )
      },[])
    
      const handleForm=(key, value)=>{
        setFormData({
          ...formData,
          [key]: value
        })
      }
    
     
    // POST Goes to the Token owner independently of the ID
        const postUserExperience = async () => {
            try {
                let response = await fetch(props.endpoint, {
                    method: props.requestmethod,
                    headers: {
                      // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWYwNmIzNTgxNzAwMTVjMjI3MDUiLCJpYXQiOjE2MjY3NzE0ODUsImV4cCI6MTYyNzk4MTA4NX0.LInoNCSsxHbV1FD7e-JxGb3z_-64r2PKAZ2PYIdhl5c
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


        // Delete
        const deleteUserExperience = async () => {
          try {
              let response = await fetch(props.endpoint, {
                  method: 'DELETE',
                  headers: {
                    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWYwNmIzNTgxNzAwMTVjMjI3MDUiLCJpYXQiOjE2MjY3NzE0ODUsImV4cCI6MTYyNzk4MTA4NX0.LInoNCSsxHbV1FD7e-JxGb3z_-64r2PKAZ2PYIdhl5c
                      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWYwNmIzNTgxNzAwMTVjMjI3MDUiLCJpYXQiOjE2MjY3NzE0ODUsImV4cCI6MTYyNzk4MTA4NX0.LInoNCSsxHbV1FD7e-JxGb3z_-64r2PKAZ2PYIdhl5c",
                  },
              })

              let deleteResponse = await response.json()
              console.log(deleteResponse, 'DELETE EXperience')

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
        {console.log(props, 'UserDetails')}
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
                <Form.Control type="text" placeholder={endpoint === 'POST' ? "Enter propsCompany" : formData.company} onChange={(e)=>handleForm('company', e.target.value)} />
              </Form.Group>
  
              <Form.Group as={Col} controlId="role">
                <Form.Label>Role</Form.Label>
                <Form.Control type="text" placeholder={endpoint === 'POST' ? "Enter propsrole" : formData.role} onChange={(e)=>handleForm('role', e.target.value)} />
              </Form.Group>
            </Form.Row>
           <Form.Row>
              <Form.Group as={Col} controlId="startDate">
                <Form.Label>Start Date</Form.Label>
                <Form.Control type="date" value={endpoint === 'POST' ? "" : formData.startDate} onChange={(e)=>handleForm('startDate', e.target.value)} />
              </Form.Group>
              <Form.Group as={Col} controlId="endDate">
                <Form.Label>End Date</Form.Label>
                <Form.Control type="date"  value={endpoint === 'POST' ? "" : formData.endDate} onChange={(e)=>handleForm('endDate', e.target.value)} />
              </Form.Group>
              <Form.Group as={Col} controlId="area">
                <Form.Label>City, Country</Form.Label>
                <Form.Control type="text" placeholder={endpoint === 'POST' ? "propsendare" : formData.area} onChange={(e)=>handleForm('area', e.target.value)} />
              </Form.Group>
           </Form.Row>
          </Form>
          <Form.Row>
              <Form.Group as={Col} controlId="description">
                <Form.Label>Start Date</Form.Label>
                <Form.Control type="text" as="textarea" rows={5}  placeholder={endpoint === 'POST' ? "addDescription" : formData.description} onChange={(e)=>handleForm('description', e.target.value)} />
              </Form.Group>
             
           </Form.Row>
        </Modal.Body>
        <Modal.Footer>
        {props.requestmethod === 'PUT' && <Button variant="dark" 
          onClick={()=>deleteUserExperience()}
          >Delete</Button>}
         
          <Button variant="primary" 
          onClick={()=>postUserExperience()}
          >Save</Button>
        </Modal.Footer>
      </Modal>
    )
  }

export default ModalAddNewExperience
