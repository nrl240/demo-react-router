import React from 'react'

const SingleJob = (props) => {
  const { jobs } = props

  return (
    <div className='jobs-container'>
      { jobs.map(job => (
          <div className='job-container'>
            <h2>{job.company}</h2>
            <h3>{job.title}</h3>
            <span>{job.dates}</span>
            <ul className='job-description'>
              { job.description.map(bullet =>
                  <li>{bullet}</li>
                )
              }
            </ul>
          </div>
        ))
      }
    </div>
  )
}

export default SingleJob
