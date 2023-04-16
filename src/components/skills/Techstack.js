import { Row } from "react-bootstrap";
import { DiJavascript1 } from "react-icons/di";
import {
  SiTypescript,
  SiRedux,
  SiReact,
  SiHtml5,
  SiCss3,
  SiJquery,
  SiBootstrap,
  SiWebpack,
  SiGit,
} from "react-icons/si";
import SkillsElement from "./SkillsElement";

function Techstack() {
  const icons = [
    DiJavascript1,
    SiTypescript,
    SiReact,
    SiHtml5,
    SiCss3,
    SiJquery,
    SiBootstrap,
    SiRedux,
    SiGit,
    SiWebpack,
  ];
  function renderSkills(iconsArr) {
    return iconsArr.map((i) => <SkillsElement icon={i} key={Math.random()} />);
  }
  return <Row className="skills__wrapper-stack">{renderSkills(icons)}</Row>;
}

export default Techstack;
