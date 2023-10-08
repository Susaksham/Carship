import React, { useRef, useEffect } from "react";
import "./Home.css";
import Navigation from "../Navigation/Navigation";
import HeroSection from "../HeroSection/HeroSection";
import Features from "../Features/Features";
import Help from "../Help/Help";
import AllServices from "../serviceUi/AllServices";
import AboutOfHome from "../AboutInHome/AboutOfHome";
import previousImage from "../../assets/png-transparent-food-delivery-courier-service-food-delivery-delivery-man-food-service-mode-of-transport-thumbnail-removebg-preview.png";
import bikeImage from "../../assets/Take Away-rafiki (2).svg";
import Contact from "../Contact/Contact";
import AskedQuestions from "../FAQ/AskedQuestions";
import Footer from "../Footer/Footer";
// document.documentElement.style.setProperty(
//   "--scrolY",
//   `${window.scrollY}`
// );
// document.documentElement.style.setProperty(
//   "--scrollHeight",
//   `${homeSectionRef.current.scrollHeight}`
// );
// document.documentElement.style.setProperty(
//   "--windowInnerHeight",
//   `${window.innerHeight}`
// );
// console.log("scrolling");

// console.log(homeSectionRef.current.scrollHeight);
// console.log(homeSectionRef.current.clientHeight, window.innerHeight);
// console.log(window.scrollY);
const Home = () => {
  const cursorRef = useRef(null);
  const homeSectionRef = useRef(null);
  const answerPreviousValue = useRef(0);
  const bike = useRef(null);
  const throttling = useRef(true);

  const scrollHandler = (e) => {
    let cs = getComputedStyle(document.documentElement);
    let bikeWidth = cs.getPropertyValue("--bikeWidth").split("vw")[0];

    // console.log("bikeWidth ", bikeWidth);
    let innerHeight = window.innerHeight;
    let scrollHeight = homeSectionRef.current.scrollHeight;
    // console.log("scrollHeight", document.getElementById("root").scrollHeight);
    let scrollY = window.scrollY;
    let ans =
      (Math.ceil(scrollY) / (scrollHeight - innerHeight)) * (100 - +bikeWidth);
    if (ans > answerPreviousValue.current) {
      if (throttling.current) {
        throttling.current = false;
        setTimeout(() => {
          // console.log(ans - answerPreviousValue.current);
          bike.current.classList.remove("moveBack");
          bike.current.classList.add("bike");
          throttling.current = true;
        }, 300);
      }
    } else if (ans < answerPreviousValue.current) {
      if (throttling.current) {
        throttling.current = false;
        setTimeout(() => {
          // console.log(ans - answerPreviousValue.current);
          bike.current.classList.add("moveBack");
          bike.current.classList.remove("bike");
          throttling.current = true;
        }, 300);
      }
    }

    document.documentElement.style.setProperty("--bikePos", `${ans}vw`);
    answerPreviousValue.current = ans;
  };
  const mouseMoveHandler = (e) => {
    cursorRef.current.style.left = e.clientX + "px";
    cursorRef.current.style.top = e.clientY + "px";
  };
  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    window.addEventListener("scroll", scrollHandler);
    return () => {
      console.log("removed eventListeners");
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <section ref={homeSectionRef} className="homeSection">
      <div ref={cursorRef} className="cursor" id="cursor"></div>
      <div className="flex flex-col w-full min-h-screen">
        <Navigation></Navigation>
        <HeroSection></HeroSection>
      </div>
      <AboutOfHome></AboutOfHome>
      <Features></Features>
      <Help></Help>
      <AllServices></AllServices>
      <Contact></Contact>
      <AskedQuestions></AskedQuestions>
      <Footer></Footer>
      <div>
        <img ref={bike} className="bike" src={bikeImage}></img>
      </div>
    </section>
  );
};

export default Home;
