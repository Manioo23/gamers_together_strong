const graphql = require('graphql');
const axios = require('axios');
const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt
} = graphql;

const GameType = require('./game_type');
const OpinionType = require('./opinion_type');

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addGame: {
            type: GameType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString)},
                description: { type: GraphQLString },
                genreId: { type: GraphQLString }
            },
            resolve(parentValue, args) {
                return axios.post(`http://localhost:3004/games/`, args).then(res => res.data)
            }
        },
        deleteGame: {
            type: GameType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parentValue, {id} ) {
                return axios.delete(`http://localhost:3004/games/${id}`).then(res => res.data)
            }
        },
        updateGame: {
            type: GameType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
                name: { type: GraphQLString },
                description: { type: GraphQLString },
                genreId: { type: GraphQLString }
            },
            resolve(parentValue, args) {
                return axios.patch(`http://localhost:3004/games/${args.id}`, args).then(res => res.data)
            }
        },
        addOpinion: {
            type: OpinionType,
            args: {
                fromId: { type: new GraphQLNonNull(GraphQLString) },
                aboutId: { type: new GraphQLNonNull(GraphQLString) },
                gameId: { type: new GraphQLNonNull(GraphQLString) },
                value: { type: new GraphQLNonNull(GraphQLInt) },
                description: { type: GraphQLString },
                visible: { type: new GraphQLNonNull(GraphQLBoolean) }
            },
            resolve(parentValue, args) {
                return axios.post(`http://localhost:3004/opinions`, args).then(res => res.data)
            }
        },
        updateOpinionVisible: {
            type: OpinionType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
                visible: { type: new GraphQLNonNull(GraphQLBoolean) }
            },
            resolve(parentValue, {id, visible}) {
                return axios.patch(`http://localhost:3004/opinions/${id}`, {id, visible}).then(res => res.data)
            }
        }
    }
})

module.exports = mutation;