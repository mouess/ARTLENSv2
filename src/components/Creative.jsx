import './Creative.css';

export default function Creative() {
  return (
    <section className="creative" id="home">
      <div className="creative__bg-overlay" />

      <div className="creative__image-wrap">
        <video
          src="https://res.cloudinary.com/dyfqal83h/video/upload/v1776446615/site_1_xz3ivt.mp4" 
          autoPlay muted loop playsInline preload="auto"
          className="creative__img"
        />
        <div className="creative__img-fade" />
      </div>

      <div className="creative__content">
        <h1 className="creative__headline">
          Creative<br />
          <span className="creative__highlight">Visual</span> Agency
        </h1>
        <a href="https://wa.me/212668927612" target='_blank' rel="noreferrer" className="creative__btn">Contact Us</a>
      </div>
    </section>
  );
}
