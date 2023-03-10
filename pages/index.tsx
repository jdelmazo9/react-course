import ProjectCard from "../components/ProjectCard";
import { PROJECTS, Project } from "../constants";
import Layout from "../components/Layout";
import { FC, useState } from "react";
import DetailsSideBar from "../components/DetailsSideBar";

const Home: FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | undefined>();
  return (
    <Layout
      sidebar={<DetailsSideBar project={selectedProject} />}
      title="My Portfolio"
      description="React Exercises"
    >
      <div className="flex justify-center">
        <ul className="w-fit grid grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <li key={index} className="w-fit">
              <ProjectCard
                project={project}
                setSelectedProject={setSelectedProject}
              />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Home;
