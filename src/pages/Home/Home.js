import classes from "./Home.module.css";
import Hero from "./Sections/Hero/Hero";
import LinksBanner from "./Sections/LinksBanner/LinksBanner";
import WhoAreWe from "./Sections/WhoAreWe/WhoAreWe";
import PublicLaunch from "./Sections/PublicLaunch/PublicLaunch";
import CryptoBanner from "./Sections/CryptoBanner/CryptoBanner";
import Roadmap from "./Sections/Roadmap/Roadmap";
import Team from "./Sections/Team/Team";
import Faq from "./Sections/Faq/Faq";
const Home = () => {
  return (
    <div>
      <div id="Home">
        <Hero />
      </div>
      <div>
        <LinksBanner />
      </div>
      <div id="We">
        <WhoAreWe />
      </div>
      <div id="Launch">
        <PublicLaunch />
      </div>
      <div>
        <CryptoBanner />
      </div>
      <div id="Roadmap">
        <Roadmap />
      </div>
      <div id="Faq">
        <Faq />
      </div>
      <div id="Team">
        <Team />
      </div>
    </div>
  );
};
export default Home;
