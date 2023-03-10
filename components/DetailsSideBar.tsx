import { FC } from "react";
import { COLOR_CLASS_MAPPING, TAGS } from "../constants";
import GithubIcon from "../assets/github-icon.svg";
import { Project } from "../constants";
import MoreIcon from "../assets/more-icon.svg";

type Props = {
  project?: Project;
};

const DetailsSideBar: FC<Props> = ({ project }) => {
  const {
    emoji,
    title,
    description,
    technicalConcepts = [],
    tags = [],
    link,
  } = project || {};
  return (
    <div className="p-3 w-72 shadow border rounded-xl flex flex-col justify-between h-full">
      <div className="space-y-8 text-sm flex flex-col flex-1">
        <div className="text-center text-4xl">👀</div>

        {project ? (
          <>
            <div className="space-y-4">
              <h2 className="text-red-600 font-bold text-2xl">
                {title} {emoji}
              </h2>
              <div className="text-sm">{description}</div>
            </div>
            <div className="space-y-4">
              <h2 className="text-red-600 font-bold text-2xl">
                Technical Concepts
              </h2>
              <ul className="list-disc list-inside">
                {technicalConcepts.map((concept, index) => (
                  <li key={index}>{concept}</li>
                ))}
              </ul>
            </div>
            <ul className="space-y-2">
              {tags.map((tagId, index) => (
                <li
                  key={index}
                  className={`${
                    COLOR_CLASS_MAPPING[TAGS[tagId].color]
                  } w-24 text-center rounded-full px-2 py-1 text-sm text-white`}
                >
                  {TAGS[tagId].name}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="text-red-600 font-bold flex-1 flex items-center text-center">
            <span>
              Hover on the{" "}
              <MoreIcon className="inline w-5 aspect-square pb-1" /> button of a
              card to peek a project
            </span>
          </div>
        )}
      </div>

      {project && (
        <a target="_blank" rel="noreferrer" href={link}>
          <span className="flex items-center">
            <GithubIcon className="mr-1 h-8 w-8" />
            See code
          </span>
        </a>
      )}
    </div>
  );
};

export default DetailsSideBar;
