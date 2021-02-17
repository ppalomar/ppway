import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

import DataLoader from '../../components/DataLoader';
import { stringConstraint, stringConstraintV2 } from '../../solvers/problemTwoSolver';

import './index.css';

const ProblemTwoScene = () => {
    const [data, setData] = React.useState(null);
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
                    
                    {/* String Constraint Solution: 666 are valid */}
                    {stringConstraintSolution && (
                        <Alert severity="success">
                            String Constraint Solution: {`${stringConstraintSolution} are valid`}
                        </Alert>
                    )}
                    {/* String Constraint Solution V2: 670 are valid */}
                    {stringConstraintV2Solution && (
                        <Alert severity="success">
                            String Constraint V2 Solution: {`${stringConstraintV2Solution} are valid`}
                        </Alert>
                    )}
                </div>
            </Paper>
        </div>
    );
};

export default ProblemTwoScene;