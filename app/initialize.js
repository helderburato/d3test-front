import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
// import Counter from './components/Counter';
import HomeContainer from './containers/HomeContainer';
import * as SDKInitializer from './libs/SDKInitializer';

const store = createStore(
  reducers,
  applyMiddleware()
);

const App = () =>
	<Provider store={store}>
		<HomeContainer />
	</Provider>;

ReactDOM.render(<App />, document.querySelector('#app'));

SDKInitializer.initSDKs();