import Footer from "./Footer";
import Itskills from "./Itskills";
import Softskills from "./Softskills";
import Title from "./Title";
import Work from "./Work";
import Education from "./Education";
import Projects from "./Projects";
import { motion, useScroll } from "framer-motion";
import "../App.css";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Profile() {
  const { scrollYProgress } = useScroll();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(delay);
  }, []);

  if (loading) {
    return (
      <div>
        {Array.from({ length: 15 }, (_, index) => (
          <div
            key={index}
            style={{
              marginTop: "30px",
              maxWidth: "70%",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            <Skeleton height={40} count={3} style={{ marginBottom: "5px" }} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="w-10/12 mx-auto">
        <Title title="Work Experience" />
        <Work />
        <Title title="IT Skills" />
        <Itskills />
        <Title title="Projects" />
        <Projects />
      </div>
      <Title title="Soft Skills" />
      <Softskills />
      <Title title="Education" />
      <Education />
      <Footer />
    </>
  );
}

export default Profile;
