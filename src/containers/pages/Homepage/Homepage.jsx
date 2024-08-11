import React from "react";
import Blobblurred from "../../components/Blobblurred/Blobblurred";
import Blobwire from "../../components/Blobwire/Blobwire";
import Dynamicisland from "../../components/Dynamicisland/Dynamicisland";
import chromesavior from "../../../assets/chromesavior.png";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <main className="container">
      <Dynamicisland />
      <section className="main-content">
        <div className="left-ctn">
          <div className="texted">
            <h1 className="intro">Introduce</h1>
            <h1 className="intro">
              <bold>Myself,</bold>
            </h1>
          </div>
          <div className="middles">
            <div className="m-left">
              <p id="intro">
                My name is Mohammad Ridho Alfahresi. I live in Banyuwangi,
                Indonesia, and I am a student at SMA Negeri 1 Rogojampi For 2
                month and then I'm graduated.
              </p>
              <p className="get">
                My social media in below, get in touch with me!
              </p>
            </div>
            <div className="m-right">
              <img src={chromesavior} alt="source" />
            </div>
          </div>
          <div className="icon-g">
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-solid fa-envelope"></i>
          </div>
        </div>
        <div className="right-ctn">
          <div className="grid1"></div>
          <div className="grid2">
            <div className="texted-d">
              <h3>My Instagram</h3>
              <p>
                I have 2 instagram account my entertaint account and personal
                account, its @chromesavior for entertaint and @itskindahaunted
                for personal
              </p>
            </div>
          </div>
          <div className="grid3"></div>
          <div className="grid4"></div>
          <div className="grid5">
            <div className="texted-d">
              <h3>My Skills</h3>
              <p>
                I can learn many things so fast, but im fluent with my musician
                skill or producing a beat and programming skill as a full-stack
                developer
              </p>
            </div>
          </div>
          <div className="grid6">
            <div className="texted-d">
              <h3>Soon Filled</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium iusto ratione perferendis dolores? Perferendis,
                corrupti.
              </p>
            </div>
          </div>
          <div className="grid7">
            <div className="texted-d">
              <h3>Soon Filled</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium iusto ratione perferendis dolores? Perferendis,
                corrupti.
              </p>
            </div>
          </div>
          <div className="grid8">
            <div className="texted-d">
              <h3>Soon Filled</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium iusto ratione perferendis dolores? Perferendis,
                corrupti.
              </p>
            </div>
          </div>
          <div className="grid9"></div>
        </div>
        <Blobwire />
        <Blobblurred />
      </section>
    </main>
  );
};

export default Homepage;
