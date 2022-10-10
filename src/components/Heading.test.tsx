import React from 'react';
import { render, screen } from '@testing-library/react';
import { Heading } from "./Heading"

test('extract new heading', () => {
    render(<Heading name={`World`}/>);
    const linkElement = screen.getByText(/hello world/i);
    expect(linkElement).toBeInTheDocument();
   })

test("renders heading with argument", () => {
   render(<Heading name={`World`}/>);
   const linkElement = screen.getByText(/hello world/i);
   expect(linkElement).toBeInTheDocument();
})