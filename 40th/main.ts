function makealbum(artistname:string , albumtitle: string ,tracks?: number){
let album : {artist:string, title : string , tracks?: number
} ={
  artist :  artistname,
  title : albumtitle,
}
if(tracks !== undefined){
    album.tracks=tracks;
}
return album;


}
console.log(makealbum("yoyo","fire"));

console.log(makealbum("yoyo","hieght",10));

console.log(makealbum("youngstunners","gumman"));