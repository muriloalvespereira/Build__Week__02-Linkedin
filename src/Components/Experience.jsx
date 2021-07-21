import { Row, Col } from "react-bootstrap";
import SectionProfile from "./SectionProfile";
import ExperienceDetails from "./ExperienceDetails";
import { useState, useEffect } from "react";

const Experience = (props) => {
  const [userAllExperiences, setUserAllExperiences] = useState([])
  const [changeUserData, setchangeuserdata] = useState(false)

  useEffect(()=> getUserExperiences(),[])
// Needs to change the ID with the User ID from props
  useEffect(()=> getUserExperiences(),[changeUserData])
    
  
  
  
  
  const getUserExperiences = async () => {
            try {
                let response = await fetch('https://striveschool-api.herokuapp.com/api/profile/60dc5f06b358170015c22705/experiences', {
                    method: 'GET',
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWYwNmIzNTgxNzAwMTVjMjI3MDUiLCJpYXQiOjE2MjYyNzAyMjMsImV4cCI6MTYyNzQ3OTgyM30.0IcvG8-Zqf633mRWGCRlzG5yDVI6njZjZGZzJfuGulw",
                    },
                })             
                let dataRequested = await response.json()
                setUserAllExperiences(dataRequested)
            } catch (e) {
                return e
            }
        }
  return (
    <Row>
      <Col className="col-12 experience-area mt-4 px-0">
        <SectionProfile changeUserData={changeUserData} setchangeuserdata={setchangeuserdata} userSignUpToken='NeedsToPassUserSignupToken API only works this way' category={"Experience"} />
   
    {userAllExperiences.length > 0 ? userAllExperiences.map(userExperience=> <ExperienceDetails changeUserData={changeUserData} setchangeuserdata={setchangeuserdata} key={userExperience._id}  userExperience={userExperience} ></ExperienceDetails>) :'no Experience do display'}
       {/* <ExperienceDetails  />  To be deleted*/}
        <SectionProfile category={"Education"} />
        {/* Needs to create an object and pass as props to simulate the Education */}
       {/* <ExperienceDetails /> */}
      </Col>
    </Row>
  );
};

export default Experience;
