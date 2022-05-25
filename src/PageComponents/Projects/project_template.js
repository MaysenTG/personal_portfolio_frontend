function ProjectTemplate(props) {
  if (props.loading)
    return (
      <div
        className="placeholder-image-section"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <div id="ph-item-project" className="ph-item">
          <div className="ph-col-12">
            <div className="ph-row">
              <div className="ph-col-4 big"></div>
              <div className="ph-col-8 empty"></div>
              <div className="ph-col-12"></div>
            </div>
          </div>
          <div>
            <div className="ph-row">
              <div className="ph-col-12"></div>
              <div className="ph-col-12"></div>
              <div className="ph-col-12"></div>
              <div className="ph-col-4"></div>
            </div>
            <br />
            <div className="row-1">
              <div
                className="col-1"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <div className="ph-avatar"></div>
                <div>&nbsp;</div>
                <div className="ph-avatar"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="ph-item-project" className="ph-item">
          <div className="ph-col-12">
            <div className="ph-row">
              <div className="ph-col-4 big"></div>
              <div className="ph-col-8 empty"></div>
              <div className="ph-col-12"></div>
            </div>
          </div>
          <div>
            <div className="ph-row">
              <div className="ph-col-12"></div>
              <div className="ph-col-12"></div>
              <div className="ph-col-12"></div>
              <div className="ph-col-4"></div>
            </div>
            <br />
            <div className="row-1">
              <div
                className="col-1"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <div className="ph-avatar"></div>
                <div className="" style={{ visibility: "none !important" }}>
                  &nbsp;
                </div>
                <div className="ph-avatar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <ul className="project__list">
      {props.data.projects.map((project) => {
        return (
          <li key={project.title} className="project">
            <div className="project__wrapper">
              <img
                src={project.projectImage.url}
                className="project__img"
                alt={project.title}
              />
              <div className="project__description">
                <h3 className="project__description--title">{project.title}</h3>
                <h4 className="project__description--sub-title">
                  {project.skills}
                </h4>
                <p className="project__description--para">
                  {project.description}
                </p>
                <div className="project__description--links">
                  <a
                    href={project.githubUrl}
                    rel="noreferrer"
                    target="_blank"
                    className="project__description--link"
                  >
                    <img alt="github icon" src="https://ik.imagekit.io/maysentg/tr:w-100,h-100/github-logo-white.png" className="icon"/>
                  </a>

                  <a
                    href={project.previewUrl}
                    rel="noreferrer"
                    target="_blank"
                    className="project__description--link"
                  >
                    <img alt="web preview icon" src="https://ik.imagekit.io/maysentg/tr:w-100,h-100/website-logo-white.png" className="icon"/>
                  </a>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ProjectTemplate;
