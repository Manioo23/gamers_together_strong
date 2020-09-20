const graphql = require('graphql');
const axios = require('axios');
const { 
    GraphQLObjectType, 
    GraphQLList,
    GraphQLString,
    GraphQLInt
} = graphql;

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3004/users/${args.id}`).then(res => res.data);
            }
        },
        users: {
            type: new GraphQLList( UserType ),
            args: { first: { type: GraphQLInt}, offset: { type: GraphQLInt } },
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3004/users/${args.first ? `?_limit=${args.first}` : ''}`).then(res => res.data);
            }
        },
        game: {
            type: GameType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3004/games/${args.id}`).then(res => res.data);
            }
        },
        games: {
            type: new GraphQLList( GameType ),
            //UGLY: "first" and "offset" args are pretty fucked up names should be changed
            args: { first: { type: GraphQLInt}, offset: { type: GraphQLInt } },
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3004/games/${args.first ? `?_limit=${args.first}` : ''}`).then(res => res.data);
            }
        },
        genre: {
            type: GenreType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3004/genres/${args.id}`).then(res => res.data);
            }
        },
        genres: {
            type: new GraphQLList( GenreType ),
            //UGLY: "first" and "offset" args are pretty fucked up names should be changed
            args: { first: { type: GraphQLInt}, offset: { type: GraphQLInt } },
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3004/genres/${args.first ? `?_limit=${args.first}` : ''}`).then(res => res.data);
            }
        },
        opinion: {
            type: OpinionType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3004/opinions/${args.id}`).then(res => res.data);
            }
        },
        opinions: {
            type: new GraphQLList( OpinionType ),
            args: { userId: { type: GraphQLString } },
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3004/opinions?aboutId=${args.userId}`).then(res => res.data);
            }
        }
    })
});

module.exports = RootQuery;

const UserType = require('./user_type');
const GameType = require('./game_type');
const GenreType = require('./genre_type');
const OpinionType = require('./opinion_type');