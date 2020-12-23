import { test, expect } from '@jest/globals';
import { counterReducer, initCounterState } from './counter';
import { CounterActionType } from '../actions';

test('Should setup default init state', () => {
  const state = counterReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual(initCounterState);
});

test('Should increment counter', () => {
  const amount = 1;
  const state = counterReducer({ count: 0 }, { type: CounterActionType.Increment, amount });

  expect(state.count).toBe(amount);
});

test('Should decrement counter', () => {
  const amount = 1;
  const state = counterReducer({ count: 2 }, { type: CounterActionType.Decrement, amount });

  expect(state.count).toBe(amount);
});

test('Should reset counter', () => {
  const amount = 0;
  const state = counterReducer({ count: 2 }, { type: CounterActionType.Init });

  expect(state.count).toBe(amount);
});
