const graphql = require('graphql');

const Mutation = require('./mutation');
const RootQuery = require('./root_query');

module.exports = new graphql.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});