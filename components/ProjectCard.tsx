import Link from "next/link";
import { Dispatch, FC, SetStateAction } from "react";
import DemoIcon from "../assets/demo-icon.svg";
import GithubIcon from "../assets/github-icon.svg";
import MoreIcon from "../assets/more-icon.svg";
import { Project } from "../constants";

type Props = {
  project: Project;
  setSelectedProject: Dispatch<SetStateAction<Project | undefined>>;
};

const ProjectCard: FC<Props> = ({ project, setSelectedProject }) => {
  const { id, emoji, title, link } = project;
  const PROJECT_ROUTE = `/projects/${id}`;
  return (
    <div className="p-3 h-40 w-60 shadow border rounded-xl flex flex-col justify-between items-center">
      <div className="text-center space-y-2 text-2xl">
        <div>{emoji}</div>
        <h2 className="font-oswald">{title}</h2>
      </div>
      <div className="space-x-2">
        <Link
          href={PROJECT_ROUTE}
          className="w-7 inline-block aspect-square rounded-full"
        >
          <DemoIcon className="h-full w-full" />
        </Link>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-block w-7 aspect-square rounded-full"
        >
          <GithubIcon className="h-full w-full" />
        </a>
        <button
          className="w-7 aspect-square rounded-full"
          onMouseEnter={() => setSelectedProject(project)}
          onMouseLeave={() => setSelectedProject(undefined)}
        >
          <MoreIcon className="h-full w-full" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
