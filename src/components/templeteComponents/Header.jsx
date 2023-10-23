
import React from 'react';
import { useSelector } from 'react-redux';
const Header = () => {
    const personalInfo = useSelector((state) => state.personalInformation);

    return (
        <div>
            <h1>{personalInfo.firstName} {personalInfo.lname}</h1>
            <h2>{personalInfo.title}</h2>
        </div>
    );
};

export default Header;
