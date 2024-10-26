import express from 'express'

import  connectToDataBase from './helpers.mjs'

const app = express()

app.get('/', (req, res) =>{
    res.send('Hello World');
});

await connectToDataBase();

app.listen(3000);