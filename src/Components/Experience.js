import React from 'react';
import { SingleJob } from './';

import { jobHistory } from '../data';

const Experience = () => {
  return (
    <div>
      <h2>Experience</h2>
      {jobHistory.map((job, i) => (
        <SingleJob key={i} job={job} />
      ))}
    </div>
  );
};

export default Experience;
