/* eslint-env jest */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import ProblemTwoScene from '..';

describe('ProblemTwoScene', () => {
    it('renders correctly on load', () => {
        expect(render(<ProblemTwoScene />)).toMatchSnapshot();
    });

    it('renders correctly with some inintial values', () => {
        const testInjection = {
            data: ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'],
        }
        expect(render(<ProblemTwoScene testInjection={testInjection} />)).toMatchSnapshot();
    });

    it('renders correctly when onclick the button', () => {
        const testInjection = {
            data: ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'],
        }

        const { container, getByText } = render(<ProblemTwoScene testInjection={testInjection} />);
        const evaluateButton = getByText('Evaluate');
        fireEvent.click(evaluateButton);

        expect(container.firstChild).toMatchSnapshot();
    });
});
