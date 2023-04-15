import "./style.css";
import Type from "./Type";
import pdf from "./../../assets/CV_Ready.pdf";

import SayHello from "./SayHello";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <SayHello />
        <div className="header__text">
          <Type />
        </div>
        <a href={pdf} className="button-cv">
          Download CV
        </a>
      </div>
    </header>
  );
}

export default Header;
