import Link from "next/link";
import { FC } from "react";

type Props = { emoji: string; title: string };

const ProjectCard: FC<Props> = ({ emoji, title }) => {
  return (
    <div className="p-3 h-40 w-60 shadow border rounded-xl flex flex-col justify-between items-center">
      <div className="text-center space-y-2 text-2xl">
        <div>{emoji}</div>
        <h2 className="font-oswald">{title}</h2>
      </div>
      <div className="space-x-2">
        <Link
          href="/projects"
          className="w-7 inline-block aspect-square bg-yellow-400 rounded-full"
        />
        <button className="w-7 aspect-square bg-black rounded-full" />
        <button className="w-7 aspect-square bg-red-600 rounded-full" />
      </div>
    </div>
  );
};

export default ProjectCard;
