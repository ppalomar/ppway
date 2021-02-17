/* eslint-env jest */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import ProblemOneScene from '..';

describe('ProblemOneScene', () => {
    it('renders correctly on load', () => {
        expect(render(<ProblemOneScene />)).toMatchSnapshot();
    });

    it('renders correctly with some inintial values', () => {
        const testInjection = {
            data: ['1721','979','366','299','675','1456'],
            target: 2020,
        }
        expect(render(<ProblemOneScene testInjection={testInjection} />)).toMatchSnapshot();
    });

    it('renders correctly when onclick the button', () => {
        const testInjection = {
            data: ['1721','979','366','299','675','1456'],
            target: 2020,
        }

        const { container, getByText } = render(<ProblemOneScene testInjection={testInjection} />);
        const evaluateButton = getByText('Evaluate');
        fireEvent.click(evaluateButton);

        expect(container.firstChild).toMatchSnapshot();
    });
});
