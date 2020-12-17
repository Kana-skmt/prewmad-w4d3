let library = {

    songs: { s01: { id: "s01",
                     name: "Money",
                     artist: "Pink Floyd",
                     album: "Dark Side of the Moon" },
              s02: { id: "s02",
                     name: "Blessings",
                     artist: "Chance, The Rapper",
                     album: "Colouring Book"},
              s03: { id: "s03",
                     name: "Purple Haze",
                     artist: "Jimi Hendrix",
                     album: "Are You Experienced"},
              s04: { id: "s04",
                     name: "Little Wing",
                     artist: "Jimi Hendrix",
                     album: "Are You Experienced"},
            },
  
  
    playlists: { p01: { id: "p01",
                        name: "Coding Jamz",
                        tracks: ["s01", "s03"]
                      },
                 p02: { id: "p02",
                        name: "Music to cry to",
                        tracks: ["s02"]
                      }
               }, 
       
       printKeys: function() {
              let result = [];
              let keys = Object.keys(library.songs);
              for (i = 0; i < keys.length; i++) {
                     console.log(keys[i]);
              }
       }
}



//console.log() the name of the third song on the songlist
console.log(library.songs.s03.name);

//console.log() the artist of the first track in the song list
console.log(library.songs.s01.artist);

//console.log() the entire p01 object
console.log(library.playlists.p01);

//consoel.log(the list of song IDs)
library.printKeys()

//add a song, and confirm that it was added by console logging it a second time. 
let newSong = {"s05":{id: "s05",
       name: "KILL THIS LOVE",
       artist: "BLACK PINK",
       album: "BLACK PINK YOUR AREA"}
}
library.songs = newSong;
console.log(library.songs.s05);