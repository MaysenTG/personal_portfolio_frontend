import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_CV_CONTENT = gql`
  {
    cvpages {
      skill1Name
      skill1Weight
      skill2Name
      skill2Weight
      skill3Name
      skill3Weight
      hobbies
      showWeight
      showHobbies
      showSkills
      showContact
    }
  }
`;

function CVContent() {
  const { loading, error, data } = useQuery(GET_CV_CONTENT);
  var skillClass = "col-md-6";
  var contactClass = "col-md-6";

  if (error) return `Error ${error.message}`;
  if (loading) {
    return (
      <div className="container">
        <div className="group">
          <div className="row">
            <div className="col-md-6">
              <div className="skills portfolio-info-card">
                <h2>Skills</h2>
                <div>
                  <div className="ph-row">
                    <div className="ph-col-4 big"></div>
                    <div className="ph-col-12"></div>
                    <div className="ph-col-12 empty"></div>
                    <div className="ph-col-4 big"></div>
                    <div className="ph-col-12"></div>
                    <div className="ph-col-12 empty"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-info portfolio-info-card">
                <h2>Contact Info</h2>
                <div>
                  <div className="ph-row">
                    <div className="ph-col-12"></div>
                    <div className="ph-col-12 empty"></div>
                    <div className="ph-col-12"></div>
                    <div className="ph-col-12 empty"></div>
                    <div className="ph-col-12"></div>
                    <div className="ph-col-12 empty"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hobbies group">
            <div className="heading">
              <h2 className="text-center">Hobbies</h2>
            </div>
            <div>
              <div className="ph-row">
                <div className="ph-col-12"></div>
                <div className="ph-col-12"></div>
                <div className="ph-col-2 empty"></div>
                <div className="ph-col-8"></div>
                <div className="ph-col-2 empty"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (data.cvpages[0].showContact && data.cvpages[0].showSkills) {
    skillClass = "col-md-6";
    contactClass = "col-md-6";
  } else if (data.cvpages[0].showContact && !data.cvpages[0].showSkills) {
    skillClass = "d-none";
    contactClass = "col-md-12";
  } else if (!data.cvpages[0].showContact && data.cvpages[0].showSkills) {
    skillClass = "col-md-12";
    contactClass = "d-none";
  } else {
    skillClass = "d-none";
    contactClass = "d-none";
  }

  return (
    <main className="page cv-page">
      <section className="portfolio-block cv">
        <div className="container">
          <div className="group">
            <div className="row">
              <div className={skillClass}>
                <div className="skills portfolio-info-card">
                  <h2>Skills</h2>
                  <h3>{data.cvpages[0].skill1Name}</h3>
                  {data.cvpages[0].showWeight ? (
                    <>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          aria-valuenow={data.cvpages[0].skill1Weight}
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: data.cvpages[0].skill1Weight + "%" }}
                        >
                          <span className="visually-hidden">
                            {data.cvpages[0].skill1Weight}%
                          </span>
                        </div>
                      </div>
                    </>
                  ) : null}

                  <h3>{data.cvpages[0].skill2Name}</h3>
                  {data.cvpages[0].showWeight ? (
                    <>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          aria-valuenow={data.cvpages[0].skill2Weight}
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: data.cvpages[0].skill2Weight + "%" }}
                        >
                          <span className="visually-hidden">
                            {data.cvpages[0].skill2Weight}%
                          </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  <h3>{data.cvpages[0].skill3Name}</h3>
                  {data.cvpages[0].showWeight ? (
                    <>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          aria-valuenow={data.cvpages[0].skill3Weight}
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: data.cvpages[0].skill3Weight + "%" }}
                        >
                          <span className="visually-hidden">
                            {data.cvpages[0].skill3Weight}%
                          </span>
                        </div>
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
              <div className={contactClass}>
                <div className="contact-info portfolio-info-card">
                  <h2>Contact Info</h2>
                  <div className="row">
                    <div className="col-1">
                      <i className="icon ion-android-calendar icon"></i>
                    </div>
                    <div className="col-9">
                      <span>30/10/2000</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-1">
                      <i className="icon ion-person icon"></i>
                    </div>
                    <div className="col-9">
                      <span>Maysen Greenwood</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-1">
                      <i className="icon ion-ios-telephone icon"></i>
                    </div>
                    <div className="col-9">
                      <span>+64 027 310 2660</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-1">
                      <i className="icon ion-at icon"></i>
                    </div>
                    <div className="col-9">
                      <span>greenwood.maysen@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={!data.cvpages[0].showHobbies ? "d-none" : "hobbies group"}
          >
            <div className="heading">
              <h2 className="text-center">Hobbies</h2>
            </div>
            <p className="text-center text-muted">{data.cvpages[0].hobbies}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CVContent;
