import React from 'react'
import {Col, Container, Row} from 'react-bootstrap';

const HomePage = () => {
  return (
    <div>
        <Container>
            <Row className='mt-3'>
                <Col xs={12}>
                    <div className='text-center'>
                        <h1 className='t-title t-primary'>WorkIn</h1>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default HomePage