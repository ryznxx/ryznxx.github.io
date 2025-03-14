import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Ytdl from "./pages/Ytdl/Ytdl";
import Spotify from "./pages/Spotify/Spotify";
import Spotiris from "./pages/Spotify/Spotiris";
import Wmk from "./pages/Wmkabi/Wmk";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/skills" element={<p>skills pages</p>} />
        <Route path="/yt-downloader" element={<Ytdl />} />
        <Route path="/spotify-downloader" element={<Spotify />} />
        <Route path="/spotify-downloader/cari-musik" element={<Spotiris />} />
        <Route path="/product/kribok-wmkppns-k24" element={<Wmk />}/>
        <Route path="*" element={<p>anda tersesat</p>} />
      </Routes>
    </>
  );
}

export default App;
