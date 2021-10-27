import React from 'react'
import mainimg from '../../resources/2.png';
import { Container, Row, Col } from 'react-bootstrap'
import './styles.css'
const Mission = () => {
    return (
        <div id="mission">
            <Container className='missionContainer'>
                <Row>
                    
                    <Col md='6' sm='12'>
                    <div className="missionTitle">
                            Our Mission
                        </div>
                        <div className='missionText'>
                        Humans are ruining the ocean through pollution impacting all ocean life, not just the Sunken Squids.

The Sunken Squid Project pledges to donate 40Ξ to ocean cleanup charities which will be voted on by our community of Squids.

                         

                        </div>
                        {/* <div className='missionText2'>
                            <i>
                                “We've done our best to repurpose it and use it for ourselves... but we have had enough. It is our time to rise and take back what is ours."

                                Which side of himission will you be on?                            </i>
                        </div> */}
                    </Col>
                    <Col md='6' sm='12'>
                        
                        <img
                            alt=""
                            src={mainimg}
                            width="450"
                            height="450"
                            className="missionPic"
                        />{' '}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Mission
