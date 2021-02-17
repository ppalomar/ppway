/* eslint-env jest */
import React from 'react';
import { render } from '@testing-library/react';

import DataLoader from '..';

describe('DataLoader', () => {
    it('renders correctly on load', () => {
        expect(render(<DataLoader callback={jest.fn()}/>)).toMatchSnapshot();
    });
});
