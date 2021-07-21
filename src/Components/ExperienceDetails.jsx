import { Col } from "react-bootstrap"
import currentJob from "../assets/eli.jpg";

const ExperienceDetails = (props) => {

    return(    
        <Col className="position-relative d-flex ml-2 pr-2">
                  <div>
                    <img src={currentJob} alt="" className="img-exp"></img>
                  </div>
                  <div className="pl-4 experience-border w-100">
                    <div className="company-details">
                      <h6>{props.userExperience.role}</h6>
                      <p className="company-title">{props.userExperience.company}</p>
                      <p className="company-duration"><span>{props.userExperience.startDate}</span> <span>- {props.userExperience.endDate}</span></p>
                      <p className="company-duration"><span>{props.userExperience.area}</span></p>
                    </div>
                    <div className="company-details pt-3 pb-3">
                        <p className="company-title">{props.userExperience.description}</p>
                        {/* <p className="company-title">+ Prospecting for new students.</p>
                        <p className="company-title">+ I manage the social media. (Developing and analyzing results and reports of marketing action)</p>
                        <p className="company-title">+ Monitoring the sales pipeline, Payment Default and KPI's.</p>
                        <p className="company-title">+ I doubled the number of students in the first 45 days of work</p>
                        <p className="company-title">+ Achived more than 160 new students in 1 year.</p> */}
                    </div>
                  </div>
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
                </Col>
    )
}

export default ExperienceDetails