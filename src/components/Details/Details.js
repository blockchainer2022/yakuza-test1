import React from 'react'
import mainimg from '../../resources/2.png';
import { Container, Row, Col } from 'react-bootstrap'
import './styles.css'
const Details = () => {
    return (
        <div id="Details">
            <Container className='DetailsContainer'>
                <Row>
                    <Col md='6' sm='12'>
                        <div className="DetailsTitle">
                            Our Details
                        </div>
                        <img
                            alt=""
                            src={mainimg}
                            width="500"
                            height="500"
                            className="DetailsPic"
                        />{' '}
                    </Col>
                    <Col md='6' sm='12'>
                        <div className='DetailsText'>
                        Sunken Squids is a collection of 10,000 programmatically, randomly generated ERC-721 NFTs stored on the Ethereum blockchain, made with over 100 unique traits of varying rarity. Each Sunken Squid is non-sequentially minted and provably unique.

                            <br />
                            <br />
                            DEFLATIONARY: Royalties from sales on the secondary market will be used to buy the Squid floor and burn them. The Squids that are burnt will be removed from circulation, decreasing the total circulating supply!
                            <br />
                            <br />
                            EXCLUSIVE ACCESS: Owning a Sunken Squid grants you access to dive into the kingdom of Atlantis, where no human has dived before, and will grant you exclusive benefits such as giveaways, contests, merchandise, access to the Atlantis Casino, and more!
                            <br />
                            <br />
                            YOU OWN THE SQUID: Holders are given full rights to their Sunken Squid. You can sell its likeness and make derivatives of it. You can monetise your Sunken Squid as you see fit!
                            <br />
                            <br />
                            PRICING: The cost per squid is .05 ETH + gas fees and you can mint up to 20 squids in each transaction.



                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Details
