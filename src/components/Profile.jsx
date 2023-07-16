import Nav from "./Nav";
import Footer from "./Footer";
import Itskills from "./Itskills";
import Softskills from "./Softskills";
import Title from "./Title";
import Work from "./Work";
import Education from "./Education";
import Projects from "./Projects";

function Profile() {
  return (
    <>
      <Nav />
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
