import gql from 'graphql-tag'

const loginUser = gql`
	mutation LoginMutation($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			AuthToken
		}
	}
`

export { loginUser }
