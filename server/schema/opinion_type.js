const graphql = require('graphql');
const axios = require('axios');
const { 
    GraphQLObjectType, 
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean
} = graphql;

const OpinionType = new GraphQLObjectType({
    name: 'Opinion',
    fields: () => ({
        id: { type: GraphQLString },
        from: { 
            type: UserType,
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3004/users/${parentValue.fromId}`).then(res => res.data)
            } 
        },
        about: { 
            type: UserType,
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3004/users/${parentValue.aboutId}`).then(res => res.data)
            }
        },
        game: {
            type: GameType,
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3004/games/${parentValue.gameId}`).then(res => res.data)
            }
        },
        value: { type: GraphQLInt },
        description: { type: GraphQLString },
        visible: { type: GraphQLBoolean }
    })
});

module.exports = OpinionType;

const UserType = require('./user_type');
const GameType = require('./game_type');