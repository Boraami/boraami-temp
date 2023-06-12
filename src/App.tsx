import boraamiLogo from "./assets/boraami-primary-horizontal-logo.svg";
import "./App.css";
import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import TiktokIcon from "./assets/TiktokIcon";
import ReactGA from "react-ga4";

interface LinkProps {
  link: string;
  icon: JSX.Element;
  linkType: string;
}

const SocialLink = ({ link, icon, linkType }: LinkProps) => {
  const handleSocialLinkClick = () => {
    ReactGA.event({
      category: linkType,
      action: "click",
    });
  };
  return (
    <a onClick={handleSocialLinkClick} target="_blank" className="social-icon" href={link}>
      {icon}
    </a>
  );
};

const App = () => {
  ReactGA.initialize(import.meta.env.VITE_GA_ID);
  ReactGA.send({ hitType: "pageview", page: "/" });
  return (
    <div className="App">
      <header>
        <h1>
          <img src={boraamiLogo} className="logo" alt="Boraami Logo" />
        </h1>
        <h2> Coming soon</h2>
      </header>
      <main>
        <h3>
          A safe and inclusive social media app for <span className="bold">ARMY</span> to stay connected, and support all the <span className="bold">BTS</span> members
        </h3>
        <div className="socials">
          <span className="star">&#10022;</span>
          <h4>Let’s stay in touch and follow us on:</h4>
          <div className="social-media-icons">
            <SocialLink link="https://twitter.com/boraami_app" linkType="twitter" icon={<FaTwitterSquare />} />
            <SocialLink link="https://www.instagram.com/boraami_app/" linkType="instagram" icon={<FaInstagramSquare />} />
            <SocialLink link="https://www.tiktok.com/@boraami_app" linkType="tiktok" icon={<TiktokIcon />} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
