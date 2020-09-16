const graphql = require('graphql');
const axios = require('axios');
const { 
    GraphQLObjectType, 
    GraphQLList,
    GraphQLString 
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLString },
        username: { type: GraphQLString },
        description: { type: GraphQLString },
        discordName: { type: GraphQLString },
        games: {
            type: new GraphQLList(GameType),
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3004/users/${parentValue.id}/plays`)
                .then(res => res.data)
                .then(arr => arr.map(play => axios.get(`http://localhost:3004/games/${play.gameId}`).then(res => res.data)))
            }
        }
    })
});

module.exports = UserType;

const GameType = require('./game_type')