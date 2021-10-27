import React from 'react'
import mainimg from '../../resources/Welcome_Degens.png';
import { Container, Row, Col } from 'react-bootstrap'
import './styles.css'
const Story = () => {
    return (
        <div id="Features">
            <Container className='storyContainer'>
                <Row>
                    <Col md='6' sm='12'>
                        <div className="storyTitle">
                        FEATURES
                        </div>
                        <img
                            alt=""
                            src={mainimg}
                            width="450"
                            height="450"
                            className="storyPic"
                        />{' '}
                    </Col>
                    <Col md='6' sm='12'>
                        <div className='storyText'>
                        Yakuza Street Gang is a collection of 10,000 programmatically generated ERC-721 NFTs on the Ethereum blockchain. Featuring more than 100 unique traits of varying rarity, there’s over a million possible combinations and a multitude of rare accessories to chase for.

                            <br />
                            <br />
                            EXCLUSIVE ACCESS: Owning a YSG NFT will give you access to exclusive channels in our Discord, airdrops, contests, and MORE.
                            <br />
                            <br />
                            3D METAVERSE: We’re working on building a metaverse known as “8-bit city”. A cyberpunk Neo-Tokyo inspired city that will make use of your YSG NFTs and a top secret future project.
                            <br />
                            <br />
                            NFT FIGHTING GAME: Your Yakuza Street Gang NFTs will be useable in an upcoming NFT fighting game!
                            <br />
                            <br />
                            YOU OWN THE RIGHTS: Holders are given full rights to their Yakuza member. You can sell its likeness or make derivatives of it, the possibilities are endless!

                        </div>
                       
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Story
