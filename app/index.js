const db = require('./models');
const express = require('express');
const app = express();
// app.use(bodyParser.json());

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
        // process.exit(); //this line shuts down the server???
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
        // process.exit();
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
    
    // drId = parseInt(req.params.id);
    
    db.daily_record.destroy({
        where: {id: parseInt(req.params.id)}
    }).then(records_deleted=>{
        res.send(records_deleted+' records have been deleted.');
    });
});

// app.delete('/daily_records/delete', (req, res) => {
    
//     db.daily_record.destroy({
//         where: {id: }
//     }).then(records_deleted=>{
//         res.send(records_deleted+' records have been deleted.');
//     });
// });

app.listen(8000);