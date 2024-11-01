import React, { useState } from "react";
import axios from "axios";
import "./Ytdl.scss";

const Ytdl = () => {
  const [url, setUrl] = useState("");
  const [resolution, setResolution] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [videoInfo, setVideoInfo] = useState(null);
  const [buttonText, setButtonText] = useState("Submit");

  const handleSubmit = async () => {
    if (!url) {
      alert("Please enter a URL");
      return;
    }

    try {
      const response = await axios.get(
        `https://samehadaku-api.vercel.app/yt?url=${url}`
      );
      const data = response.data;

      if (data.infos) {
        setVideoInfo(data.infos);
      }

      switch (resolution) {
        case "480p":
          setDownloadUrl(data.download.sd.url);
          break;
        case "720p":
          setDownloadUrl(data.download.hd.url);
          break;
        case "1080p":
          setDownloadUrl(data.download.fhd.url);
          break;
        case "mp3":
          setDownloadUrl(data.download.mp3.url);
          break;
        default:
          alert("Please select a valid resolution");
          return;
      }

      setButtonText("Download");
    } catch (error) {
      console.error("Error fetching video data:", error);
      alert("Failed to fetch video data. Please try again.");
    }
  };

  return (
    <main className="yt-container">
      <div className="box-yt-downloader">
        <h1>API nya rusak</h1>
        {/* <h4>ryznxx</h4>
        <input
          type="text"
          id="url"
          placeholder="Inputkan Url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <select
          id="resolution"
          value={resolution}
          onChange={(e) => setResolution(e.target.value)}
        >
          <option value="">Pilih Resolusi</option>
          <option value="480p">480p</option>
          <option value="720p">720p</option>
          <option value="1080p">1080p</option>
          <option value="mp3">MP3 (Audio)</option>
        </select>
        {videoInfo && (
          <div className="video-info">
            <p>Title: {videoInfo.title}</p>
            <p>Duration: {videoInfo.duration} seconds</p>
            <img
              style={{ width: "20vw" }}
              src={videoInfo.thumbnail}
              alt="thumbnail"
            />
          </div>
        )}
        <button
          onClick={handleSubmit}
          disabled={buttonText === "Download" && !downloadUrl}
        >
          {buttonText}
        </button>
        {downloadUrl && (
          <a href={downloadUrl} download className="download-link">
            Download File
          </a>
        )} */}
      </div>
    </main>
  );
};

export default Ytdl;
