import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import App from './App';
import * as testJson from './mocks/test.json';
import fetch from 'jest-fetch-mock';

beforeEach(() => {
    fetch.resetMocks();
});


test('renders the auction cards', async () => {

    fetch.mockResponse(JSON.stringify((testJson as any).default));

    render(<App/>);

    const title = screen.getByText(/React-Auction/i);

    expect(title).toBeInTheDocument();

    await waitFor(() => {
        // Test if we have got the results from the mock API
        const auctionCard = screen.getByText(/ATH/i);
        expect(auctionCard).toBeInTheDocument();
    })

});
