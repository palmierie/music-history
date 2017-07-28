var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.push("Irrigate - by Pig & Dan on the album Modular Baptism");
songs.unshift("Conjure Balearia - by Maceo Plex on the album Conjure One");

var removeChar = ["!","*","@","("];
for (var i = 0; i < removeChar.length; i++) {
  for (var k = 0; k <songs.length; k++){
  songs[k] = songs[k].replace(removeChar[i], '').replace(">", "-");
  }
}

var content = document.getElementById("main-content");
var newContent = [];
songs.forEach(function(arrSong) {
  newContent += `<div><ul class="list-inline"><li>${arrSong}</li></ul></div>`;
}, this);

content.innerHTML = newContent;