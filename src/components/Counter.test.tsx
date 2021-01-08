import React from 'react';
import { test, expect, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { Counter } from './Counter';

const increment = jest.fn();
const decrement = jest.fn();

test('The default component state should be at 0 with word `count`', () => {
  render(<Counter count={0} increment={increment} decrement={decrement} />);

  const CONTENT = 'Current count is 0';
  screen.getByText((_, node) => {
    if (!node) return false;

    const hasText = (node: Element) => node.textContent === CONTENT;

    const nodeHasText = hasText(node);
    const childrenDontHaveText = Array.from(node.children).every(child => !hasText(child));

    return nodeHasText && childrenDontHaveText;
  });
});
