import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import './Home.css';

const Home = () => {
  return (
    <main id="main">
      <Hero />

      <section className="section intro-band">
        <div className="container intro-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">Teknik karar mimarisi</p>
            <h2>Ürünü, prosesi ve sahadaki uygulamayı aynı mühendislik masasında çözeriz.</h2>
          </motion.div>
          <motion.p
            className="intro-lead"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Teknik ihtiyacı önce kapsamına ayırır, sonra doğru çözüm alanında uygulanabilir proje akışına bağlarız. Fikir, saha verisi, test ve devreye alma aynı karar zincirinde ilerler.
          </motion.p>
        </div>
      </section>

      <section className="section solutions-section" id="cozumler">
        <div className="container section-head">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">Çözüm grupları</p>
            <h2>Ürün, proses, test ve otomasyonu net kapsamlarla ele alıyoruz.</h2>
          </motion.div>
        </div>
        
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

      <section className="section system-section">
        <div className="container system-grid">
          <motion.div 
            className="system-media glass-panel"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="/assets/images/solution-test-validation.png" alt="Test ve süreç" className="system-img" />
          </motion.div>
          <div className="system-copy">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow">Çalışma modeli</p>
              <h2>Tasarım kararını proses, test ve devreye alma gerçekliğiyle birlikte olgunlaştırırız.</h2>
            </motion.div>
            <div className="system-steps">
              {[
                { num: "01", title: "Keşif", desc: "Hedef, kısıt, teknik risk ve kabul kriterleri netleşir." },
                { num: "02", title: "Mimari", desc: "Konsept, CAD, prototip, test ve otomasyon aynı çerçevede tasarlanır." },
                { num: "03", title: "Doğrulama", desc: "Numune, saha verisi ve ölçüm sonuçlarıyla belirsizlik azaltılır." },
                { num: "04", title: "Uygulama", desc: "Teknik dosya, standart, kontrol planı ve devreye alma düzeni tamamlanır." }
              ].map((step, idx) => (
                <motion.div 
                  key={idx} 
                  className="step-item"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <span className="step-num text-gradient">{step.num}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
    </main>
  );
};

export default Home;
