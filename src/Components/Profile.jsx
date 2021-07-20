import { Container, Row, Col, Button } from "react-bootstrap";
import "../Styles/Murilo.css";
import imgBk from "../assets/bklinkedin.jpg";
import avatar from "../assets/muriloavatar.png";
import currentJob from "../assets/eli.jpg";
import education from "../assets/dbs.jpg";
import CustomCarousel from "./CustomCarousel";
import Dashboard from "../components-sara/Dashboard";
import RightProfileCard from './SideCards/RightProfileCard'
import Skills from "./skills/interests/Skills"
import Interests from './skills/interests/Interests'

const Profile = () => {
  return (
    <Container>
      <Row>
        <Col className="col-8">
          <Row>
            <Col className="col-12 profile-area mt-5 px-0">
              <Col
                className="bg-profile "
                style={{ backgroundImage: `url(${imgBk})` }}
              >
                <div className="btn-edit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    className="mercado-match"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M14.13 1.86a3 3 0 00-4.17 0l-7 7L1 15l6.19-2 6.94-7a3 3 0 000-4.16zm-8.36 9.71l-1.35-1.34L9.64 5 11 6.35z"></path>
                  </svg>
                </div>
                <div className="profile-pic">
                  <div
                    className="bg-photo"
                    style={{ backgroundImage: `url(${avatar})` }}
                  ></div>
                </div>
              </Col>
              <Col className="position-relative">
                <div className="edit-details">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match edit-svg"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                  </svg>
                </div>
                <div className="details-profile d-flex">
                  <Col className="col-8">
                    <h4 className="mb-0">Murilo Alves</h4>
                    <p className="mb-0">
                      MSc Digital Marketing/Sales Growth/Polyglot
                    </p>
                    <p className="text-muted details-region">
                      Ireland - <span className="span-details">Contact info</span>
                    </p>
                    <p className="details-region">
                      <span className="span-details">500+ connections</span>
                    </p>
                  </Col>
                  <Col className="col-4 qualifications">
                    <p className="mb-0">
                      <img src={currentJob} alt=""></img>
                      <span className="ml-2">ELI Dublin</span>
                    </p>
                    <p>
                      <img src={education} alt=""></img>
                      <span className="ml-2">Dublin Business School</span>
                    </p>
                  </Col>
                </div>
                <div className="row-btn">
                  <Button className="btn-details" variant="primary">
                    Open to
                  </Button>
                  <Button className="btn-details-color ml-2" variant="primary">
                    Add section
                  </Button>
                  <Button className="btn-details-color ml-2" variant="primary">
                    More
                  </Button>
                </div>
                <CustomCarousel />
              </Col>
            </Col>
          </Row>
          <Row>
            <Col className="col-12 mt-5 px-0">
              <Dashboard>

              </Dashboard>
              <Skills></Skills>
              <Interests></Interests>
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
