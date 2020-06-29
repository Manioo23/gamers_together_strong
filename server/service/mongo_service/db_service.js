const mongoose = require('mongoose');
const { User } = require('./models');
const { result } = require('lodash');


const connectToDB = async () => {
    let conn;
    try {
        conn = await mongoose.connect('mongodb://127.0.0.1:27017/gamer-graph', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
    } catch(e) {
        console.error("[DBs] Could not connect to database");
        console.log(e);
        conn.disconnect();
    }

    return conn;
}

const createUser = async (username, description = "", discordName = "") => {
    let newUser = new User({
        username,
        description,
        discord_name: discordName
    });

    await connectToDB();
    try {
        let result = await newUser.save();
        return result;
    } catch(e) {
        console.error("[DBs] Could not save new user to database");
        console.log(e);
    } finally {
        mongoose.disconnect();
    }
}

const deleteUser = async (userObj) => {
    await connectToDB();
    try {
        await User.deleteOne( userObj.id ? {_id: userObj.id} : {username: userObj.username});
        return true;
    } catch(e) {
        console.error("[DBs] Could not delete user from database");
        console.log(e);
    } finally {
        mongoose.disconnect();
    }
    return false;
}

const readUser = async (userObj) => {
    await connectToDB();
    try {
        let result = await User.find({username: userObj.username});
        return result;
    } catch(e) {
        console.error("[DBs] Could not find user in database");
        console.log(e);
    } finally {
        mongoose.disconnect();
    }
}