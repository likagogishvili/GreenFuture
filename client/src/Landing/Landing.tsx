import "./landing.scss";
import * as landingImg from "../assets/img/landign/landingImg";
import Header from "../Header/Header";
import { Button } from "../Header/headerMui";
import { Link } from "react-router-dom";
import useStore from "../store/store";
import { landingTexts } from "../assets/texts/landing";
import AnimatedHeading from "./AnimatedHeading";

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
          <AnimatedHeading language={language} landingTexts={landingTexts} />

          <Link to="signIn">
            <Button variant="outlined" className="header_button">
              {landingTexts[language].button}
            </Button>
          </Link>
        </section>
      </main>
    </div>
  );
}
export default Landing;
