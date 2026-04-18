import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

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
            <a href="https://www.linkedin.com/company/artlens-ma/" target="_blank" rel="noreferrer" className="contact__social">
              <FontAwesomeIcon icon={faLinkedinIn} style={{ color: "white" }} />
            </a>

            <a href="https://www.instagram.com/artlens.ma/" target="_blank" rel="noreferrer" className="contact__social">
              <FontAwesomeIcon icon={faInstagram} style={{ color: "white" }} />
            </a>

            <a href="https://www.facebook.com/artlens.ma/" target="_blank" rel="noreferrer" className="contact__social">
              <FontAwesomeIcon icon={faFacebookF} style={{ color: "white" }} />
            </a>
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
