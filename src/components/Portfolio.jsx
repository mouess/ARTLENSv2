import { useState } from "react";
import "./Portfolio.css";

const galleryVideos = [
  "https://res.cloudinary.com/dyfqal83h/video/upload/v1776404376/portfolio_1_es57uh.mp4",
  "https://res.cloudinary.com/dyfqal83h/video/upload/v1776404380/portfolio_2_thc0t6.mp4",
  "https://res.cloudinary.com/dyfqal83h/video/upload/v1776404387/portfolio_3_tv5amc.mp4",
  "https://res.cloudinary.com/dyfqal83h/video/upload/v1776404397/portfolio_4_ugejqm.mp4",
  "https://res.cloudinary.com/dyfqal83h/video/upload/v1776404388/portfolio_5_y3da91.mp4",
  "https://res.cloudinary.com/dyfqal83h/video/upload/v1776404390/portfolio_6_ga7l1f.mp4",
  "https://res.cloudinary.com/dyfqal83h/video/upload/v1776404376/portfolio_7_b0sde6.mp4",
  "https://res.cloudinary.com/dyfqal83h/video/upload/v1776404383/portfolio_8_svzhq8.mp4",
  "https://res.cloudinary.com/dyfqal83h/video/upload/v1776404393/portfolio_9_ouklaj.mp4",
];

export default function Portfolio() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="section-title">Portfolio</h2>

      {/* STRIP */}
      <div className="video-strip">
        {galleryVideos.map((src, i) => (
          <div
            className="video-item"
            key={i}
            onClick={() => setActiveVideo(src)}
          >
            <video src={src} muted autoPlay loop playsInline />
          </div>
        ))}
      </div>

      {/* MODAL */}
      {activeVideo && (
        <div className="video-modal" onClick={() => setActiveVideo(null)}>
          <video src={activeVideo} controls autoPlay />
        </div>
      )}

      {/* FEATURES */}
      <div className="story__inner">
        <div className="story__img-wrap">
          <video
    src="https://res.cloudinary.com/dyfqal83h/video/upload/v1776402529/doc1_mfeyuo.mp4"
    muted
    autoPlay
    loop
    playsInline
  />
        </div>

        <div className="story__text">
          <h3 className="story__heading">
            Every Frame Tells<br />A Story
          </h3>
          <p className="story__body">
            We create professional content designed to meet your needs and bring your ideas to life.
          </p>
        </div>
      </div>


      <div className="story__inner">
        <div className="story__text">
          <h3 className="story__heading">
            Every Frame Tells<br />A Story
          </h3>
          <p className="story__body">
            From concept to final cut, we craft high-quality visuals designed to elevate your brand and tell your story the right way.
          </p>
        </div>

        <div className="story__img-wrap">
          <video
    src="https://res.cloudinary.com/dyfqal83h/video/upload/v1776402529/doc1_mfeyuo.mp4"
    muted
    autoPlay
    loop
    playsInline
  />
        </div>
      </div>
    </section>
  );
}