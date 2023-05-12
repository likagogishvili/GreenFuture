import "./landing.scss";
import * as landingImg from "../assets/landign/landingImg";
import Header from "../Header/Header";
import * as muiComponents from "./landingMui";

function Landing() {
  return (
    <div
      className="parent_container"
      style={{ backgroundImage: `url(${landingImg.landingbg})` }}
    >
      <main>
        <Header />
        <section style={{ backgroundImage: `url(${landingImg.tree})` }}>
          <h2>Cleaner planet</h2>
          <p>
            Welcome to Green Future, a community-driven initiative to clean up
            polluted areas. We offer a free and easy platform for people to
            identify polluted areas on the map, and other volunteers can join in
            to clean up those areas. Our goal is to make our environment cleaner
            and healthier for everyone. Join us in our mission to create a
            cleaner and healthier environment for all living beings. Let's work
            towards a Green Future!
          </p>
          <muiComponents.Button
            variant="outlined"
            className="header_button"
          >
            join us
          </muiComponents.Button>
        </section>
      </main>
    </div>
  );
}
export default Landing;
