import { useState } from "react";
import "./Portfolio.css";

const galleryVideos = [
  "/portfolio/portfolio 1.mp4",
  "/portfolio/portfolio 2.mp4",
  "/portfolio/portfolio 3.mp4",
  "/portfolio/portfolio 4.mp4",
  "/portfolio/portfolio 5.mp4",
  "/portfolio/portfolio 6.mp4",
  "/portfolio/portfolio 7.mp4",
  "/portfolio/portfolio 8.mp4",
  "/portfolio/portfolio 9.mp4",
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
          <iframe
  src="https://player.cloudinary.com/embed/?cloud_name=dyfqal83h&public_id=doc1_mfeyuo&autoplay=true"
  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
  allowFullScreen
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
          <iframe
  src="https://player.cloudinary.com/embed/?cloud_name=dyfqal83h&public_id=doc1_mfeyuo&autoplay=true"
  allow="autoplay; fullscreen; muted; encrypted-media; picture-in-picture"
  allowFullScreen 
  
/>
        </div>
      </div>
    </section>
  );
}