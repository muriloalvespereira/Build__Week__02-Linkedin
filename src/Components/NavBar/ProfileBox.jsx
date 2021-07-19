import { Button, Col, Image, ListGroup, Row } from "react-bootstrap"
import "../../Styles/Ingrid.css"

const ProfileBox = () => (
  <Col lg={3}>
    <ListGroup>
      <ListGroup.Item>
        <Row className="image-col">
          <Col>
            <Image
              src="https://media-exp1.licdn.com/dms/image/C5603AQF1wt8TGTy4Kw/profile-displayphoto-shrink_800_800/0/1624142581606?e=1632355200&v=beta&t=oIF_dMWsAz9_AldcLe4ytXcUwPz8AMLKGIomK6Y8d2A"
              width="70px"
              roundedCircle
            />
          </Col>
          <Col>
            <span>Ingrid Oncken</span>
            <p>Web Development Student at Strive School</p>
          </Col>
        </Row>
        <div className="d-grid">
          <Button variant="outline-primary" block>
            Block level button
          </Button>
        </div>
      </ListGroup.Item>
      <ListGroup.Item className="d-flex flex-column justify-content-flex-start">
        <span>Account</span>
        <Button variant="link">Settings & Privacy</Button>
        <Button variant="link">Help</Button>
        <Button variant="link">Language</Button>
      </ListGroup.Item>
      <ListGroup.Item
        className="d-flex flex-column justify-content-flex-start
"
      >
        <span>Manage</span>
        <Button variant="link">Posts & Activity</Button>
        <Button variant="link">Job Posting Account</Button>
      </ListGroup.Item>
      <ListGroup.Item>
        <Button variant="link">Sign Out</Button>
      </ListGroup.Item>
    </ListGroup>
  </Col>
)
export default ProfileBox
