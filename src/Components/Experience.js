import React from 'react'
import { SingleJob } from './'

import jobHistory from '../Data/jobHistory'

const Experience = () => {

  return (
    <div>
      <h3>Experience</h3>
      { jobHistory.map((job, i) => (
        <SingleJob key={i} job={job} />
      ))}
    </div>
  )
}

export default Experience
