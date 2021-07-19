import { Button, Col, Image, ListGroup, Row } from "react-bootstrap"
import "../../Styles/Ingrid.css"

const ProfileBox = () => (
  <ListGroup id="profile-Box" className="list-groupMod">
    <ListGroup.Item className="ListGroupItem">
      <div className="image-colMod d-flex">
        <Image
          src="https://media-exp1.licdn.com/dms/image/C5603AQF1wt8TGTy4Kw/profile-displayphoto-shrink_800_800/0/1624142581606?e=1632355200&v=beta&t=oIF_dMWsAz9_AldcLe4ytXcUwPz8AMLKGIomK6Y8d2A"
          width="48px"
          roundedCircle
          className="align-self-start"
        />

        <Col>
          <span className="font-weight-bolder">Ingrid Oncken</span>
          <p className="m-0">Web Development Student at Strive School</p>
        </Col>
      </div>
      <div className="d-grid mt-2 font-weight-bolder">
        <Button id="btn-blockMod" variant="outline-primary" block>
          View Profile
        </Button>
      </div>
    </ListGroup.Item>
    <ListGroup.Item>
      <span className="font-weight-bolder">Account</span>
      <Button variant="link" className="btn-linkMod">Settings & Privacy</Button>
      <Button variant="link" className="btn-linkMod">Help</Button>
      <Button variant="link" className="btn-linkMod">Language</Button>
    </ListGroup.Item>
    <ListGroup.Item>
      <span className="font-weight-bolder">Manage</span>
      <Button variant="link" className="btn-linkMod">Posts & Activity</Button>
      <Button variant="link" className="btn-linkMod">Job Posting Account</Button>
    </ListGroup.Item>
    <ListGroup.Item>
      <Button variant="link" className="btn-linkMod">Sign Out</Button>
    </ListGroup.Item>
  </ListGroup>
)
export default ProfileBox
