import { Container, Row, Col } from "react-bootstrap";
import "../Styles/Murilo.css";
import Dashboard from "../components-sara/Dashboard";
import RightProfileCard from "./SideCards/RightProfileCard";
import UserDisplay from "./UserDisplay";

const Profile = (props) => {
  return (
    <Container>
      {console.log(props.userData , 'props Profile comp')}
      <Row>
        <Col className="col-8">
          <UserDisplay userData={props.userData} />
          <Row>
            <Col className="col-12 mt-5 px-0">
              <Dashboard></Dashboard>
            </Col>
          </Row>
        </Col>
        <Col className="col-4">
          <RightProfileCard userData={props.userData}></RightProfileCard>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
