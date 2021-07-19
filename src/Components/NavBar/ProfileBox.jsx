import { Button, Col, Image, ListGroup, Row } from "react-bootstrap"
import "../../Styles/Ingrid.css"

const ProfileBox = () => (
  <ListGroup>
    <ListGroup.Item>
      <Row className="image-col">
        <Image
          src="https://media-exp1.licdn.com/dms/image/C5603AQF1wt8TGTy4Kw/profile-displayphoto-shrink_800_800/0/1624142581606?e=1632355200&v=beta&t=oIF_dMWsAz9_AldcLe4ytXcUwPz8AMLKGIomK6Y8d2A"
          width="70px"
          roundedCircle
        />

        <Col>
          <span className="font-weight-bolder">Ingrid Oncken</span>
          <p>Web Development Student at Strive School</p>
        </Col>
      </Row>
      <div className="d-grid mt-2 font-weight-bolder">
        <Button id="btn-block" variant="outline-primary" block>
          View Profile
        </Button>
      </div>
    </ListGroup.Item>
    <ListGroup.Item>
      <span className="font-weight-bolder">Account</span>
      <Button variant="link">Settings & Privacy</Button>
      <Button variant="link">Help</Button>
      <Button variant="link">Language</Button>
    </ListGroup.Item>
    <ListGroup.Item>
      <span className="font-weight-bolder">Manage</span>
      <Button variant="link">Posts & Activity</Button>
      <Button variant="link">Job Posting Account</Button>
    </ListGroup.Item>
    <ListGroup.Item>
      <Button variant="link">Sign Out</Button>
    </ListGroup.Item>
  </ListGroup>
)
export default ProfileBox
