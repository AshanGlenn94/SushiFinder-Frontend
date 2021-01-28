import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";
import Home from "../../Home";
import Checkout from "../../Checkout";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  // const goToHome = (e) => {
  //   <Router>
  //     <Switch>
  //       <Route path='/'></Route>
  //     </Switch>
  //   </Router>;
  // };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg
          id="videoBG"
          autoPlay
          loop
          muted
          src={Video}
          type="video/mp4"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Sushi Finder</HeroH1>
        <HeroP>Made for sushi lovers.</HeroP>
        <HeroBtnWrapper>
          <Route path="/">
            <Button
              // to='/'
              onClick={() => Checkout.push("../../Checkout")}
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </Route>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

{
  /* <Router>
  <div className='App'>
    <Switch>
      <Route path='/landingPage'>
        <LandingPage />
      </Route>

      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/checkout'>
        <Header />
        <Checkout />
      </Route>
      <Route path='/'>
        <Header />
        <Home />
      </Route>
    </Switch>
  </div>
</Router>; */
}
