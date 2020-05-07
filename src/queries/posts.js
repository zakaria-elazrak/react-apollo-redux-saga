import { gql } from 'apollo-boost';

export const POSTS_QUERY = gql`
        subscription{
           posts {
                id
                title
                body
                created_at
                user {
                name
                }
            }  
        }
        `;

export const INSERT_POST = gql`
mutation insert_posts( $title: String!, $body: String!) {
  insert_posts(objects: {title: $title, body:$body, user_id: "auth0|5eb0d9806636510be9f866d5"}) {
    returning {
      body
      created_at
      id
      title
      user {
        name
      }
    }
  }
}
`

export const DELETE_POST = gql`
mutation MyMutation($id: Int!) {
  delete_posts(where: {id:{ _eq: $id}}) {
    returning {
      id
    }
  }
}
`

