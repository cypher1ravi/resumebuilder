import React from 'react';
import { useSelector } from 'react-redux';

export function Name() {
    const personalInfo = useSelector((state) => state.personalInformation);

    return (
        <div>
            <h1>{personalInfo.firstName} {personalInfo.lastName}</h1>

        </div>
    );
}

export function Title() {
    const personalInfo = useSelector((state) => state.personalInformation);

    return (
        <div>
            {personalInfo.title}
        </div>
    );
}

export function Summary() {
    const personalInfo = useSelector((state) => state.personalInformation);

    return (
        <div>
            {personalInfo.objective}
        </div>
    );
}
