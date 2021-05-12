import React from 'react';
import { Link } from 'react-router-dom';

const Projects = (props) => {
  const { projectHistory } = props;

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projectHistory.map((project, idx) => {
          return (
            <li key={idx}>
              <Link to={`/projects/${project.slug}`}>{project.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Projects;
