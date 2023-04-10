import vk from "./../../assets/img/icons/vk.svg";
import instagram from "./../../assets/img/icons/instagram.svg";

import gitHub from "./../../assets/img/icons/gitHub.svg";
import linkedIn from "./../../assets/img/icons/linkedIn.svg";
import socialLinks from "./socialLinks";
import "./style.css";
import FooterSocialComponent from "./FooterSocialComponent";

const { vkLink, instagramLink, gitHubLink, linkedInLink } = socialLinks;

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <FooterSocialComponent path={vkLink} img={vk} />
            
            <FooterSocialComponent path={instagramLink} img={instagram} />

            <FooterSocialComponent path={gitHubLink} img={gitHub} />

            <FooterSocialComponent path={linkedInLink} img={linkedIn} />
          </ul>
          <div className="copyright">
            <p>© 2023 </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
