import gql from 'graphql-tag';

export default gql`
    query FetchUsers{
        users(first: 5) {
            id
            username
            description
            discordName
            imgUrl
            games {
                name
            }
        }
    }  
`;