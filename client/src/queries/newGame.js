import gql from 'graphql-tag';

export default gql`
    mutation AddGame($name: String!, $description: String, $genreId: String) {
        addGame(
            name: $name, 
            description: $description, 
            genreId: $genreId
        ) {
            id,
            name
        }
    }
`;