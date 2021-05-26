import React from 'react';
import { render, screen } from '@testing-library/react';
import Album from "./Album";

describe('Album', () => {
    test('renders genesis block link', () => {
        render(<Album />);
        const linkElement = screen.getByText(/Genesis Block/i);
        expect(linkElement).toBeInTheDocument();
    });

    describe('Snackbar', () => {
        test('should render wrong answer on startup', () => {
            render(<Album />);
            const linkElement = screen.getByText(/You got the wrong answer!/i);
            expect(linkElement).toBeInTheDocument();
        })
    })
})


