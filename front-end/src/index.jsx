import React from 'react'
import { render } from 'react-dom'
import { Route, Router } from 'react-router-dom'
// Redux
import { Provider } from 'react-redux'
import store, { history as reduxHistory } from './store/store'

// Apollo

import { ApolloProvider } from 'react-apollo'
import client from './apollo/client'
// CSS
import './index.css'
import './theme/dist/semantic.css'
// TODO: After building custom Semantic-UI theme w/ Gulp, include minified CSS file here

import App from './components/App/App'
import * as serviceWorker from './serviceWorker'

// Container Components
import HomePage from './components/HomePage/HomePage'
import Signup from './components/Auth/SignUp'
import SignIn from './components/Auth/SignIn'
import Auth from './components/Auth/Auth'
import Callback from './components/Callback'

// Create new "global" instance of Auth and pass as prop
const auth = new Auth()

const handleAuthentication = (nextState, replace) => {
	if (/access_token|id_token|error/.test(nextState.location.hash)) {
		auth.handleAuthentication()
	}
}

const target = document.getElementById('root')

render(
	<ApolloProvider client={client}>
		<Provider store={store}>
			<Router history={reduxHistory}>
				{/* Pass Auth prop to app */}
				<App auth={auth}>
					{/* Match all routes exactly within defined array */}
					<Route
						exact
						path={['/', '/find', '/find/calendar', '/event/:eventId']}
						component={HomePage}
					/>
					<Route exact path="/signup" component={Signup} />
					<Route exact path="/signin" component={SignIn} />
					<Route
						path="/auth/callback"
						render={props => {
							handleAuthentication(props)
							return <Callback {...props} />
						}}
					/>
				</App>
			</Router>
		</Provider>
	</ApolloProvider>,
	target
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
