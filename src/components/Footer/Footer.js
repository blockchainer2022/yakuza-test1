import React from "react";
import { Button } from "react-bootstrap";

import "./styles.css";

const Footer = () => {
  return (
    <div className="footer">
      Stay Based, Mint Today!
      <div>
        <Button className="mintButton footerButton">Mint Your Yakuza</Button>
      </div>
    </div>
  );
};

export default Footer;
