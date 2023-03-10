import { PROJECTS } from "../../constants";
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
  const { emoji, title } = project;
  return (
    <Layout
      sidebar={<DetailsSideBar project={project} />}
      title="My Portfolio"
      description="React Exercises"
    >
      <div className="flex-1 text-center space-y-4 text-5xl">
        <div>{emoji}</div>
        <h2 className="font-oswald">{title}</h2>
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
