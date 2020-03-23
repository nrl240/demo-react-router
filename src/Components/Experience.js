import React from 'react'
import { SingleJob } from './'
import jobHistory from '../Data/jobHistory'

const Experience = () => (
  <div>
    <h3>Experience</h3>
    <SingleJob jobs={jobHistory} />
  </div>
)

export default Experience
