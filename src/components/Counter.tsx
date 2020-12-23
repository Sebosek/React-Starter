import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { increment as inc, decrement as dec, CounterActionTypes } from '../actions';
import { RootState } from '../store';

// Component props
interface ComponentProps {} // eslint-disable-line @typescript-eslint/no-empty-interface

// Map Redux state and dispatch to the component
const mapStateToProps = ({ counter } : RootState) => ({ count: counter.count });

const mapDispatchToProps = (dispatch: (action: CounterActionTypes) => void) => ({
  increment: () => dispatch(inc(1)),
  decrement: () => dispatch(dec(1)),
});

// Create connector and derive a type
const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;

// Combined the component props with the Redux props
type CounterProps = ComponentProps & ReduxProps;

// Final component
export const Counter: React.FunctionComponent<CounterProps> = (
  { count, increment, decrement }: CounterProps,
) => (
  <>
    <div>
      Current {process.env.COUNTER_TERM || 'count'} is <span data-ui-test="count">{count}</span>
    </div>
    <button type="button" onClick={increment} data-ui-test="increment">Increment</button>
    <button type="button" onClick={decrement} data-ui-test="decrement">Decrement</button>
  </>
);

export default connector(Counter);
