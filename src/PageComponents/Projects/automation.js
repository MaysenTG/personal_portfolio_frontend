import { React } from "react";
import ProjectTemplate from "./project_template";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_PROJECTS = gql`
  {
    projects(projectType: "Automation") {
      title
      description
      skills
      githubUrl
      projectType
      imageUrl
    }
  }
`;

function MyAppProjects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (error) return `Error ${error.message}`;
  return (
    <section id="projects">
      <div className="row">
        <h1 style={{ marginTop: "2rem" }} className="section__title">
          Automation projects
        </h1>
        <ProjectTemplate data={data} loading={loading}/>
      </div>
    </section>
  );
}

export default MyAppProjects;
