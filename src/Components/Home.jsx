import { Container, Row, Col } from "react-bootstrap"
import LeftProfile from "./LeftProfile"
import Post from './../components-sara/Post'
import Sidebar from "./RaiaComponents/Sidebar"

const Home = (props) => {
    return (

        <>
            <Container>
                <Row>
                    <div className="px-0">
                        <LeftProfile />
                    </div>
                    <Col className="col-6">
                        <Post></Post>
                    </Col>
                    <Col className="col-4"></Col>

                    {/* <Col>
                        <Sidebar />
                    </Col> */}
                </Row>


            </Container>


        </>

    )

}

export default Home