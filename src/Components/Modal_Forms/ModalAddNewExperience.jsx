import React from 'react'
import { Modal, Button, Form, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { format } from 'date-fns'


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
  const [userImage, setUserImage] = useState('')


  useEffect(() => {
    if (props.userExperience)
      setFormData(
        {
          role: props.userExperience.role,
          company: props.userExperience.company,
          startDate: format(new Date(props.userExperience.startDate), 'yyyy-MM-dd'),
          endDate: format(new Date(props.userExperience.endDate), 'yyyy-MM-dd'),
          description: props.userExperience.description,
          area: props.userExperience.area

        }
      )
  }, [])

  const handleForm = (key, value) => {
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
          "Authorization": "Bearer " + window.localStorage.getItem('user_Token'),
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      let newExperienceSent = await response.json()
      props.setchangeuserdata(!props.changeUserData)
      addExperienceImage(newExperienceSent._id)

      props.onHide()
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
          "Authorization": "Bearer " + window.localStorage.getItem('user_Token')
        },
      })
      props.setchangeuserdata(!props.changeUserData)
      props.onHide()
    } catch (e) {
      console.log(e)
      return e
    }
  }

  const addExperienceImage = async (expID) => {

    try {
      let response = await fetch('https://striveschool-api.herokuapp.com/api/profile/' + window.localStorage.getItem('_id') + '/experiences/' + expID + '/picture', {
        method: 'POST',
        headers: {
          "Authorization": "Bearer " + window.localStorage.getItem('user_Token'),
        },
        body: userImage

      })
      props.setchangeuserdata(!props.changeUserData)
      props.onHide()
    } catch (error) {
      console.log(error)
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
          <p className="exp-title">Add experience</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>

          <div className="network">
            <div className="one mb-3">
              <p className="my-0">Notify network</p>
              <span className="make-it-gray">If enabled, your network may be informed of job changes, education changes, and work anniversaries. It may take up to 2 hours to share your job changes with your network.</span>
              <span className="make-it-blue"> Learn how these are shared and when</span>
            </div>

            <div className="radio">
              <label class="switch-wrap">
                <input type="checkbox" />
                <div class="switch"></div>
              </label>
            </div>
          </div>

          <div className="split">
            <div className="first-section">
              <Form.Group controlId="role">
                <Form.Label>Title*</Form.Label>
                <Form.Control type="text" className="title-role" placeholder={endpoint === 'POST' ? "Enter propsrole" : formData.role} onChange={(e) => handleForm('role', e.target.value)} />
              </Form.Group>
            </div>
            <div className="first-section">
              <Form.Group controlId="company">
                <Form.Label>Company name*</Form.Label>
                <Form.Control type="text" placeholder={endpoint === 'POST' ? "Enter propsCompany" : formData.company} onChange={(e) => handleForm('company', e.target.value)} />
              </Form.Group>
            </div>
            <div className="first-section">
              <Form.Group controlId="area">
                <Form.Label>Location (city,country)</Form.Label>
                <Form.Control type="text" placeholder={endpoint === 'POST' ? "propsendare" : formData.area} onChange={(e) => handleForm('area', e.target.value)} />
              </Form.Group>



            </div>
            <div className="check-check">

              <label class="b-contain">
                <input type="checkbox" className="custom-checkbox" />
                <span>I am currently working on this role</span>
              </label>
            </div>

          </div>


          <Form.Row className="dateInputs">
            <Form.Group as={Col} controlId="startDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="date" value={endpoint === 'POST' ? "" : formData.startDate} onChange={(e) => handleForm('startDate', format(new Date(e.target.value), 'yyyy-MM-dd'))} />
            </Form.Group>
            <Form.Group as={Col} controlId="endDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control type="date" value={endpoint === 'POST' ? "" : formData.endDate} onChange={(e) => handleForm('endDate', format(new Date(e.target.value), 'yyyy-MM-dd'))} />
            </Form.Group>

          </Form.Row>
        </Form>



        <div className="second-section">

          <Form.Group as={Col}>
            <Form.Label>Headline</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Industry*</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group as={Col} controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" as="textarea" rows={5} placeholder={endpoint === 'POST' ? "addDescription" : formData.description} onChange={(e) => handleForm('description', e.target.value)} />
          </Form.Group>
          <Form>
            <Form.Group>
              <Form.File id="exampleFormControlFile1" label="Example file input"
                onChange={(e) => {
                  let newUserImage = new FormData()
                  newUserImage.append('experience', e.target.files[0])
                  setUserImage(newUserImage)
                }}

              />
            </Form.Group>
          </Form>
        </div>

      </Modal.Body>
      <Modal.Footer>
        {props.requestmethod === 'PUT' && <Button variant="dark"
          onClick={() => deleteUserExperience()}
        >Delete</Button>}

        <Button variant="primary"
          onClick={() => postUserExperience()}
        >Save</Button>
      </Modal.Footer>
    </Modal >
  )
}

export default ModalAddNewExperience
