require('jest-fetch-mock').enableMocks();
import { screen, render } from "@testing-library/react"; 
import 'testing-library/jest-dom'
import './setupTests.js';
import App from "./App";
ss
test("test1", function() {s
    render(<App />);
    const p = screen.getByLabelText(/Users/i);
    expect(p).toBeInTheDocument();
});

test("test2", function() {
    render(<App />);
    const p = screen.getByText(/selected name/i);
    expect(p).toBeInTheDocument();
});

test('renders users when API call succeeds', async () => {
    const fakeUsers = [
        { id: 1, name: 'Joe' },
        { id: 2, name: 'Tony' },
    ];
    fetchMock.mockResolvedValue({
        status: 200,
        json: jest.fn().mockResolvedValue(fakeUsers),
    });

    render(<App />);

    expect(screen.getByRole('heading')).toHaveTextContent('List of Users');

    expect(await screen.findByText('Joe')).toBeInTheDocument();
    expect(await screen.findByText('Tony')).toBeInTheDocument();

    expect(screen.queryByText('No users found')).not.toBeInTheDocument();
});

test('renders error when API call fails', async () => {
    fetchMock.mockReject(() => Promise.reject('API error'));

    render(<App />);

    expect(await screen.findByText('Something went wrong!')).toBeInTheDocument();
    expect(await screen.findByText('No users found')).toBeInTheDocument();
});
