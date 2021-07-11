import React from 'react'
import NameCards from '../NameCards/NameCards';
import './ResultsContainer.css'

const ResultsContainer = ({ suggestedNames }) => {
    const suggestedNameJsx = suggestedNames.map(suggestedNames => {
        return <NameCards key={
            suggestedNames
        } suggestedName={suggestedNames} />;
    });

    return (
        <div className="results-container">

            {/* {suggestedNames.length > 0 && suggestedNames[0]} */}
            {suggestedNameJsx}

        </div>
    );
};

export default ResultsContainer;