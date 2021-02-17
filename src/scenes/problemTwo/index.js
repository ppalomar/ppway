import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

import DataLoader from '../../components/DataLoader';
import { stringConstraint, stringConstraintV2 } from '../../solvers/problemTwoSolver';

import './index.css';

const ProblemTwoScene = ({ testInjection }) => {
    const [data, setData] = React.useState(testInjection?.data || null);
    const [solution, setSolution] = React.useState(null);

    const parseData = data => {
        setData(data.split("\n"));
    }

    const evaluate = () => {
        setSolution([stringConstraint(data), stringConstraintV2(data)])
    }

    const isEvaluateDisabled = !data;
    const stringConstraintSolution = solution?.[0];
    const stringConstraintV2Solution = solution?.[1];

    return (
        <div className='problemTwoContainer'>
            <Paper elevation={3}>
                <div className='row header'>
                    <h1>Problem Two</h1>
                </div>
                <div className='row data'>
                    <DataLoader callback={parseData}/>
                </div>
                <div className='row evaluate'>
                    <Button disabled={isEvaluateDisabled} onClick={evaluate} variant="contained" color="primary">
                        Evaluate
                    </Button>
                </div>
                <div className='solution'>
                    
                    {/* String Constraint Solution: 666 valid */}
                    {stringConstraintSolution && (
                        <Alert severity="success">
                            String Constraint Solution: {`${stringConstraintSolution} valid`}
                        </Alert>
                    )}
                    {/* String Constraint Solution V2: 670 valid */}
                    {stringConstraintV2Solution && (
                        <Alert severity="success">
                            String Constraint V2 Solution: {`${stringConstraintV2Solution} valid`}
                        </Alert>
                    )}
                </div>
            </Paper>
        </div>
    );
};

export default ProblemTwoScene;