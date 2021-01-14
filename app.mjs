import express from 'express';

import connectToDatabase from './helpers.mjs';

const app = express();

app.get('/',(req, res) => {
    res.send('Hello Docker');
});