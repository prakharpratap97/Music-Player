import React, { useState } from 'react';
import song1 from './Faded.mp3';
import song2 from './Alone.mp3';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MusicPlayer.css';

const songs = [
  {
    title: 'Faded',
    source: song1,
  },
  {
    title: 'Alone',
    source: song2,
  },
  {
    title: 'Despacito',
    source:
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    title: 'Shape of You',
    source:
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
];

const MusicPlayer = () => {
  const [currentSong, setCurrentSong] = useState(songs[0]);

  const handleSongClick = (song) => {
    setCurrentSong(song);
  };

  return (
    <div className="container music-player-container text-bg-info">
      <div className="row">
        <div className="col text-center">
          <h2 className="mb-4">Music Player</h2>
          <div className="card audio-card mb-4">
            <audio controls src={currentSong.source} className="audio-player" />
          </div>
          <div className="list-group">
            {songs.map((song, index) => (
              <button
                key={index}
                onClick={() => handleSongClick(song)}
                className={`list-group-item list-group-item-action ${
                  currentSong === song ? 'active' : ''
                }`}
              >
                {song.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;