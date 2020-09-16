const graphql = require('graphql');
const axios = require('axios');
const { 
    GraphQLObjectType, 
    GraphQLList,
    GraphQLString 
} = graphql;

const GameType = new GraphQLObjectType({
    name: "Game",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        genre: {
            type: GenreType,
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3004/genres/${parentValue.genreId}`).then(res => res.data)
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3004/games/${parentValue.id}/plays`)
                .then(res => res.data)
                .then(arr => arr.map(play => axios.get(`http://localhost:3004/users/${play.userId}`).then(res => res.data)))
            }
        }
    })
});

module.exports = GameType;

const GenreType = require('./genre_type');
const UserType = require('./user_type');