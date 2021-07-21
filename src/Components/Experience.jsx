import { Row, Col } from "react-bootstrap";
import SectionProfile from "./SectionProfile";
import ExperienceDetails from "./ExperienceDetails";
import { useState, useEffect } from "react";

const Experience = (props) => {
  const [userAllExperiences, setUserAllExperiences] = useState([])

  useEffect(()=> getUserExperiences(),[])
// Needs to change the ID with the User ID from props
    const getUserExperiences = async () => {
            try {
                let response = await fetch('https://striveschool-api.herokuapp.com/api/profile/60dc5f06b358170015c22705/experiences', {
                    method: 'GET',
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWYwNmIzNTgxNzAwMTVjMjI3MDUiLCJpYXQiOjE2MjYyNzAyMjMsImV4cCI6MTYyNzQ3OTgyM30.0IcvG8-Zqf633mRWGCRlzG5yDVI6njZjZGZzJfuGulw",
                    },
                })
                console.log(response)
                let dataRequested = await response.json()
                console.log(dataRequested)
                setUserAllExperiences(dataRequested)
            } catch (e) {
                return e
            }
        }
  return (
    <Row>
      <Col className="col-12 experience-area mt-4 px-0">
        {/* Add new experience section profile */}
        <SectionProfile category={"Experience"} />
    {/* Edit experience Details */}
       <ExperienceDetails />
        <SectionProfile category={"Education"} />
       <ExperienceDetails />
      </Col>
    </Row>
  );
};

export default Experience;
