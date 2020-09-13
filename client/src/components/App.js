import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import Main from './Main';
import Routes from './Routes';

import { store, history } from '../store';

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
	link
});

class App extends Component {
	render() {
		return (
			<Provider store={ store }>
				<ApolloProvider client={client}>
					<Main>
						<ConnectedRouter history={ history }>
							{ Routes }
						</ConnectedRouter>
					</Main>
				</ApolloProvider>
			</Provider>
		);
	}
}

export default App;