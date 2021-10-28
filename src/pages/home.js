import React from "react";
// import Details from '../components/Details/Details'
import Footer from "../components/Footer/Footer";
import Landing from "../components/landing/Landing2";
// import Mission from '../components/Mission/Mission'
import NavigationBar from "../components/navigation/NavigationBar";
import Story from "../components/Story/Story";
import Team from "../components/Team/Team";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
const Home = ({
  account,
  mint,
  totalSupply,
  displayPrice,
  loadWeb3,
  maxSupply,
}) => {
  return (
    <div>
      <NavigationBar />
      <Landing
        account={account}
        mint={mint}
        totalSupply={totalSupply}
        displayPrice={displayPrice}
        maxSupply={maxSupply}
        loadWeb3={loadWeb3}
      />
      <Story />
      {/* <Mission />
            <Details /> */}
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
