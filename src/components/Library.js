import React from "react";

import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  isPlaying,
  setcurrentSong,
  audioRef,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            isPlaying={isPlaying}
            audioRef={audioRef}
            songs={songs}
            song={song}
            setcurrentSong={setcurrentSong}
            key={song.id}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
