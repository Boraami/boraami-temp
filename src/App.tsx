import boraamiLogo from "./assets/boraami-primary-horizontal-logo.svg";
import "./App.css";
import { FaInstagramSquare, FaTwitterSquare, FaSpotify } from "react-icons/fa";
import TiktokIcon from "./assets/TiktokIcon";
import XIcon from "./assets/XIcon";
import FAQList from "./components/FAQList";

interface LinkProps {
  link: string;
  icon: JSX.Element;
}

const SocialLink = ({ link, icon }: LinkProps) => {
  return (
    <a target="_blank" className="social-icon" href={link}>
      {icon}
    </a>
  );
};

const App = () => {
  return (
    <div className="app">
      <div className="hero">
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
          <div className="blu-story">
            In a world where colors define existence and in the midst of seeking solace, being compared to a falling red star was a symbol of uniqueness and radiance to them. One night, a red star
            crashes upon a nearby hill and they collect its shattered remains, guarding their enigmatic power in secrecy.
          </div>
          <div className="socials">
            <h4>Let’s stay in touch and follow us on:</h4>
            <div className="social-media-icons">
              <SocialLink link="https://twitter.com/boraami_app" icon={<XIcon />} />
              <SocialLink link="https://www.instagram.com/boraami_app/" icon={<FaInstagramSquare />} />
              <SocialLink link="https://www.tiktok.com/@boraami_app" icon={<TiktokIcon />} />
              <SocialLink link="https://open.spotify.com/user/31tzruz5rzkaafyuyvnmzzyodvoe?si=04f4121edefb4f7c" icon={<FaSpotify />} />
            </div>
          </div>
        </main>
      </div>
      <section className="faqs">
        <FAQList />
      </section>
    </div>
  );
};

export default App;
