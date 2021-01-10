import React, { FunctionComponent } from 'react';
import { Store } from 'redux';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

interface RenderParams {
  store: Store,
  options?: RenderOptions,
}

function withStore(
  ui: React.ReactElement,
  { store, ...options }: RenderParams,
): RenderResult {
  const Wrapper: FunctionComponent = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  return render(ui, { wrapper: Wrapper, ...options });
}

// re-export everything
export * from '@testing-library/react';
export { withStore };
