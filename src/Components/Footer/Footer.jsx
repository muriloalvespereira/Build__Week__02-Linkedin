import { Row, Col, Dropdown } from 'react-bootstrap';
import '../../Styles/Hasham.css'
import { RiSettings2Fill, RiQuestionFill } from 'react-icons/ri'

const Footer = () => {
    return (
        <div className='container footer '>
            <Row>
                <Col>
                    <img
                        src='./assets/img/linkedin_logo.jpg'
                        alt='logo'
                        style={{ width: '90px', height: '25px' }}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm={4} md={2}>
                    <div className='my-1'>
                        <a href='#'>About</a>
                    </div>
                    <div className='my-1'>
                        <a href='#'>Community Guidelines</a>
                    </div>
                    <div className='my-1'>
                        <a href='#'>Privacy & Terms</a>
                    </div>
                    <div className='my-1'>
                        <a href='#'>Sales Solution</a>
                    </div>
                    <div className='my-1'>
                        <a href='#'>Safety Center</a>
                    </div>

                </Col>
                <Col sm={4} md={2}>
                    <div className='my-1'>
                        <a href='#'>Accessibility</a>
                    </div>
                    <div className='my-1'>
                        <a href='#'>Careers</a>
                    </div>
                    <div className='my-1'>
                        <a href='#'>Ad Choices</a>
                    </div>
                    <div className='my-1'>
                        <a href='#'>Mobile</a>
                    </div>
                </Col>

                <Col sm={4} md={2}>
                    <div className='my-1'>
                        <a href='#'>Talent Solution</a>
                    </div>
                    <div className='my-1'>
                        <a href='#'>Marketing Solution</a>
                    </div>
                    <div className='my-1'>
                        <a href='#'>Advertising</a>
                    </div>
                    <div className='my-1'>
                        <a href='#'>Small Bussiness</a>
                    </div>
                </Col>
                <Col sm={4} md={3} className='footerIcon'>
                    <div >
                        <h6 className='d-flex' className='d-block' style={{ fontSize: '13px' }}>
                            <RiQuestionFill className='mr-3' style={{
                                width: '25px', height: '25px',
                            }} />
                            Questions?<p className="visit d-block ml-4 pl-3">Visit our Help Center</p></h6>

                    </div>
                    <div >
                        <h6 className='d-flex' className='d-block' style={{ fontSize: '13px' }}>
                            <RiSettings2Fill className='mr-3' style={{
                                width: '25px', height: '25px',
                            }} />
                            Manage your account and privacy
                            <p className="visit d-block ml-4 pl-3" style={{ fontSize: '13px' }}>Go to your Settings.</p>
                        </h6>
                    </div>
                </Col>
                <Col sm={4} md={2} className='last-col ml-2'>
                    <p>Select Language</p>
                    <Dropdown className='language mb-2' width='300px' height='20px'>
                        <Dropdown.Toggle variant='..' className='footerDropdown' width='100%'>
                            English(English)

                        </Dropdown.Toggle>

                        <Dropdown.Menu className='options'>
                            <Dropdown.Item href='#/action-1'>Italiano(Italian)</Dropdown.Item>
                            <Dropdown.Item href='#/action-2'>Deutsch(German)</Dropdown.Item>
                            <Dropdown.Item href='#/action-3'>
                                Nerderlands(Dutch)
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-4'>English(English)</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <p className='copyRight'> Linkedin Corporation &copy; 2021</p>
                </Col>
            </Row>
            <div></div>
        </div >

    );
};

export default Footer;
