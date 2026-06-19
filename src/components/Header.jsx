import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="1im Ar-Ge ana sayfa">
          <span className="brand-mark"><b>1</b>im</span>
          <span className="brand-copy">
            <strong>1im Ar-Ge</strong>
            <small>Mühendislik ve Danışmanlık</small>
          </span>
        </Link>

        <button 
          className="menu-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={`primary-nav ${mobileMenuOpen ? 'open glass-panel' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Ana Sayfa</Link>
          
          <div 
            className="nav-item has-dropdown"
            onMouseEnter={() => window.innerWidth > 992 && setDropdownOpen(true)}
            onMouseLeave={() => window.innerWidth > 992 && setDropdownOpen(false)}
            onClick={() => window.innerWidth <= 992 && setDropdownOpen(!dropdownOpen)}
          >
            <div className="nav-link-parent">
              <Link to="/hizmetler" className={location.pathname.includes('/hizmetler') ? 'active' : ''}>Hizmetler</Link>
              <ChevronDown size={16} className={`dropdown-icon ${dropdownOpen ? 'rotate' : ''}`} />
            </div>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="nav-dropdown glass-panel"
                >
                  <Link className="nav-solution" to="/urun-gelistirme-prototipleme">
                    <strong>Ürün geliştirme</strong>
                    <small>Fikir, CAD, prototip ve teknik dosya akışı.</small>
                  </Link>
                  <Link className="nav-solution" to="/proses-alt-sigma">
                    <strong>Proses iyileştirme</strong>
                    <small>Saha verisi, kök neden ve kontrol planı.</small>
                  </Link>
                  <Link className="nav-solution" to="/test-dogrulama-cihazlari">
                    <strong>Test ve doğrulama</strong>
                    <small>Fikstür, ölçüm senaryosu ve validasyon düzeni.</small>
                  </Link>
                  <Link className="nav-solution" to="/makine-otomasyon">
                    <strong>Makine otomasyon</strong>
                    <small>Makine, hat entegrasyonu ve devreye alma.</small>
                  </Link>
                  <Link className="nav-all-solutions" to="/hizmetler">
                    Tüm çözümlerimizi göster <ArrowUpRight size={14} />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <Link to="/hakkimizda" className={location.pathname === '/hakkimizda' ? 'active' : ''}>Hakkımızda</Link>
          <a href="#iletisim" className="btn btn-primary nav-cta">Teklif Al</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
