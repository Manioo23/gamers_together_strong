const graphql = require('graphql')
const axios = require('axios');

const {
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString
} = graphql;

const GenreType = new GraphQLObjectType({
    name: "Genre",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        games: { 
            type: new GraphQLList(GameType),
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3000/genres/${parentValue.id}/games`).then(res => res.data)
            }
        }
    })
});

const GameType = new GraphQLObjectType({
    name: "Game",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        genre: {
            type: GenreType,
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3000/genres/${parentValue.genreId}`).then(res => res.data)
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3000/games/${parentValue.id}/playes`)
                    .then(res => res.data)
                    .then(arr => arr.map(play => axios.get(`http://localhost:3000/users/${play.userId}`).then(res => res.data)))
            }
        }
    })
});


const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        username: { type: GraphQLString },
        description: { type: GraphQLString },
        discordName: { type: GraphQLString },
        games: {
            type: new GraphQLList(GameType),
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3000/users/${parentValue.id}/playes`)
                    .then(res => res.data)
                    .then(arr => arr.map(play => axios.get(`http://localhost:3000/games/${play.gameId}`).then(res => res.data)))
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addGame: {
            type: GameType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString)},
                description: { type: GraphQLString },
                genreId: { type: GraphQLString }
            },
            resolve(parentValue, {name, description, genreId}) {
                return axios.post(`http://localhost:3000/games/`, {
                    name,
                    description,
                    genreId
                }).then(res => res.data)
            }
        },
        deleteGame: {
            type: GameType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parentValue, {id} ) {
                return axios.delete(`http://localhost:3000/games/${id}`).then(res => res.data)
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
            resolve(parentValue, {id, name, description, genreId}) {
                return axios.patch(`http://localhost:3000/games/${id}`, args).then(res => res.data)
            }
        }
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3000/users/${args.id}`).then(res => res.data);
            }
        },
        game: {
            type: GameType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3000/games/${args.id}`).then(res => res.data)
            }
        },
        genre: {
            type: GenreType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3000/genres/${args.id}`).then(res => res.data)
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});