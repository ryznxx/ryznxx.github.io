import React from "react";

import "./Project.scss";
import { useNavigate } from "react-router-dom";

const Project = () => {
  return (
    <div className="project-container">
      <div className="judul-project">
        <h1 id="judul">Project Mini</h1>
      </div>
      <div className="project-wrapper">
        <CardProject
          judul="Youtube Downloader"
          gambar="https://telegra.ph/file/590a5f457d1122764b1f8.jpg"
          deskripsi="Youtube downloader video dan audio tanpa iklan mengganggu"
          navigator="yt-downloader"
        />
        <CardProject
          judul="Spotify Downloader"
          gambar="https://telegra.ph/file/6f0b0a1355804e5e115e9.jpg"
          deskripsi="Spotify downloader mp3"
          navigator="spotify-downloader"
        />
        <CardProject />
      </div>
    </div>
  );
};

export default Project;

const CardProject = ({ judul, deskripsi, gambar, navigator }) => {
  const navigate = useNavigate();
  const gsx = () => {
    if (navigator) {
      navigate(`/${navigator}`);
    }
  };
  return (
    <div className="card-project-container" onClick={gsx}>
      <div className="card-project-gambar">
        <img
          src={
            gambar
              ? gambar
              : "https://telegra.ph/file/b18f709867614f7c04b79.jpg"
          }
          alt="ytdl"
        />
      </div>
      <div className="card-project-deskripsi">
        <div className="cp-judul-icon">
          <h2>{judul ? judul.slice(0, 20) : "Soon"}</h2>
          <span className="material-symbols-rounded">arrow_outward</span>
        </div>
        <p>
          {deskripsi && deskripsi.length > 0
            ? deskripsi.slice(0, 100)
            : "Deskripsi tidak tersedia"}
        </p>
      </div>
    </div>
  );
};
