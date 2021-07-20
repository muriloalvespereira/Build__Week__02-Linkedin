import { Row, Col } from 'react-bootstrap';
import React from 'react';
import { RiQuestionFill } from 'react-icons/ri'
import PeopleAlsoViewed from './PeopleAlsoViewed'

const RightProfileCard = () => {
    return (
        <div className='ml-3 mt-5  ' width='100%' >
            <Col
                className='py-3'
                style={{
                    backgroundColor: 'white',
                    border: 'solid 1px lightgrey',
                    borderRadius: '10px',

                }}
            >
                <Row>
                    <Col lg={10}>
                        <a
                            href='#'
                            style={{
                                fontSize: '1em',
                                color: 'rgb(102,102,102)',
                                fontWeight: '600',
                            }}
                        >
                            Edit public profile & URL
                        </a>
                    </Col>
                    <Col lg={2}>
                        <RiQuestionFill className='mr-3' style={{
                            color: 'gray'
                        }} />
                    </Col>
                </Row>
                <hr />
                <Row style={{ backgroundColor: 'white' }}>
                    <Col lg={10}>
                        <a
                            href='#'
                            style={{
                                fontSize: '1em',
                                color: 'rgb(102,102,102)',
                                fontWeight: '600',

                            }}
                        >
                            Add profile in another language{' '}
                        </a>
                    </Col>
                    <Col lg={2}>
                        <RiQuestionFill className='mr-3' style={{
                            color: 'gray'
                        }} />
                    </Col>
                </Row>


            </Col>
            <Row >
                <PeopleAlsoViewed />
            </Row>

        </div >
    );
};

export default RightProfileCard;