import React from 'react'

const SingleProject = ({match}) => (console.log('SingleProject props -->', '\n', 'match -->', match)) || (
  <div>
    {/*<span>{match.params.projectId}</span>*/}
  </div>
)

export default SingleProject
