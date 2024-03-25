const db = require('./models');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Mahassin!');
});

// CREATE
app.post('/daily_records', (req,res) => {

});

// READ
app.get('/daily_records', (req,res) => {
    
});

app.get('/daily_records/:id', (req,res) => {
    
});

// UPDATE

app.put('/daily_records/edit/:id', (req, res) => {

});

// DESTROY

app.delete('/daily_records/delete/:id', (req, res) => {

});

app.delete('/daily_records/delete', (req, res) => {

});

app.listen(8000);