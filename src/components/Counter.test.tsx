import React from 'react';
import { describe, test, jest } from '@jest/globals';
import events from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import { Store } from 'redux';

import ConnectedCounter, { Counter } from './Counter';
import inElements from '../etc/tests/helpers/in-elements';
import { initCounterState } from '../reducers';
import { render, withStore } from '../etc/tests/ReduxRenderer';
import { decrement, increment } from '../actions';

test('The default component state should contain the expected text', () => {
  const CONTENT = 'Current count is 0';
  const handleIncrement = jest.fn();
  const handleDecrement = jest.fn();
  const { getByText } = render(
    <Counter
      count={0}
      increment={handleIncrement}
      decrement={handleDecrement}
    />,
  );

  expect(getByText(inElements(CONTENT))).toBeInTheDocument();
});

test('After click to the \'Increment\' button increment handler should be called', () => {
  const handleIncrement = jest.fn();
  const handleDecrement = jest.fn();
  const { getByText } = render(
    <Counter
      count={0}
      increment={handleIncrement}
      decrement={handleDecrement}
    />,
  );

  const button = getByText(/Increment/i);
  events.click(button);

  expect(handleIncrement).toBeCalled();
  expect(handleDecrement).not.toBeCalled();
});

test('After click to the \'Decrement\' button decrement handler should be called', () => {
  const handleIncrement = jest.fn();
  const handleDecrement = jest.fn();
  const { getByText } = render(
    <Counter
      count={0}
      increment={handleIncrement}
      decrement={handleDecrement}
    />,
  );

  const button = getByText(/Decrement/i);
  events.click(button);

  expect(handleDecrement).toBeCalled();
  expect(handleIncrement).not.toBeCalled();
});

const configureStoreFactory = configureStore([]);
describe('Connected with redux store', () => {
  let store: Store;

  beforeEach(() => {
    store = configureStoreFactory({ counter: initCounterState });

    store.dispatch = jest.fn();
  });

  it('Should render component with given state from Redux store', () => {
    const CONTENT = 'Current count is 0';

    const { getByText } = withStore(<ConnectedCounter />, { store });
    expect(getByText(inElements(CONTENT))).toBeInTheDocument();
  });

  it('Should dispatch correct action after click to the \'Increment\' button', () => {
    const { getByText } = withStore(<ConnectedCounter />, { store });

    const button = getByText(/Increment/i);
    events.click(button);

    expect(store.dispatch).toBeCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(increment(1));
  });

  it('Should dispatch correct action after click to the \'Decrement\' button', () => {
    const { getByText } = withStore(<ConnectedCounter />, { store });

    const button = getByText(/Decrement/i);
    events.click(button);

    expect(store.dispatch).toBeCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(decrement(1));
  });
});
