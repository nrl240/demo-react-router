import React from 'react'
import { SingleJob } from './'

const Experience = (props) => {
  console.log('^^^^ <Experience/> Props ^^^^')
  console.log(props)
  console.log('^^^^ <Experience/> Props ^^^^')

  return (
    <div>
      <h3>Experience</h3>
      { props.jobHistory.map((job, i) => (
        <SingleJob key={i} job={job} />
      ))}
    </div>
  )
}

export default Experience
