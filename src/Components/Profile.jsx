import { Container, Row, Col } from "react-bootstrap";
import "../Styles/Murilo.css";
import Dashboard from "../components-sara/Dashboard";
import RightProfileCard from "./SideCards/RightProfileCard";
import UserDisplay from "./UserDisplay";

const Profile = () => {
  return (
    <Container>
      <Row>
        <Col className="col-8">
          <UserDisplay />
          <Row>
            <Col className="col-12 mt-5 px-0">
              <Dashboard></Dashboard>
            </Col>
          </Row>
        </Col>

        <Col className="col-4">
          <RightProfileCard></RightProfileCard>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
