import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

import DataLoader from '../../components/DataLoader';
import { twoSum, threeSum } from '../../solvers/problemOneSolver';

import './index.css';

const ProblemOneScene = ({ testInjection }) => {
    const [data, setData] = React.useState(testInjection?.data || null);
    const [target, setTarget] = React.useState(testInjection?.target || 0);
    const [solution, setSolution] = React.useState(null);

    const parseData = data => {
        setData(data.split("\n"));
    }

    const evaluate = () => {
        setSolution([twoSum(data, target), threeSum(data, target)])
    }

    const twoSumSolution = solution?.[0];
    const threeSumSolution = solution?.[1];
    const targetError = isNaN(target);
    const isEvaluateDisabled = !data || !target || targetError;
    const helperText = targetError ? "Target should be an integer" : "";

    return (
        <div className='problemOneContainer'>
            <Paper elevation={3}>
                <div className='row header'>
                    <h1>Problem One</h1>
                </div>
                <div className='row data'>
                    <DataLoader callback={parseData}/>
                </div>
                <div className='row target'>
                    <TextField size="small" error={!!targetError} helperText={helperText} id="outlined-target" label="Target" variant="outlined" onChange={(e) => setTarget(e.target.value)} />
                </div>
                <div className='row evaluate'>
                    <Button disabled={isEvaluateDisabled} onClick={evaluate} variant="contained" color="primary">
                        Evaluate
                    </Button>
                </div>
                <div className='solution'>
                    
                    {/* Two Sum Solution: Numbers 1093, 927. Multi: 1013211 */}
                    {twoSumSolution && (
                        <Alert severity="success">
                            Two Sum Solution: {`Numbers ${twoSumSolution.operators[0]}, ${twoSumSolution.operators[1]} | Multi: ${twoSumSolution.multi}`}
                        </Alert>
                    )}
                    {/* Three Sum Solution: Numbers 19, 481, 1520 | Multi: 13891280 */}
                    {threeSumSolution && (
                        <Alert severity="success">
                            Three Sum Solution: {`Numbers ${threeSumSolution.operators[0]}, ${threeSumSolution.operators[1]}, ${threeSumSolution.operators[2]} | Multi: ${threeSumSolution.multi}`}
                        </Alert>
                    )}
                </div>
            </Paper>
        </div>
    );
};

export default ProblemOneScene;