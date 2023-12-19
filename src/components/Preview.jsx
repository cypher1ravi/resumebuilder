import React from 'react';
import jsPDF from 'jspdf';
import Template1 from './Template1';
import Template2 from './Template2';
import Template3 from './Template3';
import Template4 from './Template4';
import { ReactDOM } from 'react';
import { useSelector } from 'react-redux';

export default function Preview() {
    const card = useSelector((state) => state.selectedCard);

    const generatePDF = () => {
        const doc = new jsPDF();

        // Get the selected component based on card.cardIndex
        let selectedComponent;
        switch (card.cardIndex) {
            case 0:
                selectedComponent = <Template1 />;
                break;
            case 1:
                selectedComponent = <Template2 />;
                break;
            case 2:
                selectedComponent = <Template3 />;
                break;
            case 3:
                selectedComponent = <Template4 />;
                break;
            default:
                selectedComponent = "No template selected";
        }

        // Convert the selected component to a string
        const selectedComponentString = ReactDOM.renderToString(selectedComponent);

        // Add the selected component content to the PDF
        doc.text("Preview Page", 10, 10);
        doc.text(selectedComponentString, 10, 30);

        // Save the PDF with a file name
        doc.save("preview.pdf");
    };

    return (
        <div>
            <h1>Preview page</h1>
            {
                (() => {
                    switch (card.cardIndex) {
                        case 0:
                            return <Template1 />;
                        case 1:
                            return <Template2 />;
                        case 2:
                            return <Template3 />;
                        case 3:
                            return <Template4 />;
                        default:
                            return "No template selected";
                    }
                })()
            }
            <button onClick={generatePDF}>Generate PDF</button>
        </div>
    );
}
