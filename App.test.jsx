import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe('Mage Character Sheet App', () => {
  test('renders without crashing and shows New button', () => {
    render(<App />);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  test('can create a new character and show name title', () => {
    render(<App />);
    fireEvent.click(screen.getByText('New'));
    expect(screen.getByText(/Untitled/)).toBeInTheDocument();
  });

  test('can change character info', () => {
    render(<App />);
    fireEvent.click(screen.getByText('New'));

    const nameInput = screen.getAllByPlaceholderText('Name')[0];
    fireEvent.change(nameInput, { target: { value: 'Test Mage' } });
    expect(nameInput.value).toBe('Test Mage');
  });

  test('can update an attribute dot', () => {
    render(<App />);
    fireEvent.click(screen.getByText('New'));

    const strengthDots = screen.getAllByRole('button').filter(btn =>
      btn.className.includes('border-black')
    );

    fireEvent.click(strengthDots[0]);
    // Value should now be 1 dot
    fireEvent.click(strengthDots[0]); // toggles back to 0
  });

  test('can add and remove a merit', () => {
    render(<App />);
    fireEvent.click(screen.getByText('New'));

    fireEvent.click(screen.getByText('Add Merit'));
    const meritInputs = screen.getAllByPlaceholderText('Merit');
    expect(meritInputs.length).toBeGreaterThan(0);

    fireEvent.change(meritInputs[0], { target: { value: 'High Speech' } });
    expect(meritInputs[0].value).toBe('High Speech');

    const removeBtn = screen.getAllByText('×')[0];
    fireEvent.click(removeBtn);
    expect(screen.queryByDisplayValue('High Speech')).not.toBeInTheDocument();
  });
});
