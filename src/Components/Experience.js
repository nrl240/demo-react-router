import React from 'react';
import { SingleJob } from './';

// import jobHistory from '../Data/jobHistory';

const Experience = (props) => {
  return (
    <div>
      <h2>Experience</h2>
      {props.jobHistory.map((job, i) => (
        <SingleJob key={i} job={job} />
      ))}
      <button onClick={() => props.history.goBack()}>Go Back</button>
    </div>
  );
};

export default Experience;
