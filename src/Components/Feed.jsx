import { Col } from "react-bootstrap";
const Feed = () => {
  return (
    <Col className="feed-area">
      <div className="d-flex justify-content-between py-2 like-section align-items-center">
        <div className="who-like">
          Ingrid Oncken <span className="span-like">commented on this</span>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            className="mercado-match svg-dots"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
          </svg>
        </div>
      </div>
      <div className="d-flex">
        <div>test</div>
        <div className="ml-3">
          <p>
            <h6></h6>
            <span></span>
          </p>
          <p></p>
          <p></p>
        </div>
      </div>
      <div> {/* post text */}</div>
      <div> {/* image*/}</div>
      <div> {/* likes*/}</div>
      <div> {/* Carousel */}</div>
      <div> {/* Like, Comments, Share*/}</div>
      <div> {/* Post area*/}</div>
      <div> {/* sort*/}</div>
      <div> {/* Comment area*/}</div>
      <div> {/* Like Comments and reply*/}</div>
    </Col>
  );
};

export default Feed;
