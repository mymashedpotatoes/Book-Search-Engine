import { gql } from '@apollo/client';

// executes the 'me' query set up using apollo server
export const GET_ME = gql`
  me {
    _id
    username
    email
    bookCount
    savedBooks {
        authors
        description
        bookId
        image
        link
        title
    }
    }
  }
`;