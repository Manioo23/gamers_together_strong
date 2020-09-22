import ApolloClient from 'apollo-client';
import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { ConnectedRouter } from 'react-router-redux';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Provider } from 'react-redux';

import Routes from './Routes';

import { store, history } from '../store/store';

import '../styles/index.scss';

const cache = new InMemoryCache();
const link = new HttpLink({
	uri: 'http://localhost:4000/graphql',
	fetchOptions: {
		mode: 'cors'
	}
});

const client = new ApolloClient({
	cache, 
	link,
	dataIdFromObject: o => o.id,
});

class App extends Component {
	render() {
		return (
			<Provider store={ store }>
				<ApolloProvider client={client}>
					<ConnectedRouter history={ history }>
						{ Routes }
					</ConnectedRouter>
				</ApolloProvider>
			</Provider>
		);
	}
}

export default App;