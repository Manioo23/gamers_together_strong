import gql from 'graphql-tag';

export default gql`
    query FetchUser($id: String){
        user(id: $id) {
            username,
            description,
            discordName,
            games {
                name
            }
        }  
    }  
`;