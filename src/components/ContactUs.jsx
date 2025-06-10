import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Career from "./Career";
import PrivacyPolicy from "./PrivacyPolicy";
import Audit from "./Audit";

function ContactUs() {
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
    <div className="space-y-12 p-8">
      <section id="audit" className="h-screen">
        <Audit />
      </section>
      <section id="career" className="h-screen">
        <Career />
      </section>
      <section id="privacy-policy" className="h-screen">
        <PrivacyPolicy />
      </section>
    </div>
  );
}

export default ContactUs;
