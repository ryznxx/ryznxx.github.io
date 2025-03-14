import React from "react";
import product from "../../../assets/productkribok.webp";
import bgproduct from "../../../assets/bgproductkribok.webp";
import logoproduct from "../../../assets/logokribnok.webp";
import "./Wmk.scss";
import { Helmet } from "react-helmet-async";
import ico from "../../../assets/iconprod.ico";

const Wmk = () => {
  const otw = (args) => {
    const a = document.createElement("a");
    a.href = args;
    a.target = "_blank";
    a.rel = "noopener noreferrer"; // Opsional, untuk alasan keamanan
    a.click();
  };

  return (
    <section
      style={{ backgroundImage: `url("${bgproduct}")` }}
      className="wmk-container"
    >
      <Helmet>
        <title>wmk</title>
        <link rel="icon" type="image/png" href={ico} />
      </Helmet>
      <div className="wmk-content">
        <div className="wmk-nav">
          <img className="wmk-nav-logo" src={logoproduct} alt="sff" />
          <h1
            style={{
              fontFamily: `"Montserrat", sans-serif`,
            }}
            className="wmk-title"
          >
            Kribok Osing
          </h1>
        </div>
        <div className="wmk-product">
          <img className="wmk-product-image" src={product} alt="wmkprod" />
        </div>
        <div className="wmk-info-content">
          <div className="wmk-info-content-top">
            <img className="wmk-product-logo" src={logoproduct} alt="sff" />
            <h1
              style={{
                fontFamily: `"Montserrat", sans-serif`,
              }}
              className="wmk-title"
            >
              Kribok Osing
            </h1>
          </div>
          <div className="wmk-info-content-middle">
            <h2>Kunjungi Sosial Media Kita</h2>
            <p>
              Kami mengundang Anda untuk mengikuti akun media sosial kami agar
              Anda selalu mendapatkan update terbaru tentang produk kami serta
              informasi menarik lainnya yang berkaitan. Dengan mengikuti akun
              kami, Anda tidak akan ketinggalan berita terbaru, promo eksklusif,
              dan berbagai tips bermanfaat.
            </p>
            <div className="wmk-sosmed">
              <button
                onClick={() => otw("https://www.instagram.com/wmkppns_k42")}
                className="wmk-sosmed"
              >
                <div className="wmk-ss">
                  <i class="fa-brands fa-instagram"></i> Instagram
                </div>
              </button>

              <button
                onClick={() => otw("https://www.tiktok.com/@kribok42")}
                className="wmk-sosmed"
              >
                <div className="wmk-ss">
                  <i class="fa-brands fa-tiktok"></i> Tiktok
                </div>
              </button>
            </div>
          </div>
          <div className="wmk-info-content-bottom">
            <ul>
              <li>Politeknik Negeri Banyuwangi</li>
              <li>wmkppns_k42</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wmk;
