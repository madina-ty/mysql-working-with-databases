const express = require('express');
const pool = require('./db');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', async (req,res)=>{
    const [results]= await pool.query('SELECT * FROM `posts`');
    res.send(results);
});

app.post('/addpost', async (req, res) => { 
    const { data } = req.body; 
    const query = `INSERT INTO posts (author, text, img) VALUES (?, ?, ?)`; 
    const [results] = await pool.query(query, [data.author, data.text, data.img]) 
});

app.listen(3000, ()=>{
    console.log('server started!')
});