import { Col } from "react-bootstrap";
import { format } from "date-fns";
import React from "react";
import currentJob from "../assets/eli.jpg";
import ModalAddNewExperience from "./Modal_Forms/ModalAddNewExperience";

const ExperienceDetails = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Col className="position-relative d-flex ml-2 pr-2">
      <div>
        <img src={currentJob} alt="" className="img-exp"></img>
      </div>
      <div className="pl-4 experience-border w-100">
        <div className="company-details">
          <h6>{props.userExperience.role}</h6>
          <p className="company-title">{props.userExperience.company}</p>
          <p className="company-duration">
            <span>
              {format(new Date(props.userExperience.startDate), "dd-mm-yyyy")}
            </span>{" "}
            <span>
              - {format(new Date(props.userExperience.endDate), "dd-mm-yyyy")}
            </span>
          </p>
          <p className="company-duration">
            <span>{props.userExperience.area}</span>
          </p>
        </div>
        <div className="d-flex company-details pt-3 pb-3">
          <p className="company-title set-size-company-title">{props.userExperience.description}
            I'm passionate about user experience and web dev. After my first real-world projects, I felt the necessity to be able to code them. I'm the kind of person who likes to learn more and more.I like to be able to participate constructively in all
            I like to be able to participate constructively in all stages of the process. Also, to provide useful feedback and to receive them as well. It's funny but people tend to seek my advice on a wide range of subjects, perhaps because often I hear things like How can you keep calm like this? (extremely stressful situation). Keep my mind clear will help me to UNDERSTAND the situation. I do think that feedbacks are important to be able not only to build a better project but also to be a better person. So I always do feedback with kindness and being positive. Have worked in teams since Uni taught that if you need to tackle a PROBLEM it's important to have a team that you can rely on. Being organized and knowing how to handle all the information is key as well. Because it will help to see the data TO PROPOSE SOLUTIONS.
          </p>

        </div>
        {props.userExperience.image && <div className="Needs to fix Styling set-size">
          <img src={props.userExperience.image} alt="" />
        </div>}
      </div>
      <ModalAddNewExperience
        show={modalShow}
        endpoint={'https://striveschool-api.herokuapp.com/api/profile/' + window.localStorage.getItem('_id') + '/experiences/' + props.userExperience._id}
        requestmethod='PUT'
        changeExpImg={props.changeExpImg}
        setchangeExpImg={props.setchangeExpImg}
        userExperience={props.userExperience}
        changeUserData={props.changeUserData}
        setchangeuserdata={props.setchangeuserdata}
        onHide={() => setModalShow(false)}
      ></ModalAddNewExperience>

      <div className="edit-details" onClick={() => setModalShow(true)}>
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
    </Col>
  );
};

export default ExperienceDetails;
