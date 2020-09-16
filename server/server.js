const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./schema/schema');
const cors = require('cors')

const app = express();
app.use(cors())
//DEBUG: This is here only for the debugging purpouse
app.use('/graphql', (req, res, next) => setTimeout(next, 1000))
app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));


app.listen(4000, () => {
    console.log("Server listening on port 4000 ")
})