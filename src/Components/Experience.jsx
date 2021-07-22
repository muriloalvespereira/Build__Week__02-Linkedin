import { Row, Col } from "react-bootstrap";
import SectionProfile from "./SectionProfile";
import ExperienceDetails from "./ExperienceDetails";
import { useState, useEffect } from "react";
import EducationSection from "./RaiaComponents/EducationSection";

const Experience = (props) => {
  const [userAllExperiences, setUserAllExperiences] = useState([])
  const [changeUserData, setchangeuserdata] = useState(false)
  const [changeExpImg, setchangeExpImg] = useState(true)

  useEffect(() => getUserExperiences(), [])
  useEffect(() => getUserExperiences(), [changeUserData, changeExpImg])

  const getUserExperiences = async () => {
    console.log('inside get all experiences')
    try {
      let response = await fetch('https://striveschool-api.herokuapp.com/api/profile/' + window.localStorage.getItem('_id') + '/experiences', {
        method: 'GET',
        headers: {
          "Authorization": "Bearer " + window.localStorage.getItem('user_Token'),
        },
      })

      let dataRequested = await response.json()
      setUserAllExperiences(dataRequested)
      console.log(dataRequested, '<<<<<<<<<<<<<<<Inside request Experience ALL experiences')

    } catch (e) {
      console.log(e)
      return e
    }
  }
  return (
    <Row>
      <Col className="col-12 experience-area mt-4 px-0">
        <SectionProfile
          changeExpImg={changeExpImg}
          setchangeExpImg={setchangeExpImg}
          changeUserData={changeUserData}
          setchangeuserdata={setchangeuserdata}
          category={"Experience"} />

        {userAllExperiences.length > 0 ? userAllExperiences.map(userExperience =>
          <ExperienceDetails
            changeExpImg={changeExpImg}
            setchangeExpImg={setchangeExpImg}
            changeUserData={changeUserData}
            setchangeuserdata={setchangeuserdata} key={userExperience._id}
            userExperience={userExperience} ></ExperienceDetails>) : <p className="little-padding">Let's add your first experience</p>}
        {/* <ExperienceDetails  />  To be deleted*/}
        <SectionProfile category={"Education"} />

        <EducationSection />
        {/* Needs to create an object and pass as props to simulate the Education */}
        {/* <ExperienceDetails /> */}
      </Col>
    </Row>
  );
};

export default Experience;
