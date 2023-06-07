import "./landing.scss";
import * as landingImg from "../assets/img/landign/landingImg";
import Header from "../Header/Header";
import * as muiComponents from "./landingMui";
import { Link } from "react-router-dom";
import useStore from "../store/store";
import { landingTexts } from "../assets/texts/landing";

function Landing() {
  const language = useStore((state) => state.language);
  return (
    <div
      className="parent_container"
      style={{ backgroundImage: `url(${landingImg.landingbg})` }}
    >
      <main>
        <Header />
        <section style={{ backgroundImage: `url(${landingImg.tree})` }}>
          <h2>{landingTexts[language].heading}</h2>
          <p>{landingTexts[language].description}</p>
          <Link to="signIn">
            <muiComponents.Button variant="outlined" className="header_button">
              {landingTexts[language].button}
            </muiComponents.Button>
          </Link>
        </section>
      </main>
    </div>
  );
}
export default Landing;
