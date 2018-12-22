// Apollo
import ApolloClient from 'apollo-boost';

//-- build client

export default new ApolloClient({
  uri: 'http://localhost:3030',
  // connectToDevTools: true,
  // queryDeduplication: true,
  onError: (error) => console.error('Error in query or mutation: ', error),
});
