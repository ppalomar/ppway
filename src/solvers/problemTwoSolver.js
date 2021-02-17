// n-n c: str

export const stringConstraint = arr => 
    arr.reduce((memo, expression) => {
        try {
            const [minMax, char, str] = expression.split(' ');
            const [min, max] = minMax.split('-');
            const cleanChar = char.replace(/:/g, '');
            const charAppearences = (str.match(new RegExp(cleanChar, 'gi')) || []).length;
            const isValid = charAppearences >= parseInt(min) && charAppearences <= parseInt(max);
            return isValid ? memo + 1 : memo
        }catch{
            return memo;
        }
    }, 0);

export const stringConstraintV2 = arr =>
    arr.reduce((memo, expression) => {
        try {
            const [minMax, char, str] = expression.split(' ');
            const [min, max] = minMax.split('-');
            const cleanChar = char.replace(/:/g, '');
            const isInPosition = position => str[position-1] === cleanChar ? 1 : 0; 
            const isValid = (isInPosition(parseInt(min)) + isInPosition(parseInt(max))) === 1;
            return isValid ? memo + 1 : memo;
        }catch{
            return memo;
        }
    }, 0);