import { Row } from "react-bootstrap";
import {
  SiWindows,
  SiVisualstudiocode,
  SiSass,
  SiFigma,
  SiGulp,
} from "react-icons/si";
import SkillsElement from "./SkillsElement";

function Toolstack() {
  const icons = [SiWindows, SiVisualstudiocode, SiSass, SiFigma, SiGulp];
  function renderSkills(iconsArr) {
    return iconsArr.map((i) => <SkillsElement icon={i} />);
  }
  return <Row className="skills__wrapper-stack">{renderSkills(icons)}</Row>;
}

export default Toolstack;
