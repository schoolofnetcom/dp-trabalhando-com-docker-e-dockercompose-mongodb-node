const app = require('express')();
const mongoose = require("mongoose");

app.get('/', (req, res) => {
    return res.status(200).end('GET / Route');
});

mongoose.connect('mongodb://mongo_db:27017/express-docker', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(3000, () => console.log('Express has been started..'));