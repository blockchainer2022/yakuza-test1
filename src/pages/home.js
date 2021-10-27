import React from "react";
// import Details from '../components/Details/Details'
import Footer from "../components/Footer/Footer";
import Landing from "../components/landing/Landing";
// import Mission from '../components/Mission/Mission'
import NavigationBar from "../components/navigation/NavigationBar";
import Story from "../components/Story/Story";
import Team from "../components/Team/Team";

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <Landing />
      <Story />
      {/* <Mission />
            <Details /> */}
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
