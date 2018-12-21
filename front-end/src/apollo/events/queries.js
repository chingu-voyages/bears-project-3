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
	query GetAllEVentsAfterToday($where: EventWhereInput!) {
		events(where: $where) {
			...eventFields
		}
	}
`

const getEvent = gql`
	${eventFragment}
	query GetEventBy($where: EventWhereUniqueInput!) {
		event(where: $where) {
			...eventFields
		}
	}
`

const similarEvents = gql`
	${eventFragment}
	query GetSimilarEvents($where: EventWhereInput!) {
		events(where: $where) {
			...eventFields
		}
	}
`

export { allEvents, getEvent, similarEvents }
