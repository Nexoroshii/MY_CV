import Project from "../components/project/Project";
import { projectsList } from "../components/project/projectsList";

function Projects() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projectsList.map((proj, index) => {
            return <Project title={proj.title} img={proj.img} key={index} />;
          })}
        </ul>
      </div>
    </main>
  );
}

export default Projects;
