const express = require('express');
const fs = require('fs');
const _ = require('lodash');
const middleware = require('./middleware');
const PORT = process.env.PORT || 8080;
const app = express();

const songsList = JSON.parse(fs.readFileSync('songs.json', 'utf8')); //let it be like establishing a connection to a db
const favorites = {}; //let it be like imitating some db table, with keys being user ids and values being arrays of filenames

app.use('/songs', express.static('songs'));

app.get('/api/songs', function(req, res){
    let result = songsList;
    const {album, year} = req.query;
    
    if (album){
        result = _.filter(result, {album})
    }
    if (year){
        result = _.filter(result, {year})
    }
    return res.json(result);
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

app.get('/api/favorites', middleware.isAuthenticated, function(req, res){
    return res.json(favorites[req.user.id] || [])
});

app.put('/api/favorites/:filename', middleware.isAuthenticated, function(req, res){
    const userId = req.user.id;
    const filename = req.params.filename;
    
    if (!favorites[userId]){
        favorites[userId] = [filename]
    }else if (!favorites[userId].includes(filename)){ //avoid adding the same song to favorites twice. Silently ignore if it happens
        favorites[userId].push(filename)
    }
    
    return res.json(favorites[userId])
});

app.delete('/api/favorites/:filename', middleware.isAuthenticated, function(req, res){
    const userId = req.user.id;
    const filename = req.params.filename;
    
    if (!favorites[userId]){
        favorites[userId] = []
    }else{
        _.pull(favorites[userId], filename)
    }
    
    return res.json(favorites[userId])
});

app.listen(PORT, () =>{
    console.log(`Running on ${PORT}`);
});


