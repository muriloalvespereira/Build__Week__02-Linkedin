import React from "react";
import { Row, Col } from "react-bootstrap";
import "../Styles/Sara.css";
import { useState } from "react";

const About = () => {
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <div>
      <p className="extra-content">
        I like to be able to participate constructively in all stages of the
        process. Also, to provide useful feedback and to receive them as well.
        It's funny but people tend to seek my advice on a wide range of
        subjects, perhaps because often I hear things like How can you keep calm
        like this? (extremely stressful situation). Keep my mind clear will help
        me to UNDERSTAND the situation. I do think that feedbacks are important
        to be able not only to build a better project but also to be a better
        person. So I always do feedback with kindness and being positive. Have
        worked in teams since Uni taught that if you need to tackle a PROBLEM
        it's important to have a team that you can rely on. Being organized and
        knowing how to handle all the information is key as well. Because it
        will help to see the data TO PROPOSE SOLUTIONS.
      </p>
    </div>
  );
  const linkName = readMore ? (
    <span className="read-less">read less</span>
  ) : (
    <span className={readMore ? "read-more d-none" : "read-more d-block"}>
      ..read more
    </span>
  );
  return (
    <div className="about mt-3">
      <Row>
        <Col xs={12}>
          <h2>About</h2>
          <p>
            I'm passionate about user experience and web dev. After my first
            real-world projects, I felt the necessity to be able to code them.
            I'm the kind of person who likes to learn more and more.
            <a
              className="read-more-link d-inline-block"
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              <h2>{linkName}</h2>
            </a>
            {readMore && extraContent}
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default About;
