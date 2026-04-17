import './Contact.css';

export default function Contact() {
  return (<>
    <h2 className="section-title">Contact Us</h2>
    
    <section className="contact" id="contact">
      <div className="contact__inner">
        <div className="contact__left">
          <p className="contact__tagline">
            Be Part Of Our Story<br />
            On Our Social Platforms
          </p>
          <div className="contact__socials">
            <a href="https://www.linkedin.com/company/artlens-ma/" target='_blank' aria-label="Facebook" className="contact__social">In</a>
            <a href="https://www.instagram.com/artlens.ma/" target='_blank' aria-label="Instagram" className="contact__social">ig</a>
            <a href="https://www.facebook.com/artlens.ma/" target='_blank' aria-label="YouTube" className="contact__social">f</a>
          </div>
          <p className="contact__copy">
            ARTLENS · Tous droits réservés · artlens.ma
          </p>
        </div>

        <div className="contact__card">
          <div className="contact__row">
            <span className="contact__icon">🌐</span>
            <a href="mailto:contact@artlens.com" className="contact__link">
              Artlens.ma@gmail.com
            </a>
          </div>
          <div className="contact__row">
            <span className="contact__icon">📞</span>
            <a href="tel:+212668927612" className="contact__link">
              +212 6 68 92 76 12
            </a>
          </div>
        </div>
      </div>
    </section>
  </>);
}
