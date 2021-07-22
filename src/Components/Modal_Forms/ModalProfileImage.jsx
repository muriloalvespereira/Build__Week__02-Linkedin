import React from 'react'
import { Modal, Button, Form, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'

function ModalProfileImage(props) {
    const [userImage, setUserImage] = useState('')

    const replaceUserProfilePic = async (e) => {
        e.preventDefault()
        console.log(userImage)
        try {

            let response = await fetch('https://striveschool-api.herokuapp.com/api/profile/' + window.localStorage.getItem('_id') + '/picture', {
                method: 'POST',
                headers: {
                    "Authorization": "Bearer " + window.localStorage.getItem('user_Token'),
                },
                body: userImage

            })
            props.setChangeUserdata(!props.changeUserData)
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
                    Change Image
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="profile">
                            <Form.Label>Profile Image</Form.Label>
                            <Form.Control type="file" placeholder="Update your profile image" onChange={(e) => {
                                 let newUserImage = new FormData()
                                 newUserImage.append('profile', e.target.files[0])
                                 setUserImage(newUserImage)
                                console.log(userImage)
                            }} />
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary"
                    onClick={(e) => replaceUserProfilePic(e)}
                >Save</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalProfileImage
