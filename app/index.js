const db = require('./models');
const express = require('express');
const axios = require('axios');
const app = express();
const cors = require("cors");

app.use(cors());
// app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello, Mahassin!');
});

// CREATE
app.post('/daily_records', (req,res) => {

    db.daily_record.create({
        mood: req.query.mood,
        ratingId: parseInt(req.query.ratingId),
        createdAt: new Date(),
        updatedAt: new Date()
    }).then(record_created=>{
        res.send(record_created);
        process.exit();
    });

});

// READ
app.get('/daily_records', (req,res) => {
    
    db.daily_record.findAll().then(daily_records=>{
        res.send(daily_records);
    });

});

app.get('/daily_records/:id', (req,res) => {

    db.daily_record.findOne({
        where:{id: parseInt(req.params.id)}
    }).then(found_record=>{
        res.send(found_record);
        process.exit();
    });

});

// UPDATE

app.put('/daily_records/:id', (req, res) => {
    
    db.daily_record.update({
        mood: req.query.mood,
        ratingId: parseInt(req.query.ratingId),
        updatedAt: new Date()
    },{
        where:{id: parseInt(req.params.id)}
    }).then(records_changed=>{
        res.send(records_changed+' records have been updated.');
        // process.exit();
    });

});

// DESTROY

app.delete('/daily_records/:id', (req, res) => {
    
    db.daily_record.destroy({
        where: {id: parseInt(req.params.id)}
    }).then(records_deleted=>{
        res.send(records_deleted+' records have been deleted.');
        // process.exit();
    });

});

app.delete('/daily_records', (req, res) => {
    
    db.daily_record.truncate().then(deleted_records =>{
        res.send("All records have been deleted.");
    });
    
});

app.listen(8000);