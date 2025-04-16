import boraamiLogo from "./assets/boraami-primary-horizontal-logo.svg";
import blueHeroImg from "./assets/blu-app.png";
import TiktokIcon from "./assets/TiktokIcon";
import XIcon from "./assets/XIcon";
import BlueskyIcon from "./assets/BlueskyIcon";
import InstagramIcon from "./assets/InstagramIcon";
import SpotifyIcon from "./assets/SpotifyIcon";
import FAQList from "./components/FAQList";
import "./App.css";

interface LinkProps {
  link: string;
  icon: JSX.Element;
}

const SocialLink = ({ link, icon }: LinkProps) => {
  return (
    <a target="_blank" rel="noopener noreferrer" className="social-icon" href={link}>
      {icon}
    </a>
  );
};

const App = () => {
  return (
    <div className="app">
      {/* Hero Section */}
      <div className="hero">
        <main>
          <figure className="screenshot">
            <img src={blueHeroImg} alt="Blu with Boraami App Screenshots" />
          </figure>

          <div className="content">
            <header>
              <h1>
                <img src={boraamiLogo} className="logo" alt="Boraami Logo" />
              </h1>
              <h2>Coming soon!</h2>
            </header>

            <p>
              A safe and inclusive social media app for <span className="bold">ARMY</span> to stay
              connected, and support all the <span className="bold">BTS</span> members
            </p>

            <div className="socials">
              <p>Let's stay in touch and follow us on:</p>

              <div className="social-media-icons">
                <SocialLink link="https://twitter.com/boraami_app" icon={<XIcon />} />
                <SocialLink
                  link="https://www.instagram.com/boraami_app/"
                  icon={<InstagramIcon />}
                />
                <SocialLink link="https://www.tiktok.com/@boraami_app" icon={<TiktokIcon />} />
                <SocialLink link="https://bsky.app/profile/boraami.app" icon={<BlueskyIcon />} />
                <SocialLink
                  link="https://open.spotify.com/user/31tzruz5rzkaafyuyvnmzzyodvoe?si=04f4121edefb4f7c"
                  icon={<SpotifyIcon />}
                />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Additional Sections */}
      <div className="sections">
        <section className="faqs">
          <FAQList />
        </section>

        <section className="support">
          <h3>Do you need support?</h3>
          <p>
            We're here to help! For any issues or assistance, please reach us at{" "}
            <a href="mailto:support@boraami.app" target="_blank" rel="noopener noreferrer">
              support@boraami.app
            </a>
            , we're happy to support you with kindness and care.
          </p>
        </section>
      </div>
      <footer>
        <img src={boraamiLogo} className="logo" alt="Boraami Logo" />
      </footer>
    </div>
  );
};

export default App;
