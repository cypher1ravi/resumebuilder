import React from 'react';
import { useSelector } from 'react-redux';
const WorkExperience = () => {
    const workInfo = useSelector((state) => state.workDetails.workList);

    return (
        <div><ul>
            {workInfo.map((workEx, index) => (
                <li key={index}>
                    <p>{workEx.company} ,As  {workEx.position}, From {workEx.startDate} to {workEx.endDate}</p>
                </li>
            ))}
        </ul>
        </div >
    );
};

export default WorkExperience;
