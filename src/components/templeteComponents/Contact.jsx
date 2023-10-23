
import React from 'react';
import { useSelector } from 'react-redux';
const Contact = () => {
    const personalInfo = useSelector((state) => state.personalInformation);

    return (
        <div>
            <p>Email: {personalInfo.email}</p>
            <p>Phone: {personalInfo.phone}</p>
            <p>Address: {personalInfo.address}</p>
        </div>
    );
};

export default Contact;
