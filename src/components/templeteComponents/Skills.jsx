import React from 'react';
import { useSelector } from 'react-redux';

const Skills = () => {
  const skillsInfo = useSelector((state) => state.keySkills.skillList);

  return (
    <div>
      <ul>
        {skillsInfo.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
