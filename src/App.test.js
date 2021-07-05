import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/To Do List/i);
  expect(linkElement).toBeInTheDocument();
});

//There is an label for the input field
test('renders label for the input field', () => {
  render(<App />);
  const inputTaskElement = screen.getByLabelText(/Add an Item/i);
  expect(inputTaskElement).toBeInTheDocument();
})

//There is an input field for the user to input an activity
test('renders input field for the user to input an activity', () => {
  render(<App />);
  const inputTaskElement = screen.getByPlaceholderText(/Write here/i);
  expect(inputTaskElement).toBeInTheDocument();
})

//There is an add button for the user to add an activity
test('renders add task button', () => { 
  render(<App />);
  const inputTaskElement = screen.getByRole('button');
  expect(inputTaskElement).toBeInTheDocument();
})

// There is an delete button for the user to delete an activity


// There is an edit button for the user to edit the an activity


// The user can add an activity to the state
xtest("input eeee", () => {
  render(<App />);
  const inputTaskElement = screen.getByPlaceholderText(/Write here/i);
  fireEvent.change(inputTaskElement,"I like chicken");
  expect(inputTaskElement.innerText).toBe("I like chicken");
})

// The user can delete an activity from the state


// The user can edit an activity from the state


// The user can update an activity as completed but not delete it. 
