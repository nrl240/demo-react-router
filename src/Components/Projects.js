import React from 'react';

import { projectHistory } from '../data';

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projectHistory.map((project, idx) => {
          return (
            <li key={idx}>
              <a href={`/projects/${project.slug}`}>{project.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Projects;
