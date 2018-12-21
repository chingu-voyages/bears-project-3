import gql from 'graphql-tag'

const allEvents = gql`
	{
		events {
			id
			owner {
				name
				avatarURI
			}
			images
		}
	}
`

export { allEvents }
