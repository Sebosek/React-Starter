import { CounterState } from '../store/types';
import {
  CounterActionType,
  CounterActionTypes,
  CounterDecrementAction,
  CounterIncrementAction,
} from '../actions';

type CounterReducer = (state: CounterState | undefined, action: CounterActionTypes) => CounterState;

export const initCounterState = { count: 0 };
export const counterReducer: CounterReducer = (
  state: CounterState = initCounterState,
  action: CounterActionTypes,
) => {
  const { type } = action;

  switch (type) {
    case CounterActionType.Init:
      return initCounterState;

    case CounterActionType.Increment: {
      const { amount } = action as CounterIncrementAction;
      return { count: state.count + amount };
    }

    case CounterActionType.Decrement: {
      const { amount } = action as CounterDecrementAction;
      return { count: state.count - amount };
    }

    default:
      return state;
  }
};
