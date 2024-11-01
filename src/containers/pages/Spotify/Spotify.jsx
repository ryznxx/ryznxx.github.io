import React, { useState } from "react";
import axios from "axios";
import "./Spotify.scss";
import { useNavigate } from "react-router-dom";

const Spotify = () => {
  const navigate = useNavigate();

  return (
    <main className="spotify-main">
      <div
        onClick={() => navigate("/spotify-downloader/cari-musik")}
        className="spotify-main-button"
      >
        <img
          src="https://img.icons8.com/?size=256&id=63316&format=png"
          alt="spotify"
        />
        <h3>Cari Musik</h3>
        <span className="material-symbols-rounded">search</span>
      </div>
      {/* <div className="spotify-main-button">
          <img
            src="https://img.icons8.com/?size=256&id=63316&format=png"
            alt="spotify"
          />
          <h3>Link Finder</h3>
          <span className="material-symbols-rounded">search</span>
        </div>
        <div className="spotify-main-button">
          <img
            src="https://img.icons8.com/?size=256&id=63316&format=png"
            alt="spotify"
          />
          <h3>Detail Musik</h3>
          <span className="material-symbols-rounded">search</span>
        </div> */}
    </main>
  );
};

export default Spotify;

const SpotifyFinder = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.nyxs.pw/dl/spotify-search?title=${query}`
      );
      setResults(response.data.result || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <main>
      <div className="container-spotify">
        <h1>Spotify Downloader</h1>
        <input
          type="text"
          placeholder="Enter song title"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>

        <div className="spotify-results">
          {results.map((track, index) => (
            <div key={index} className="track">
              <img src={track.thumbnail} alt={track.name} />
              <div className="track-info">
                <h3>{track.name}</h3>
                <p>Artist: {track.artists}</p>
                <p>Album: {track.album}</p>
                <p>Duration: {track.duration}</p>
                <a
                  href={track.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Spotify
                </a>
                <audio controls src={track.previewUrl}>
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
