import { Container, Row, Col } from "react-bootstrap"
import LeftProfile from "./LeftProfile"
import Post from '../components-sara/Post'
import Sidebar from "./RaiaComponents/Sidebar"
import Feed from './Feed'
import SideHome from './SideHome'

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
                        <Feed></Feed>
                    </Col>
                    <Col className="col-4">
                        <SideHome></SideHome>
                        
                    </Col>

                    {/* <Col>
                        <Sidebar />
                    </Col> */}
                </Row>


            </Container>


        </>

    )

}

export default Home