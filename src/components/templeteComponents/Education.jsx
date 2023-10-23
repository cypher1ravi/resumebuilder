import React from 'react';
import { useSelector } from 'react-redux';

export default function Education() {
    const educationInfo = useSelector((state) => state.education.educationList)
    return (
        <div>
            {educationInfo.map((edu, index) => (
                <div key={index}>
                    <p>Institution: {edu.institution}</p><p>Degree: {edu.degree}</p><p>Year: {edu.year} </p>

                </div>
            ))}
        </div>
    );
}
