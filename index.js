const express = require('express');
const fs = require('fs');
const _ = require('lodash');

const PORT = process.env.PORT || 8080;
const app = express();

const songsList = JSON.parse(fs.readFileSync('songs.json', 'utf8')); //let it be like establishing a connection to a db

app.use('/songs', express.static('songs'));

app.get('/api/songs', function(req, res){
    return res.json(songsList)
});

app.get('/api/songs/:filename', function(req, res){
    let filename = req.params['filename'];
    let data = _.find(songsList, {filename});
    if (data !== undefined){
        return res.json(data)
    }else{
        return res.status(404).json({message: `there is no song with filename "${filename}"`})
    }
});

//for future possibility to modify song's metadata
app.post('/api/songs/:filename', function(req, res){
    return res.status(501).json({message: `not implemented yet`})
});

//for future possibility to delete songs
app.delete('/api/songs/:filename', function(req, res){
    return res.status(501).json({message: `not implemented yet`})
    
});

app.listen(PORT, () =>{
    console.log(`Running on ${PORT}`);
});


