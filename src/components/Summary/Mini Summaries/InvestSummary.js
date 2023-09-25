import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import './InvestSummary.css';

// Please make sure that each term at index 'i' corresponds to its definition at the same index 'i'
const terms = [
    "Savings Account", "Assets", "Whole Life Insurance", "Universal Insurance",
    "Compound Interest", "Long-term Investing", "Short-term Investing", "401K",
    "Stocks Portfolio", "ETF (Exchange Traded Funds)"
];

const definitions = [
    "A savings account typically offered by a financial institution.",
    "Various financial instruments and holdings that can generate income and grow in value, including stocks, bonds, real estate, and more.",
    "A type of insurance that offers a combination of life insurance and an investment component.",
    "An insurance policy that offers permanent coverage and the ability to accumulate cash value.",
    "Earning interest on both the initial amount of money saved and any interest that is added to it over time.",
    "The practice of buying and holding investments for an extended period, typically more than five years.",
    "The practice of buying and holding investments for a short period, typically less than one year.",
    "A tax-advantaged retirement savings plan typically offered by employers.",
    "A diversified collection of individual stocks.",
    "An investment fund traded on stock exchanges, holding assets such as stocks or bonds."
];

const InvestSummary = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedTerm, setSelectedTerm] = useState(null);
    const [selectedDefinition, setSelectedDefinition] = useState(null);
    const [matches, setMatches] = useState({});
    const [matchedTerms, setMatchedTerms] = useState([]);

    const handleTermClick = (term) => {
        setSelectedTerm(term);
    };

    const handleDefinitionClick = (definition) => {
        setSelectedDefinition(definition);
    };

    const checkMatch = () => {
        if (selectedTerm && selectedDefinition) {
            const termIndex = terms.indexOf(selectedTerm);
            const definitionIndex = definitions.indexOf(selectedDefinition);

            if (termIndex === definitionIndex) {
                setMatches({ ...matches, [selectedTerm]: selectedDefinition });
                setMatchedTerms([...matchedTerms, selectedTerm]);
            }
            setSelectedTerm(null);
            setSelectedDefinition(null);
        }
    };

    const handleOpenDialog = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className={"title"}>
                <Typography variant="h2" gutterBottom>
                    Investing - Mix and Match Game
                </Typography>
            </div>


            <div className="term-container" style={{ flex: 1 }}>
                <Typography variant="h4">Terms</Typography>
                {terms.map((term, index) => (
                    <Button
                        key={index}
                        variant="outlined"
                        disabled={matchedTerms && matchedTerms.includes(term)}
                        className={selectedTerm && selectedTerm.includes(term) ? 'selected-term' : ''}
                        style={{ backgroundColor: matchedTerms.includes(term) ? 'darkgray' : 'white' }}
                        onClick={() => handleTermClick(term)}
                    >
                        {term}
                    </Button>
                ))}
            </div>

            <div className="definition-container" style={{ flex: 1 }}>
                <Typography variant="h4">Definitions</Typography>
                {definitions.map((definition, index) => (
                    <Button key={index} variant="outlined" onClick={() => handleDefinitionClick(definition)}
                            style={{ backgroundColor: selectedDefinition ? 'darkgray' : 'white' }}>
                        {definition}
                    </Button>
                ))}
                <Button variant="contained" color="primary" onClick={checkMatch} style={{ alignSelf: 'center' }}>
                    Check Match
                </Button>

                <div className="matches-container" style={{ flex: 1 }}>
                    <Typography variant="h6">Matches</Typography>
                    {Object.keys(matches).map((term, index) => (
                        <Typography key={index} variant="body1">
                            {term} - {matches[term]}
                        </Typography>
                    ))}
                </div>
            </div>



        </div>
    );
};

export default InvestSummary;
