/* eslint-env jest */
import React from 'react';
import { render } from '@testing-library/react';

import App from '../App';

describe('App', () => {
    it('renders correctly on load', () => {
        expect(render(<App />)).toMatchSnapshot();
    });
});
