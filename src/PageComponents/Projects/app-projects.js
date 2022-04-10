import { React } from "react";
import ProjectTemplate from "./project_template";
import { CircularProgress } from "@mui/material";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_PROJECTS = gql`
  {
    projects(projectType: "App") {
      title
      description
      skills
      githubUrl
      previewUrl
      projectType
      imageUrl
    }
  }
`;

function MyAppProjects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (error) return `Error ${error.message}`;

  if (loading)
    return (
      <div className="loading-container">
        <h1>Loading web apps</h1>
        <span className="loading-item">
          <CircularProgress />
        </span>
      </div>
    );

  return (
    <section id="projects">
      <div className="projects__container">
        <div className="row">
          <h1 className="section__title">Web Apps</h1>
          <ProjectTemplate data={data} />
        </div>
      </div>
    </section>
  );
}

export default MyAppProjects;
