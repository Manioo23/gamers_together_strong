const mongoose = require("mongoose");

const User = mongoose.model('User', {
    username: {
        type: String,
        required: [true, "Username must be specified?"],
        unique: true
    },
    discord_name: {
        type: String,
    },
    description: {
        type: String
    }
});

const Opinion = mongoose.model('Opinion', {
    from: {
        type: String,
        required: [true, "Who did send this opinion?"],
    },
    about: {
        type: String,
        required: [true, "Who is this opinion about?"]
    },
    gameID: {
        type: String,
        required: [true, "What game is this opinion about?"]
    },
    value: {
        type: Number,
        min: [1, "Opinion can't have value smaller then 1!"],
        max: [10, "10 is the highest value for the opinion!"]
    },
    description: {
        type: String
    },
    visible: {
        type: Boolean,
        required: [true, "Visibility has to be specified."]
    }
})

const Game = mongoose.model('Game', {
    name: {
        type: String,
        required: [true, "Name of the game must be provided."]
    },
    description: {
        type: String
    },
    genre: {
        type: String,
        required: [true, "Genre of the game must be provided."]
    }
})

module.exports = {
    User,
    Opinion
}