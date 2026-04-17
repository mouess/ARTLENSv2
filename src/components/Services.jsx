import './Services.css';

const services = [
  {
    src: '/icons/icon-camera.png',
    title: 'Content Creation',
    desc: 'Conception et supervision créative de vos projets.',
  },
  {
    src: '/icons/icon-pen.png',
    title: 'Media Promotion',
    desc: 'Planification et stratégies pour promouvoir vos productions sur le web.',
  },
  {
    src: '/icons/icon-video.png',
    title: 'Multimedia Production',
    desc: 'Création de contenu photo et vidéo professionnel de haute qualité pour tous vos besoins.',
  },
];

export default function Services() {

  const sectionStyle = {
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/services.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "var(--section-pad)",
    paddingLeft: "40px",
    paddingRight: "40px",
  };

  return (<>
    <h2 className="section-title">Services</h2>

    <section className="services" id="services" style={sectionStyle}>

      <div className="services__grid">
        {services.map((s) => (
          <div className="services__card" key={s.title}>
            <img className="services__icon" src={s.src} alt="content creation" width={'80px'}/>
            <h3 className="services__name">{s.title}</h3>
            <p className="services__desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </>);
}