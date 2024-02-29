import { render } from 'preact'
import { Provider } from 'react-redux';
import { App } from './app.jsx'
import './index.css'
import { store } from './Redux/store.js';

// render(<App />, document.getElementById('app'))

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );