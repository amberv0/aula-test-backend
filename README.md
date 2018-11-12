
##Installation
`npm i` to install npm packages

##Running
`node index` to run the backend

`PORT=8080 node index` to specify the port

##API

`GET /api/songs` returns list of songs along with metadata.  
Example: `GET http://localhost:8080/api/songs`

`GET /api/songs/{filename}` returns data for a specific song with filename `filename`  
Example: `GET http://localhost:8080/api/songs/song2.mp3`

`GET /songs/{filename}` serves a music file  
Example: `GET http://localhost:8080/songs/song2.mp3`

##TODOs
* Instead of serving songs with `express.static`, use nginx, s3+cloudfront, or smth else
* Implement possibility to modify songs' metadata and remove them
* Add fetching songs that match specific metadata query, for example songs being part of a specific album