import { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_WORK_CV = gql`
  {
    experiences(experienceType: "Education") {
      id
      position
      title
      tenure
      description
    }
  }
`;

function EduExperience() {
  const { loading, error, data } = useQuery(GET_WORK_CV);
  const [ numEdu, setNumEdu] = useState(2);
  const repeatTimes = 2;

  if (error) return `Error ${error.message}`;
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

      {data.experiences
        .sort(function (a, b) {
          return b.id - a.id;
        })
        .slice(0, numEdu)
        .map((edu) => (
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
        {numEdu > data.experiences.length ? <></> : <button style={{ textDecoration: "underline", width: "100%"}} className="btn link-primary" onClick={() => setNumEdu(numEdu+2)}>Show more</button>}
    </div>
  );
}

export default EduExperience;
