// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('renders title', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

it('renders the App without crashing', () => {
  const div = document.createElement('div');
  debugger;
  ReactDOM.render(<App />, div);
});

it('renders main title', () => {
  const { getByText } = render(<App />);
  expect(getByText('Qoala Assignment')).toBeInTheDocument();
});
