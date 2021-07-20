import { Col } from "react-bootstrap";

const SectionProfile = (props) => {
  return (
    <Col className="mt-4 ml-2 d-flex justify-content-between">
      <h4 className="h4-section">{props.category}</h4>
      <div className="btn-plus">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          data-supported-dps="24x24"
          fill="currentColor"
          class="mercado-match card-svg-exp"
          width="24"
          height="24"
          focusable="false"
        >
          <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
        </svg>
      </div>
    </Col>
  );
};

export default SectionProfile;
