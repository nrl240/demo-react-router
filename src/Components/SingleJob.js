import React from 'react'

const SingleJob = (props) => {
  const { job } = props

  return (
    <div className='jobs-container'>
      <div className='job-container'>
        <h2>{job.company}</h2>
        <h3>{job.title}</h3>
        <span>{job.dates}</span>
        <ul className='job-description'>
          { job.description.map((bullet, i) =>
              <li key={`bullet-${i}`}>{bullet}</li>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default SingleJob
