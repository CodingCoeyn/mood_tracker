const cors = require("cors");
const db = require('./models');
const sequelize = require('sequelize');
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello, Mahassin!');
});

// CREATE
app.post('/daily_records', (req,res) => {
    
    try {
        
        db.daily_record.create({
            mood: req.query.mood,
            ratingId: parseInt(req.query.ratingId),
            createdAt: new Date(),
            updatedAt: new Date()
        }).then(record_created=>{
            res.send(record_created)
        });
    } catch (error) {
        console.error(error.message);
    }


});

// READ
app.get('/daily_records', (req,res) => {
    
    try {
        db.daily_record.findAll().then(daily_records=>{
            res.send(daily_records)
        });
        
    } catch (error) {
        console.error(error.message);
    }

});

app.get('/daily_records/:id', (req,res) => {

    try {
        
        db.daily_record.findOne({
            where:{id: parseInt(req.params.id)}
        }).then(found_record=>{
            res.send(found_record)
            
        });
    } catch (error) {
        console.error(error.message);
    }


});

app.get('/ratings', (req,res) => {
    
    try {
      
        db.rating.findAll().then(ratings=>{
            res.send(ratings)
        });
    } catch (error) {
        console.error(error.message);
    }
});


// UPDATE

app.put('/daily_records/:id', (req, res) => {

    try {
        
        db.daily_record.update({
            mood: req.query.mood,
            ratingId: parseInt(req.query.ratingId),
            updatedAt: new Date()
        },{
            where:{id: parseInt(req.params.id)}
        }).then(records_changed=>{
            res.send(records_changed+' records have been updated.')
            // 
        });
    } catch (error) {
        console.error(error.message);     
    }
    

});

// DESTROY

app.delete('/daily_records/:id', (req, res) => {

    try {
        db.daily_record.destroy({
            where: {id: parseInt(req.params.id)}
        }).then(records_deleted=>{
            res.send(records_deleted+' records have been deleted.')
            // 
        });
        
    } catch (error) {
        console.error(error.message);
    }
    

});

app.delete('/daily_records', (req, res) => {

    try {
        
        db.daily_record.truncate().then(deleted_records =>{
            res.send("All records have been deleted.")
        });
    } catch (error) {
        console.error(error.message);        
    }
    
    
});

app.listen(8000);