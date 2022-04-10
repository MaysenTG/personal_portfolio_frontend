import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_WORK_CV = gql`
  {
    experiences(experienceType: "Work") {
      id
      position
      title
      location
      tenure
      description
    }
  }
`;

function WorkExperience() {
  const { loading, error, data } = useQuery(GET_WORK_CV);

  if (error) return `Error ${error.message}`;
  const repeatTimes = 2;

  if (loading) {
    return (
      <div className="work-experience group">
        <div className="heading">
          <h2 className="text-center">Work Experience</h2>
        </div>

        {Array.apply(null, { length: repeatTimes }).map((e, i) => (
          <div key={i}>
            <div class="ph-item">
              <div class="ph-col-12">
                <div class="ph-row">
                  <div class="ph-col-2 big"></div>
                  <div class="ph-col-8 empty"></div>
                  <div class="ph-col-2"></div>
                  <div class="ph-col-2"></div>
                </div>
              </div>
              <div class="ph-col-12">
                <div class="ph-row">
                  <div class="ph-col-12"></div>
                  <div class="ph-col-12"></div>
                  <div class="ph-col-2"></div>
                  <div class="ph-col-10 empty"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="work-experience group">
      <div className="heading">
        <h2 className="text-center">Work Experience</h2>
      </div>

      {data.experiences
        .sort(function (a, b) {
          return b.id - a.id;
        })
        .map((job) => (
          <div className="item" key={job.id}>
            <div className="row">
              <div className="col-6">
                <h3>{job.position}</h3>
                <h4 className="organization">{job.title}</h4>
                <p className="text-muted location">
                  {job.location !== null ? job.location : ""}
                </p>
              </div>
              <div className="col-md-6">
                <span className="period">{job.tenure}</span>
              </div>
              <p className="text-muted">{job.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default WorkExperience;
