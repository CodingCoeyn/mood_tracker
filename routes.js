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
            mood: req.body.mood,
            ratingId: parseInt(req.body.ratingId),
            createdAt: Date.now(),
            updatedAt: Date.now()
        }).then(record_created=>{
            res.send(record_created);
        });

    } catch (error) {
        console.error(error.message);
    }
 
});

// READ
app.get('/daily_records', (req,res) => {
    
    try {
        db.daily_record.findAll({
            include:[{
                model: db.rating,
            }]
        }).then(daily_records=>{
            daily_records.sort((d1, d2) =>{
                if(d1.createdAt > d2.createdAt) return -1;
                if(d1.createdAt < d2.createdAt) return 1;
                return 0;
            });
            res.send(daily_records);
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
        
        db.daily_record.findAll({
            include:[{
                model: db.rating,
                order: [
                    ['createdAt', 'ASC']
                ]
            }]
        }).then(daily_records=>{
            var rating_array = [];
            daily_records.forEach(daily_record => {
                rating_array.push(
                    [new Date(daily_record.createdAt).valueOf(), daily_record.rating.value]
                );
            });
            res.send(rating_array);
        });

    } catch (error) {
        console.error(error.message);
    }
});



// UPDATE

app.put('/daily_records/:id', (req, res) => {

    try {
        console.log("updated", req.body.id );
        db.daily_record.update({
            mood: req.body.mood,
            ratingId: parseInt(req.body.ratingId),
            updatedAt: new Date().valueOf()
        },{
            where:{id: parseInt(req.body.id)}
        }).then(records_changed=>{

            // res.send(records_changed+' records have been updated.');
            console.log(records_changed+' records have been updated.');
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

app.listen(process.env.PORT || 8000,
    () =>{
        console.log("Server is running...");
    }
);