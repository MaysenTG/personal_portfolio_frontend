import { React } from "react";
import ProjectTemplate from "./project_template";
import { CircularProgress } from "@mui/material";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_PROJECTS = gql`
  {
    projects(projectType: "Websites") {
      title
      description
      skills
      githubUrl
      previewUrl
      projectType
    }
  }
`;

function MyAppProjects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (error) return `Error ${error.message}`;

  if (loading)
    return (
      <div className="loading-container">
        <h1>Loading websites...</h1>
        <span className="loading-item">
          <CircularProgress />
        </span>
      </div>
    );

  return (
    <section id="projects">
      <div className="projects__container">
        <div className="row">
          <h1 className="section__title">Websites</h1>
          <ProjectTemplate data={data} />
        </div>
      </div>
    </section>
  );
}

export default MyAppProjects;
