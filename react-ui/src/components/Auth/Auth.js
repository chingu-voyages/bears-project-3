import hello from 'hellojs';
import { history } from '../../store/store';
import config from '../../config/index';

export default class Auth {
	accessToken;
	idToken;
	expiresAt;

	/**
   * Initialize class
   */
	constructor() {
		this.hello = hello.init({
			google: config.GOOGLE_CLIENT_ID,
			facebook: config.FACEBOOK_APP_ID || ''
		});
	}

	/**
   * Utility method to login with provider/s
   * @param {*} provider required
   * @param {*} cb 
   */
	loginWith(provider, cb) {
		console.log(provider);
		const options = {
			display: 'popup',
			scope: 'email',
			redirect_uri: '/auth/callback'
		};

		// Logs in with provider, using options above and optional callback provided in args.
		return this.hello.login(provider, options, cb).then(response => {
			// Perhaps handle analytics and logging requests here before returning to caller...
			console.log('Auth logged in with: ', response);
			return response;
		});
	}

	/**
   * Checks provider for session info (authenticated)
   */
	getAuthResponse = provider => {
		return this.hello.getAuthResponse(provider);
	};

	/**
   * Return access token for current session
   */
	getAccessToken = () => {
		return this.accessToken;
	};

	/**
   * not yet implemented method....
   * @param {*} authResult 
   */
	setSession(authResult) {
		// Set isLoggedIn flag in localStorage
		localStorage.setItem('token', authResult.token);

		// Set the time that the access token will expire at
		// let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
		// this.accessToken = authResult.accessToken;
		// this.idToken = authResult.idToken;
		// this.expiresAt = expiresAt;

		// navigate to the home route
		history.replace('/');
	}

	/**
   * Stubbed method to renew session...
   */
	renewSession() {}

	logout(provider, cb) {
		return this.hello.logout(provider, {}, cb).then(() => {
			this.accessToken = null;
			this.idToken = null;
			this.expiresAt = 0;

			// Remove token from localStorage
			localStorage.removeItem('token');

			// navigate to the home route
			history.replace('/');
		});
		// Remove tokens and expiry time
	}

	isAuthenticated(provider) {
		// Check whether the current time is past the
		// access token's expiry time
		// let expiresAt = this.expiresAt;
		// return new Date().getTime() < expiresAt;
		return this.hello(provider).getAuthResponse();
	}
}
