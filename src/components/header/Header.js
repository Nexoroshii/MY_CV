import "./style.css";
import Type from "./Type";
import pdf from "./../../assets/CV_Final.pdf";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
            ! <br />
            My name is <em>Egor</em>
          </strong>
        </h1>
        <div className="header__text">
          <div>
            <Type />
          </div>
        </div>
        <a href={pdf} className="btn">
          Download CV
        </a>
      </div>
    </header>
  );
}

export default Header;
