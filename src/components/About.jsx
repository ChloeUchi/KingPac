import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutContent from "./AboutContent";
import Boards from "./Boards";
import Awards from "./Awards";
import AboutContent1 from "./AboutContent1";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="">
      <section id="about" className="h-screen">
        <AboutContent />
      </section>
	  <section id="about1" className="h-[280vh]">
        <AboutContent1 />
      </section>
      <section id="boards" className="h-screen">
        <Boards />
      </section>
      <section id="awards" className="h-screen">
        <Awards />
      </section>
    </div>
  );
};

export default About;
