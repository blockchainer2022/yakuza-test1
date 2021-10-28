import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import first from "../../resources/1.png";
import second from "../../resources/2.png";
import third from "../../resources/3.png";
import fourth from "../../resources/4.png";
import fifth from "../../resources/5.png";
import sixth from "../../resources/6.png";
import seventh from "../../resources/7.png";
import eighth from "../../resources/8.png";
import ninth from "../../resources/9.png";
import tenth from "../../resources/10.png";
import eleventh from "../../resources/11.png";
import "./styles.css";

const images = [
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eighth,
  ninth,
  tenth,
  eleventh,
];

const Index = ({
  account,
  mint,
  totalSupply,
  displayPrice,
  loadWeb3,
  maxSupply,
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    function switchImage() {
      if (currentImage < images.length - 1) {
        setCurrentImage((prev) => prev + 1);
      } else {
        setCurrentImage(0);
      }
      return currentImage;
    }
    const intervalId = setInterval(switchImage, 1000);
    return () => clearInterval(intervalId);
  }, [currentImage]);

  const mintHandler = () => {
    if (account) {
      mint(1);
    }
    if (!account) {
      loadWeb3();
    }
  };
  const leftNfts = maxSupply - totalSupply;
  return (
    <div id="home" className="landingBack">
      <Container className="heroContainer">
        <Row>
          <Col>
            <div className="heroTitle">
              <h1>Yakuza Street Gang </h1>
            </div>
            <div className="heroText">
              Japan is home to one of the most notorious street gangs worldwide,
              The Yakuza. We’ve created 10,000 randomly generated pixel art NFTs
              that are ready for the Metaverse.
              <br />
              <br />
              Mint your Yakuza member today.
            </div>
            <div>
              <Button className="mintButton" onClick={mintHandler}>
                {account ? "Mint Your Yakuza" : "Connect Wallet"}
              </Button>
              <div className="proText">
                {leftNfts > 0 ? leftNfts : 0} Yakuza Members left: ;
              </div>
              <ProgressBar
                className="progressBar"
                now={(totalSupply / maxSupply) * 100}
              />
              <div className="listText">
                * Price: {displayPrice} ETH + gas fees
              </div>
            </div>
          </Col>
          <Col>
            <img
              alt=""
              src={images[currentImage]}
              width="600"
              height="600"
              className="heroPic"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;

// class Landing extends React.Component {
//   constructor(props) {
//     super(props);
//     this.switchImage = this.switchImage.bind(this);
//     this.state = {
//       currentImage: 0,
//       images: [
//         first,
//         second,
//         third,
//         fourth,
//         fifth,
//         sixth,
//         seventh,
//         eighth,
//         ninth,
//         tenth,
//         eleventh,
//       ],
//     };
//   }

//   switchImage() {
//     if (this.state.currentImage < this.state.images.length - 1) {
//       this.setState({
//         currentImage: this.state.currentImage + 1,
//       });
//     } else {
//       this.setState({
//         currentImage: 0,
//       });
//     }
//     return this.currentImage;
//   }

//   componentDidMount() {
//     setInterval(this.switchImage, 1000);
//   }
//   render() {
//     return (
//       <div id="home" className="landingBack">
//         <Container className="heroContainer">
//           <Row>
//             <Col>
//               <div className="heroTitle">
//                 <h1>Yakuza Street Gang </h1>
//               </div>
//               <div className="heroText">
//                 Japan is home to one of the most notorious street gangs
//                 worldwide, The Yakuza. We’ve created 10,000 randomly generated
//                 pixel art NFTs that are ready for the Metaverse.
//                 <br />
//                 <br />
//                 Mint your Yakuza member today.
//               </div>
//               <div>
//                 <Button className="mintButton">Connect to Metamask</Button>
//                 <div className="proText">5000 Yakuza Members left</div>
//                 <ProgressBar className="progressBar" now={45} />
//                 <div className="listText">* Price: .039 ETH + gas fees</div>
//               </div>
//             </Col>
//             <Col>
//               <img
//                 alt=""
//                 src={this.state.images[this.state.currentImage]}
//                 width="600"
//                 height="600"
//                 className="heroPic"
//               />
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     );
//   }
// }

// export default Landing;
