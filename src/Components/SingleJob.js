import React from 'react';

const SingleJob = (props) => {
  const { job } = props;

  return (
    <div className='container'>
      <h3>{job.company}</h3>
      <h4>{job.title}</h4>
      <span>{job.dates}</span>
      <ul className='job-description'>
        {job.description.map((bullet, i) => (
          <li key={`bullet-${i}`}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
};

export default SingleJob;
