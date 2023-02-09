import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../constants";
import Layout from "../components/Layout";
import { FC } from "react";

const Home: FC = () => {
  return (
    <Layout title="My Portfolio" description="React Exercises">
      <ul className="grid grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <li key={index}>
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Home;
