import { PROJECTS } from "../../constants";
import Layout from "../../components/Layout";
import { isString } from "lodash";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { FC } from "react";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Project: FC<Props> = ({ id }) => {
  const { emoji, title } = PROJECTS[parseInt(id)];
  return (
    <Layout title="My Portfolio" description="React Exercises">
      <div className="text-center space-y-4 text-5xl">
        <div>{emoji}</div>
        <h2 className="font-oswald">{title}</h2>
      </div>
    </Layout>
  );
};

export default Project;

export const getServerSideProps: GetServerSideProps<{ id: string }> = async (
  context
) => {
  const { id } = context.query;
  if (!isString(id)) {
    throw "invalid ID";
  }
  return { props: { id } };
};
