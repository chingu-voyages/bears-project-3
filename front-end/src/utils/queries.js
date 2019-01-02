import gql from 'graphql-tag';

export const GET_EVENTS = gql`
  {
    events {
      id
      name
      category
      name
      description
      primaryImage
      images
      
      location {
        city
      }
      comments {
        commentBody
      }
    }
  }
`
