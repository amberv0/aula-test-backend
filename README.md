
## Installation
`npm i` to install npm packages. Requires some recent Node version supporting ES6 syntax.

## Running
`node index` to run the backend

`PORT=8080 node index` to specify the port

## API

`GET /api/songs` returns list of songs along with metadata. Optional query parameters `album` and `year` allow to filter songs by album and year correspondingly.
  
Examples:  
`GET http://localhost:8080/api/songs`  
`GET http://localhost:8080/api/songs?year=2015`  
`GET http://localhost:8080/api/songs?album=Mozart Opera Rock`  
`GET http://localhost:8080/api/songs?album=Mozart Opera Rock&year=2015`

`GET /api/songs/{filename}` returns metadata for a specific song with filename `filename`  
Example: `GET http://localhost:8080/api/songs/song2.mp3`

`GET /api/favorites?userid=xxxxx` returns an array of favorite filenames. Query parameter `userid` is required to identify a user, and if not provided 401 error will be returned.  
Example: `GET http://localhost:8080/api/favorites?userid=amberv0`  

`PUT /api/favorites/{filename}?userid=xxxxx` adds a specific `filename` to the favorite list and returns the new favorites list. Does nothing if the `filename` is already in favorites. 
 Query parameter `userid` is required to identify a user, and if not provided 401 error will be returned.  
Example: `PUT http://localhost:8080/api/favorites/song2.mp3?userid=amberv0`  

`DELETE /api/favorites/{filename}?userid=xxxxx` removes a specific `filename` from the favorite list and returns the new favorites list. Does nothing if the `filename` is not in favorites. 
 Query parameter `userid` is required to identify a user, and if not provided 401 error will be returned.  
Example: `DELETE http://localhost:8080/api/favorites/song2.mp3?userid=amberv0`  

`GET /songs/{filename}` serves a music file  
Example: `GET http://localhost:8080/songs/song2.mp3`

## TODOs & future improvements
* Instead of serving songs with `express.static`, use nginx, s3+cloudfront, or smth else.
* Return full song urls
* Implement possibility to modify songs' metadata and remove them
* Add text search by title title
* Use websockets to let users know what others are currently listening
* Save stats about what songs users are listening to, the duration, etc
* Add possibility to create playlists and share them with other users
* Forbid embedding our songs on other websites
* Add possibility to upload new songs
* Add tests