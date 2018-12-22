import gql from 'graphql-tag'

const ownerFragment = gql`
	fragment ownerFields on User {
		id
		name
		avatarURI
	}
`
const eventFragment = gql`
	${ownerFragment}
	fragment eventFields on Event {
		id
		name
		images
		id
		name
		category
		description
		primaryImage
		eventDate

		createdAt

		images
		owner {
			...ownerFields
		}
		members {
			...ownerFields
		}
	}
`

const allEvents = gql`
	${eventFragment}
	query GetAllEVents($where: EventWhereInput!, $orderBy: EventOrderByInput) {
		events(where: $where, orderBy: $orderBy) {
			...eventFields
		}
	}
`

const getEvent = gql`
	${eventFragment}
	query GetEvent($where: EventWhereUniqueInput!) {
		event(where: $where) {
			...eventFields
		}
	}
`

export { allEvents, getEvent }
