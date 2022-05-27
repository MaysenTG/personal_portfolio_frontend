import { React } from "react";

import WorkExperience from './cv/work';
import EducationExperience from './cv/education';


function MaysenCV() {
  return (
    <main className="page cv-page">
      <section className="portfolio-block cv">
        <div className="container">
          <WorkExperience />
          <EducationExperience />
        </div>
      </section>
    </main>
  );
}

export default MaysenCV;
