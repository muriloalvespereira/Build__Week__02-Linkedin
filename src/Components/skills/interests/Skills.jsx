import React from "react";
import "../../../Styles/Hasham.css";
import { Button } from "react-bootstrap";
import { FiEdit2 } from "react-icons/fi";

const Skills = () => {
  return (
    <>
      <div className="skills">
        <div className="skill_title">
          <h6 className="block-title">Skills & endorsements</h6>
          <div className="ml-auto add-skill">
            Add a new skill <FiEdit2 className="mb-2 ml-3 edit-logo" />
          </div>
        </div>
        <div>
          <Button className="btn btn-primary btn-skill px-3">
            Take skill quiz
          </Button>
        </div>

        <div className="skill_container">
          <div className="skill"></div>
          <div className="skill_info">
            <div className="skill_title">
              Web Design <p className="pt-3 ml-1 numb">· 1 </p>
            </div>
            <div className="skill_views">
              Endorsed by <strong>1 connection</strong>{" "}
            </div>
          </div>
        </div>
        <div className="skill_container">
          <div className="skill"></div>
          <div className="skill_info">
            <div className="skill_title">
              Web Development<p className="pt-3 ml-1 numb">· 1 </p>
            </div>
            <div className="skill_views">
              Endorsed by <strong>1 connection</strong>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="skill_container-last">
          <div className="skill_info">
            <div className="skill_title">
              Design <p className="pt-3 ml-1 numb">· 1 </p>
            </div>
            <div className="skill_views">
              Endorsed by <strong>1 connection</strong>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="show_more_container py-2">
        <span>Show more</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          data-supported-dps="16x16"
          fill="currentColor"
          class="mercado-match"
          width="16"
          height="16"
          focusable="false"
        >
          <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
        </svg>
      </div>
    </>
  );
};

export default Skills;
