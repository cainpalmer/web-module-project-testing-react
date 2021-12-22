
import React from 'react';
import Display from '../Display';
import Show from '../Show';
import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const testShow = {
    name: 'test-show',
    summary: 'testing shows',
    seasons: [
        {id: 1, name: 'Season 01', episodes: []},
        {id: 2, name: 'Season 02', episodes: []},
    ],
};

test('renders without errors', () => {
    render(<Display />);
});

test('renders the show when button is clicked', async () => {
    render(<Display />);
    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(<Show show = {testShow} />);
});

test('renders season options when button is clicked', async () => {
    render(<Display />);
    const button = screen.getByRole('button');
    userEvent.click(button);

    await waitFor(() => {
        const seasonOptions = screen.queryAllByTestId('season-option');
        expect(seasonOptions).toHaveLength(4);
    });
});

test('display is called when button is clicked', async () => {
    const displayFunc = jest.fn();
    render(<Display displayFunc = {displayFunc} />);
    const button = screen.getByRole('button');
    userEvent.click(button);

    await waitFor(() => {
        expect(displayFunc).toHaveBeenCalled();
    });
});













///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.