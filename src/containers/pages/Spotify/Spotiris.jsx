import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import "./Spotiris.scss";

const Spotiris = () => {
  const [query, setQuery] = useState("");
  const [resultsWithPreview, setResultsWithPreview] = useState([]);
  const [resultsWithoutPreview, setResultsWithoutPreview] = useState([]);
  const [playingTrack, setPlayingTrack] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [modalInfo, setModalInfo] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.nyxs.pw/dl/spotify-search?title=${query}`
      );
      const fetchedResults = response.data.result || [];

      const withPreview = fetchedResults.filter(
        (track) => track.previewUrl !== null
      );
      const withoutPreview = fetchedResults.filter(
        (track) => track.previewUrl === null
      );

      setResultsWithPreview(withPreview);
      setResultsWithoutPreview(withoutPreview);
      setSearchParams({ search: query });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const queryFromParams = searchParams.get("search");
    if (queryFromParams) {
      setQuery(queryFromParams);
      handleSearch();
    }
  }, [searchParams]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const togglePlay = async (trackIndex) => {
    if (playingTrack === trackIndex) {
      audioRef.current.pause();
      setPlayingTrack(null);
    } else {
      setPlayingTrack(null);
      if (audioRef.current) audioRef.current.pause();
      setPlayingTrack(trackIndex);
    }
  };

  useEffect(() => {
    const asnc = async () => {
      if (playingTrack !== null && audioRef.current) {
        try {
          audioRef.current.play();
        } catch (e) {
          console.log(e);
        }
      }
    };
    asnc();
  }, [playingTrack]);

  const openModal = (track) => {
    setModalInfo(track);
  };

  const closeModal = () => {
    setModalInfo(null);
  };

  return (
    <main>
      {/* {JSON.stringify(audioRef, null, 2)} */}
      {isDesktop ? (
        <p>Belum Tersedia Untuk Desktop, Gunakan Mobile</p>
      ) : (
        <>
          <div className="container-spotify">
            <h2>Spotify Downloader</h2>

            <div className="search-sp">
              <span className="material-symbols-rounded">search</span>
              <input
                type="text"
                placeholder="Judul Musik"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button onClick={handleSearch}>Search</button>
            </div>

            {resultsWithPreview.length === 0 &&
            resultsWithoutPreview.length === 0 ? (
              <TampilanUtama />
            ) : (
              <>
                <h4>
                  Total Hasil{" "}
                  {resultsWithPreview.length + resultsWithoutPreview.length}{" "}
                  lagu
                </h4>

                {isLoading ? (
                  <span className="loader"></span>
                ) : (
                  <div className="spotify-results">
                    {resultsWithPreview.map((track, index) => (
                      <div
                        key={index}
                        className="track"
                        onClick={() => openModal(track)}
                      >
                        <div className="plss">
                          <img src={track.thumbnail} alt={track.name} />
                          <span
                            className="material-symbols-rounded"
                            onClick={(e) => {
                              e.stopPropagation(); // Menghindari pemanggilan modal ketika play/pause diklik
                              togglePlay(index);
                            }}
                          >
                            {playingTrack === index ? "pause" : "play_arrow"}
                          </span>
                        </div>
                        <div className="track-info">
                          <h4>
                            {track.name.length > 25
                              ? `${track.name.slice(0, 25)}...`
                              : track.name}
                          </h4>
                          <div className="details">
                            <p>{track.artists}</p>
                          </div>

                          <div className="spotify-spend">
                            <a
                              href={track.spotifyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Open in Spotify
                            </a>
                          </div>

                          {playingTrack === index && (
                            <audio
                              ref={audioRef}
                              src={track.previewUrl}
                              onEnded={() => setPlayingTrack(null)}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                    {resultsWithoutPreview.map((track, index) => (
                      <div
                        key={index}
                        className="track"
                        onClick={() => openModal(track)}
                      >
                        <div className="plss">
                          <img src={track.thumbnail} alt={track.name} />
                          <span className="material-symbols-rounded">info</span>
                        </div>
                        <div className="track-info">
                          <h4>
                            {track.name.length > 25
                              ? `${track.name.slice(0, 25)}...`
                              : track.name}
                          </h4>
                          <div className="details">
                            <p>{track.artists}</p>
                          </div>

                          <div className="spotify-spend">
                            <a
                              href={track.spotifyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Open in Spotify
                            </a>
                          </div>

                          {playingTrack === index && (
                            <audio
                              ref={audioRef}
                              src={track.previewUrl}
                              onEnded={() => setPlayingTrack(null)}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
            {/* {JSON.stringify(resultsWithPreview, null, 2)} */}
          </div>
        </>
      )}
      {modalInfo && (
        <div className="modal-s">
          <ModalSong
            thumbnail={modalInfo.thumbnail}
            judul={modalInfo.name}
            release={modalInfo.releaseDate}
            album={modalInfo.album}
            onClose={closeModal}
          />
        </div>
      )}
    </main>
  );
};

const ModalSong = ({ thumbnail, judul, release, album, onClose }) => {
  return (
    <div className="modal-content">
      <img className="bgs" src={thumbnail} alt="sr" />

      <div className="okess">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {/* <img src={thumbnail} alt={judul} /> */}
        <h3>{judul}</h3>
        {release && <p>Release Date: {release}</p>}
        {album && <p>Album: {album}</p>}
      </div>
    </div>
  );
};

const TampilanUtama = () => {
  return (
    <div>
      <div className="container-sh">
        <div className="spotify-hero">
          <img
            src="https://i.ytimg.com/vi/KI1Qpuv_z_U/maxresdefault.jpg"
            alt="spotify"
          />
        </div>
        <div className="spotify-hero">
          <img
            src="https://media-cdn.socastsrm.com/wordpress/wp-content/blogs.dir/2900/files/2023/11/taylor-spotify.jpg"
            alt="spotify"
          />
        </div>
      </div>
      <div className="container-btm">
        <div className="cta">
          <h1>Download Tanpa Iklan jirr</h1>
          <p>Free Streaming, kalo udah update</p>
        </div>
      </div>
      <div className="container-bta">
        <img
          className="sigoblok"
          src="https://www.pngall.com/wp-content/uploads/5/The-Weeknd-PNG-Picture.png"
          alt="oe"
        />
        <p>aowkoakwowk</p>
      </div>
    </div>
  );
};

export default Spotiris;
