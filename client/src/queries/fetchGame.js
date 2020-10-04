import gql from 'graphql-tag';

export default gql`
    query FetchGame($id: String!){
	    game(id: $id) {
            name
            description
            imgUrl
            genre {
                name
            }
            users {
                username
            }
        }  
    }
`;