export enum CounterActionType {
  Init = 'init',
  Increment = 'increment',
  Decrement = 'decrement',
}

// Action types
export interface CounterInitAction {
  type: CounterActionType,
}

export interface CounterIncrementAction {
  type: CounterActionType,
  amount: number,
}

export interface CounterDecrementAction {
  type: CounterActionType,
  amount: number
}

export type CounterActionTypes
  = CounterInitAction
  | CounterIncrementAction
  | CounterDecrementAction
  | { type: '@@INIT' };

// Action creators
export const init: () => CounterActionTypes = () => ({ type: CounterActionType.Init });

export const increment: (amount?: number) => CounterActionTypes = (amount = 1) => ({
  type: CounterActionType.Increment,
  amount,
});

export const decrement: (amount?: number) => CounterActionTypes = (amount = 1) => ({
  type: CounterActionType.Decrement,
  amount,
});
