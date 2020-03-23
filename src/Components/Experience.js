import React from 'react'
import { SingleJob } from './'
// import jobHistory from '../Data/jobHistory'

const Experience = (props) => {
  console.log('^^^^ <Experience/> Props ^^^^')
  console.log(props)
  console.log('^^^^ <Experience/> Props ^^^^')

  return (
    <div>
      <h3>Experience</h3>
      <SingleJob jobs={props.jobHistory} />
    </div>
  )
}

export default Experience
