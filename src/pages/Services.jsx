import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import './Services.css';

const Services = () => {
  return (
    <main id="main" className="services-page">
      <section className="page-hero">
        <img className="hero-image" src="/assets/images/automation-process.png" alt="Modern otomasyon hattı ve proses izleme panelleri" />
        <div className="hero-shade"></div>
        <div className="container page-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow">Hizmetler</p>
            <h1>Dört ana mühendislik çözümüyle ürün, proses, test ve otomasyonu birlikte ele alıyoruz.</h1>
            <p>Her çözüm alanı, kendi teslimatları ve karar noktalarıyla projeyi fikirden uygulamaya taşır.</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container service-grid">
          <ServiceCard 
            link="/urun-gelistirme-prototipleme"
            image="/assets/images/solution-product-development.png"
            kicker="Çözüm 01"
            title="Ürün Geliştirme ve Prototipleme"
            description="Kavramsal çalışma, Ar-Ge | Ür-Ge danışmanlığı, mekanik tasarım/çizim ve prototip üretimini tek ürün geliştirme akışında toplarız."
            pills={["Kavramsal çalışmalar", "Ar-Ge | Ür-Ge danışmanlığı", "Mekanik tasarım/çizim", "Prototip üretme"]}
            delay={0.1}
          />
          <ServiceCard 
            link="/proses-alt-sigma"
            image="/assets/images/solution-process-improvement.png"
            kicker="Çözüm 02"
            title="Proses ve Alt Sigma İyileştirme"
            description="Proses/süreç iyileştirme ile Alt Sigma proje yürütücülüğünü aynı veri, kök neden ve kontrol disiplini altında yönetiriz."
            pills={["Proses/süreç iyileştirme", "Alt Sigma proje yürütücülüğü", "Kök neden analizi", "Kontrol planı"]}
            delay={0.2}
          />
          <ServiceCard 
            link="/test-dogrulama-cihazlari"
            image="/assets/images/solution-test-validation.png"
            kicker="Çözüm 03"
            title="Test, Fikstür ve Doğrulama Sistemleri"
            description="Ürüne veya prosese özel test düzenekleri, fikstürler ve doğrulama cihazları için konseptten uygulamaya tasarım yaparız."
            pills={["Özel test cihazları", "Fikstür ve aparatlar", "Ölçüm senaryosu", "Validasyon düzeni"]}
            delay={0.3}
          />
          <ServiceCard 
            link="/makine-otomasyon"
            image="/assets/images/solution-machine-automation.png"
            kicker="Çözüm 04"
            title="Makine ve Otomasyon Çözümleri"
            description="Makine otomasyon çözümlerini mekanik entegrasyon, çevrim, kalite, emniyet ve devreye alma gerçekliğiyle birlikte ele alırız."
            pills={["Makine otomasyon", "Hat entegrasyonu", "Mekanik entegrasyon", "Devreye alma desteği"]}
            delay={0.4}
          />
        </div>
      </section>

      <section className="section capability-section">
        <div className="container section-head compact">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">Kapsam haritası</p>
            <h2>Her çözüm alanı; ihtiyaç analizi, tasarım kararı, doğrulama ve uygulama çıktılarıyla net bir çalışma zemini kurar.</h2>
          </motion.div>
        </div>
        <div className="container capability-map">
          {[
            { id: '01', title: 'Ürün geliştirme', items: ['Kavramsal çalışmalar', 'Ar-Ge | Ür-Ge danışmanlığı', 'Mekanik tasarım/çizim', 'Prototip üretme'] },
            { id: '02', title: 'Proses iyileştirme', items: ['Proses/süreç iyileştirme', 'Alt Sigma proje yürütücülüğü', 'Kök neden analizi', 'Kontrol planı'] },
            { id: '03', title: 'Test ve doğrulama', items: ['Özel test cihazları', 'Fikstür ve aparatlar', 'Ölçüm senaryosu', 'Validasyon düzeni'] },
            { id: '04', title: 'Makine otomasyon', items: ['Makine otomasyon', 'Hat entegrasyonu', 'Mekanik entegrasyon', 'Devreye alma desteği'] },
          ].map((cap, idx) => (
            <motion.div 
              key={idx}
              className="capability-group glass-panel"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <span>Çözüm {cap.id}</span>
              <h3>{cap.title}</h3>
              {cap.items.map((item, i) => <p key={i}>{item}</p>)}
            </motion.div>
          ))}
        </div>
      </section>

      <div className="services-project-unified">
        <section className="section dark-band glass-panel-dark" style={{borderRadius: 0, border: 'none'}}>
          <div className="container band-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow" style={{color: 'var(--gold)'}}>Nasıl çalışırız</p>
              <h2>Her proje görünür karar noktaları ve teslim edilebilir teknik çıktılarla ilerler.</h2>
            </motion.div>
            <div className="band-list">
              {[
                "Problemi ve kabul kriterlerini netleştiririz.",
                "Konsept, tasarım, prototip ve proses etkisini birlikte değerlendiririz.",
                "Test, veri ve saha geri bildirimiyle kararı doğrularız.",
                "Teknik dosya, kontrol planı ve uygulama yol haritasını teslim ederiz."
              ].map((text, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <span>0{idx+1}</span>{text}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="section contact-section" id="iletisim">
          <div className="container contact-grid">
            <motion.div 
              className="contact-copy"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow">Proje hattı</p>
              <h2>Teknik fikri net bir mühendislik planına çevirelim.</h2>
              <p>Tasarım, prototip, proses iyileştirme, test cihazı veya otomasyon projeniz için hedefleri, riskleri ve ilk aksiyon planını birlikte netleştirelim.</p>
            </motion.div>
            <motion.form 
              className="contact-form glass-panel-dark"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={(e) => e.preventDefault()}
            >
              <label>
                <span>Ad Soyad</span>
                <input name="name" type="text" required className="form-input" />
              </label>
              <label>
                <span>E-posta</span>
                <input name="email" type="email" required className="form-input" />
              </label>
              <label>
                <span>Proje Başlığı</span>
                <input name="project" type="text" required className="form-input" />
              </label>
              <label>
                <span>Kısa Açıklama</span>
                <textarea name="message" rows="4" required className="form-input"></textarea>
              </label>
              <button className="btn btn-primary submit-btn" type="submit">Talep Oluştur</button>
            </motion.form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Services;
