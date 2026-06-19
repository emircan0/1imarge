import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import './ServiceCard.css';

const ServiceCard = ({ link, image, kicker, title, description, pills, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 1.11, 0.81, 0.99] }}
      className="service-card-wrapper"
    >
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        perspective={1000}
        transitionSpeed={1000}
        scale={1.02}
        gyroscope={true}
        className="parallax-effect-glare-scale"
        glareEnable={true}
        glareMaxOpacity={0.15}
        glareColor="#ffffff"
        glarePosition="all"
      >
        <Link to={link} className="service-card glass-panel">
          <div className="card-image-wrapper">
            <img src={image} alt={title} className="card-image" />
            <div className="card-overlay">
              <div className="action-button">
                <ArrowRight size={24} className="card-arrow" />
              </div>
            </div>
          </div>
          <div className="card-content inner-element">
            <span className="card-kicker">{kicker}</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="mini-pills">
              {pills.map((pill, idx) => (
                <span key={idx} style={{ transitionDelay: `${idx * 0.05}s` }}>{pill}</span>
              ))}
            </div>
          </div>
        </Link>
      </Tilt>
    </motion.div>
  );
};

export default ServiceCard;
