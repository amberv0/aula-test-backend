
## Installation
`npm i` to install npm packages. Requires some recent Node version supporting ES6 syntax.

## Running
`node index` to run the backend

`PORT=8080 node index` to specify the port

## API

`GET /api/songs` returns list of songs along with metadata.  
Example: `GET http://localhost:8080/api/songs`

`GET /api/songs/{filename}` returns data for a specific song with filename `filename`  
Example: `GET http://localhost:8080/api/songs/song2.mp3`

`GET /songs/{filename}` serves a music file  
Example: `GET http://localhost:8080/songs/song2.mp3`

## TODOs & future improvements
* Instead of serving songs with `express.static`, use nginx, s3+cloudfront, or smth else.
* Return full song urls
* Implement possibility to modify songs' metadata and remove them
* Add fetching songs that match specific metadata query, for example songs being part of a specific album or search by title
* Use websockets to let users know what others are currently listening
* Save stats about what songs users are listening to, the duration, etc
* Add some registration/authentication, so that eventually we can add something like Favorite songs, creating playlists and sharing them with other users
* Forbid embedding our songs on other websites