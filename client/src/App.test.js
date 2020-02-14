import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react'
import App from './App';

// test(`Nav title renders correctly`, () => {
//   // Arrange

//   const { getByText } = render(<App />)

//   // Act

//   const title = getByText(/Womens Soccer Players/i); 

//   // Assert

//   expect(title).toBe(`<h1 class=\"nav-title\">Womens Soccer Players</h1>`);
// });

test(`Nav subtitle renders correctly`, () => {
  // Arrange

  const { queryByText } = render(<App />)
  // Act

  const title = queryByText(/this is another test/i); 

  // Assert

  expect(title).toBeTruthy();
  expect(title).not.toBeFalsy();
  expect(title).toBeDefined()
});

test(`Card title renders correctly`, () => {
  const {queryByText} = render(<App />)

  const card = queryByText(/Name:/i);

  expect(card).toBeTruthy()
  // expect(cardtitle).not.toThrow(false)
})