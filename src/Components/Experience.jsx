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
    console.log('inside get all experiences')
            try {
                let response = await fetch('https://striveschool-api.herokuapp.com/api/profile/'+ window.localStorage.getItem('_id') + '/experiences', {
                    method: 'GET',
                    headers: {
                        "Authorization": "Bearer " + window.localStorage.getItem('user_Token') ,
                    },
                })   
                console.log('inside get all experiences AFTER FETCH', response)          
                let dataRequested = await response.json()
                setUserAllExperiences(dataRequested)
                console.log(dataRequested , '<<<<<<<<<<<<<<<<<<<<<ALL Experriences')
            } catch (e) {
              console.log(e)
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
