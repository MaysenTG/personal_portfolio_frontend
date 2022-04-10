import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_WORK_CV = gql`
  {
    experiences(experienceType: "Education") {
      position
      title
      tenure
      description
    }
  }
`;

function EduExperience() {
  const { loading, error, data } = useQuery(GET_WORK_CV);

  if (error) return `Error ${error.message}`;

  const repeatTimes = 2;
  if (loading) {
    return (
      <div className="education group">
        <div className="heading">
          <h2 className="text-center">Education</h2>
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
    <div className="education group">
      <div className="heading">
        <h2 className="text-center">Education</h2>
      </div>

      {data.experiences.map((edu) => (
        <div className="item" key={`${edu.id}-edu`}>
          <div className="row">
            <div className="col-md-6">
              <h3>{edu.position}</h3>
              <h4 className="organization">{edu.title}</h4>
            </div>
            <div className="col-6">
              <span className="period">{edu.tenure}</span>
            </div>
            <p className="text-muted">{edu.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EduExperience;
