import { Row, Col } from "react-bootstrap";
import SectionProfile from "./SectionProfile";
import ExperienceDetails from "./ExperienceDetails";

const Experience = () => {
  return (
    <Row>
      <Col className="col-12 experience-area mt-4 px-0">
        <SectionProfile category={"Experience"} />
       <ExperienceDetails />
        <SectionProfile category={"Education"} />
       <ExperienceDetails />
      </Col>
    </Row>
  );
};

export default Experience;
