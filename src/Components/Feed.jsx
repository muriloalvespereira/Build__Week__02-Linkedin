import { Col } from "react-bootstrap";
import HeaderPost from "./HeaderPost";
import PostUser from "./PostUser";
import TextPost from "./TextPost";
import PostImg from "../assets/postfeed.jpg";
import Likes from "./Likes";
import Reactions from "./Reactions"

const Feed = () => {
  return (
    <>
      <Col className="feed-area">
        <HeaderPost />
        <PostUser />
        <TextPost />
      </Col>
      <Col className="px-0">
        <div
          className="media-feed w-100"
          style={{ backgroundImage: `url(${PostImg})` }}
        ></div>
      </Col>
      <Col className="feed-area-end">
        <Likes />
        <Reactions />
      </Col>
    </>
  );
};

export default Feed;
