import { test, expect } from '@jest/globals';
import { CounterActionType, init, increment, decrement } from './counter';

test('Should generate init action object', () => {
  const action = init();

  expect(action).toEqual({ type: CounterActionType.Init });
});

test('Should generate increment action object without argument', () => {
  const action = increment();

  expect(action).toEqual({ type: CounterActionType.Increment, amount: 1 });
});

test('Should generate increment action object with argument', () => {
  const amount = 42;
  const action = increment(amount);

  expect(action).toEqual({ type: CounterActionType.Increment, amount });
});

test('Should generate decrement action object without argument', () => {
  const action = decrement();

  expect(action).toEqual({ type: CounterActionType.Decrement, amount: 1 });
});

test('Should generate decrement action object with argument', () => {
  const amount = 42;
  const action = decrement(amount);

  expect(action).toEqual({ type: CounterActionType.Decrement, amount });
});
