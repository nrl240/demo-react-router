import React from 'react';

import { projectHistory } from '../data';

const SingleProject = () => {
  const project = projectHistory.find(
    (project) => project.slug === props.match.params.slug
  );

  return (
    <div className='container'>
      <h2>{project.name}</h2>
      <span>{project.description}</span>
      <br />
      <a href={project.projectUrl} target='_'>
        Visit
      </a>
      <br />
      <a href={project.repoUrl} target='_'>
        GitHub
      </a>
    </div>
  );
};

export default SingleProject;
