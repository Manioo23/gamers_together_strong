const graphql = require('graphql');
const axios = require('axios');
const { 
    GraphQLObjectType, 
    GraphQLList,
    GraphQLString 
} = graphql;

const GameType = require('./game_type');

const GenreType = new GraphQLObjectType({
    name: "Genre",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        games: { 
            type: new GraphQLList(GameType),
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3004/genres/${parentValue.id}/games`).then(res => res.data)
            }
        }
    })
});

module.exports = GenreType;