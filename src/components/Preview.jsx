import React from 'react';
import jsPDF from 'jspdf';
import Template2 from './Template2';
import ReactDOM from 'react-dom';
export default function Preview() {
    const generatePDF = () => {
        const doc = new jsPDF();

        // Render Template2 to HTML
        const template2Element = document.createElement('div');

        // Render the Template2 component to the HTML element
        ReactDOM.render(<Template2 />, template2Element);

        // Convert the HTML element to a string
        const htmlString = new XMLSerializer().serializeToString(template2Element);

        // Add the HTML to the PDF using jsPDF's html method
        doc.html(htmlString, {
            callback: (doc) => {
                // Save the PDF to a file or open it in a new tab
                doc.save('react_component.pdf');
            },
        });
    };

    return (
        <div>
            <h1>Preview page</h1>
            <Template2 />
            <button onClick={generatePDF}>Generate PDF</button>
        </div>
    );
}
