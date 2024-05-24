function makealbum(artistname, albumtitle, tracks) {
    var album = {
        artist: artistname,
        title: albumtitle,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
console.log(makealbum("yoyo", "fire"));
console.log(makealbum("yoyo", "hieght", 10));
console.log(makealbum("youngstunners", "gumman``"));
