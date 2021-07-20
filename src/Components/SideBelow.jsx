import { Col } from "react-bootstrap"
import "../Styles/Murilo.css";
const SideBellow = () => {
    return (
        <div className="side-profile mt-2">
        <div
          className="bg-profile-side d-flex justify-content-center"
        >
        
        </div>

        <Col className="pt-3">
          <p className="mb-0 font-color">Murilo Alves</p>
          <p className="mb-0 text-center about-side">
            MSc Digital Marketing/Sales Growth/Polyglot
          </p>
          <p className="text-muted details-region">
            <span className="span-details"></span>
          </p>
          <p className="details-region">
            <span className="span-details"></span>
          </p>
        </Col>
        <Col className="side-end">
          <p className="mb-0 about-side-last align-items-center d-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              width="16"
              height="16"
              focusable="false"
              className="mr-1"
            >
              <path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1z"></path>
            </svg>
            <span className="font-color ml-1">My items</span>
          </p>
        </Col>
      </div>
    )

}

export default SideBellow