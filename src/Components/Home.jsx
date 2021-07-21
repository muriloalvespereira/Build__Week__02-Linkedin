import { Container, Row, Col } from "react-bootstrap"
import LeftProfile from "./LeftProfile"
import Post from '../components-sara/Post'
import Sidebar from "./RaiaComponents/Sidebar"
import Feed from './Feed'
import SideHome from './SideHome'
import { useState } from "react"


const Home = (props) => {

    return (

        <>
            <Container>
                <Row>
                    <Col className="col-2 px-0">
                        <LeftProfile />
                    </Col>
                    <Col className="col-6 pr-0">
                        <Post></Post>
                        <Feed></Feed>
                    </Col>
                    <Col className="col-4">

                        <SideHome></SideHome>

                    </Col>

                    <Col>
                        <Sidebar />
                    </Col>

                </Row>


            </Container>


        </>

    )

}

export default Home