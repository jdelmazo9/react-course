import { PROJECTS, PROJECT_COMPONENT_MAPPING } from "../../constants";
import Layout from "../../components/Layout";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { isString } from "lodash";
import DetailsSideBar from "../../components/DetailsSideBar";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const ProjectPage: NextPage<Props> = ({ project }) => {
  const { id, emoji, title } = project;
  const Component = PROJECT_COMPONENT_MAPPING[id];
  return (
    <Layout
      sidebar={<DetailsSideBar project={project} />}
      title="My Portfolio"
      description="React Exercises"
    >
      <div className="text-center py-4 flex flex-col space-y-2 text-5xl">
        <div>{emoji}</div>
        <h2 className="font-oswald">{title}</h2>
      </div>
      <div className="flex flex-1 items-center justify-center">
        {Component && <Component />}
      </div>
    </Layout>
  );
};

export default ProjectPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { id } = context.query;
  if (!isString(id)) {
    throw "invalid ID";
  }
  const project = PROJECTS.find((project) => project.id === id);
  if (!project) {
    throw new Error(`Project with id ${id} not found`);
  }
  return { props: { project } };
};
