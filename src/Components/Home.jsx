import { Container, Row, Col } from "react-bootstrap"
import LeftProfile from "./LeftProfile"

const Home = () => {
    return (
        <Container>
            <Row>
                <div className="px-0">
                    <LeftProfile />
                </div>
                <Col className="col-6"></Col>
                <Col className="col-4"></Col>
            </Row>
        </Container>
    )

}

export default Home