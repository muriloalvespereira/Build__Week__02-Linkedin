import { Container, Row, Col } from "react-bootstrap"
import LeftProfile from "./LeftProfile"
import Post from '../components-sara/Post'
import Sidebar from "./RaiaComponents/Sidebar"
import Feed from './Feed'
import SideHome from './SideHome'
import { useState } from "react"
import Spinner from "./RaiaComponents/Spinners"
import TransitionPage from "./RaiaComponents/TransitionPage"


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
                        <Spinner />
                    </Col>

                </Row>
            </Container>
            {/* <TransitionPage /> */}

        </>

    )

}

export default Home