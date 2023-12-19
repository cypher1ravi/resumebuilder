import React from 'react';
import { useSelector } from 'react-redux';

export const Institution = () => {
    const educationInfo = useSelector((state) => state.education.educationList);
    return (
        <div>
            {educationInfo.map((edu, index) => (
                <div key={index}>
                    <p>Institution: {edu.institution}</p>
                </div>
            ))}
        </div>
    );
};

export const Degree = () => {
    const educationInfo = useSelector((state) => state.education.educationList);
    return (
        <div>
            {educationInfo.map((edu, index) => (
                <div key={index}>
                    <p>Degree: {edu.degree}</p>
                </div>
            ))}
        </div>
    );
};

export const Year = () => {
    const educationInfo = useSelector((state) => state.education.educationList);
    return (
        <div>
            {educationInfo.map((edu, index) => (
                <div key={index}>
                    <p>Year: {edu.year} </p>
                </div>
            ))}
        </div>
    );
};
