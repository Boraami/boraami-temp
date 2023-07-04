import boraamiLogo from "./assets/boraami-primary-horizontal-logo.svg";
import "./App.css";
import { FaInstagramSquare, FaTwitterSquare, FaSpotify } from "react-icons/fa";
import TiktokIcon from "./assets/TiktokIcon";
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
          <div className="socials">
            <span className="star">&#10022;</span>
            <h4>Let’s stay in touch and follow us on:</h4>
            <div className="social-media-icons">
              <SocialLink link="https://twitter.com/boraami_app" icon={<FaTwitterSquare />} />
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
