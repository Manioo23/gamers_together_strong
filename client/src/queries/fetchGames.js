import gql from 'graphql-tag';

export default gql`
{
    games(first: 5){
        id
        name    
    }
}
`;