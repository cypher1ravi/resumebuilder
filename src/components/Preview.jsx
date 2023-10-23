import React from 'react';
import jsPDF from 'jspdf';
import Template1 from './Templete1'; // Fix the import paths
import Template2 from './Templete2'; // Fix the import paths

function generatePDF() {
    const doc = new jsPDF();

    // Add Template1 and Template2 to the PDF
    doc.text(10, 20, 'Template 1:');
    doc.addImage(<Template1 />, 'PNG', 10, 30, 100, 0);

    doc.addPage();
    doc.text(10, 20, 'Template 2:');
    doc.addImage(<Template2 />, 'PNG', 10, 30, 100, 0);

    // Save the PDF to a file or open it in a new tab
    doc.save('react_component.pdf');
}

export default function Preview() {
    return (
        <div>
            <h1>Preview page</h1>
            <Template1 />
            <Template2 />
            <button onClick={generatePDF}>Generate PDF</button> {/* Fix the onClick event handler */}
        </div>
    );
}
