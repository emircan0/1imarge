import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand-section">
          <Link to="/" className="brand footer-brand" aria-label="1im Ar-Ge ana sayfa">
            <span className="brand-mark"><b>1</b>im</span>
            <span className="brand-copy">
              <strong>1im Ar-Ge</strong>
              <small>Mühendislik ve Danışmanlık</small>
            </span>
          </Link>
          <p className="footer-desc">Ürün geliştirme, proses iyileştirme, test/doğrulama ve makine otomasyonu için ölçülebilir mühendislik ortağı.</p>
        </div>
        
        <div className="footer-links">
          <h2>Sayfalar</h2>
          <ul>
            <li><Link to="/">Ana Sayfa</Link></li>
            <li><Link to="/hizmetler">Hizmetler</Link></li>
            <li><Link to="/hakkimizda">Hakkımızda</Link></li>
          </ul>
        </div>
        
        <div className="footer-links">
          <h2>Çözümler</h2>
          <ul>
            <li><Link to="/urun-gelistirme-prototipleme">Ürün geliştirme</Link></li>
            <li><Link to="/proses-alt-sigma">Proses iyileştirme</Link></li>
            <li><Link to="/test-dogrulama-cihazlari">Test ve doğrulama</Link></li>
            <li><Link to="/makine-otomasyon">Makine otomasyon</Link></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h2>İletişim</h2>
          <a href="mailto:iletisim@1imarge.com" className="contact-link">iletisim@1imarge.com</a>
          <a href="tel:+902120000000" className="contact-link">+90 212 000 00 00</a>
          <span className="location-info">Türkiye merkezli, global proje odağı</span>
        </div>
      </div>
      
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} 1im Ar-Ge, Mühendislik ve Danışmanlık.</span>
        <a href="/IMAGE-CREDITS.md" target="_blank" rel="noopener noreferrer">Görsel kaynakları</a>
      </div>
    </footer>
  );
};

export default Footer;
