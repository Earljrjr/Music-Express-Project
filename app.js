const http = require ('http');

const hostname = '127.0.0.1';
const port = '3000'

const express = require('express');
const app = express();

const sever = hhtp.createSever(app);

app.get('/' , (req,res) => {
    res.send('Bossie from Baton Rogue La, been thuggin since a lil one');
});