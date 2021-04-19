import React from "react";

const LibrarySong = ({
  isPlaying,
  songs,
  song,
  setcurrentSong,
  audioRef,
  setSongs,
}) => {
  const songsSelectHandler = async () => {
    await setcurrentSong(song);

    //Add active state
    const newSongs = songs.map((theSong) => {
      if (theSong.id === song.id) {
        return {
          ...theSong,
          active: true,
        };
      } else {
        return {
          ...theSong,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div
      onClick={songsSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
