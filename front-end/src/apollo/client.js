// Apollo
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink, split } from 'apollo-client-preset'
import { getMainDefinition } from 'apollo-utilities'
import { withClientState } from 'apollo-link-state'

//-- cache strategy
const cache = new InMemoryCache()

//-- compile stateLink
const stateLink = withClientState({
  cache
  //resolvers,
  //defaults
})

const backendOptions = {
  httpPort: 3030,
  endpointSlug: '/',
  apolloHost: 'localhost',
  httpGqlEndpoint: `http://localhost:3030`,
}

//-- compile httpLink with auth middleware
const httpLink = new HttpLink({
  uri: backendOptions.httpGqlEndpoint
})

const middleware_authLink = new ApolloLink((operation, forward) => {
  // const token = localStorage.getItem(AUTH_TOKEN) // TODO: Add session cookie to remove JWT from localStorage
  const token = 'scnskcskndcskjdncskjcnskcnjsknskcnsdn'
  const authHeader = token ? `Bearer ${token}` : null
  operation.setContext({
    headers: {
      authorization: authHeader
    }
  })
  return forward(operation)
})

const httplinkWithAuth = middleware_authLink.concat(httpLink)

//-- split streams
const link = ApolloLink.from([
  stateLink,
  split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query)
      return kind === 'OperationDefinition' && operation === 'subscription'
    },
    // wsLink,
    httplinkWithAuth,
    httplinkWithAuth
  )
])

//-- build client
const client = new ApolloClient({
  link,
  cache,
  connectToDevTools: true,
  queryDeduplication: true,
  onError: error => console.error('Error in query or mutation: ', error)
})

export default client
