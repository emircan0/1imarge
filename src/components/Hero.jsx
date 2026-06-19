import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

// Magnetic Button Wrapper
const Magnetic = ({ children }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      style={{ display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
};

const Hero = () => {
  // Cinematic Stagger variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    show: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.21, 1.11, 0.81, 0.99] }
    }
  };

  return (
    <section className="hero">
      <video 
        className="hero-video" 
        autoPlay 
        muted 
        loop 
        playsInline 
        poster="/assets/images/hero-assembly-source.png"
      >
        <source src="/assets/video/hero-header-machine-pingpong.mp4" type="video/mp4" />
        <source src="/assets/video/hero-machine-assembly.webm" type="video/webm" />
      </video>
      <div className="hero-shade"></div>
      
      <div className="container hero-content">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={itemVariants} className="eyebrow">Tasarım / Prototip / Proses / Otomasyon</motion.p>
          <motion.h1 variants={itemVariants} className="hero-title text-gradient">1im Ar-Ge</motion.h1>
          <motion.p variants={itemVariants} className="hero-subtitle">Mühendislik ve Danışmanlık</motion.p>
          <motion.p variants={itemVariants} className="hero-lead">
            Fikir aşamasındaki teknik ihtiyaçları; ürün geliştirme, prototip, proses iyileştirme, test/doğrulama ve makine otomasyonu ile uygulanabilir mühendislik çıktılarına dönüştürürüz.
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-actions">
            <Magnetic>
              <Link to="/hizmetler" className="btn btn-primary">
                Hizmetleri İncele <ArrowUpRight size={18} />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link to="/hakkimizda" className="btn btn-outline glass-panel">
                1im Yaklaşımı
              </Link>
            </Magnetic>
          </motion.div>
          
          <motion.div variants={itemVariants} className="hero-metrics glass-panel">
            <div className="metric-item">
              <strong>4</strong>
              <span>ana çözüm grubu</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <strong>CAD + Test</strong>
              <span>kanıta bağlı tasarım akışı</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <strong>Proses + Oto.</strong>
              <span>sahaya uyumlu uygulama</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
