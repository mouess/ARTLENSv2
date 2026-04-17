import './Story.css';

export default function Story() {
  return (
    <section className="story" id="story">
      <h2 className="section-title">Story</h2>

      <div className="story__inner">
        <div className="story__img-wrap">
          <img
            src="/story.png"
            alt="Camera on set"
          />
        </div>

        <div className="story__text">
          <h3 className="story__heading">
            Every Frame Tells<br />A Story
          </h3>
          <p className="story__body">
            We are here specifically to enhance your brand and push it towards
            new horizons of excellence and innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
