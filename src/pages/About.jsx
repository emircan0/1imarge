import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <main id="main" className="about-page">
      <section className="page-hero about-hero">
        <img className="hero-image" src="/assets/images/solution-product-development.png" alt="Mühendislik tasarımı ve ürün geliştirme çalışma ortamı" />
        <div className="hero-shade"></div>
        <div className="container page-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow">Hakkımızda</p>
            <h1>Ölçülebilir mühendislik, uygulanabilir karar ve sürdürülebilir teknik kalite için çalışıyoruz.</h1>
            <p>1im Ar-Ge; fikirden prototipe, prosesten otomasyona kadar teknik belirsizlikleri görünür ve yönetilebilir hale getiren bir mühendislik ortağıdır.</p>
          </motion.div>
        </div>
      </section>

      <section className="section origin-section">
        <div className="container origin-grid">
          <motion.div 
            className="origin-copy"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">1im hikayesi</p>
            <h2>1im; ölçünün disiplini, parçanın işlevi, ekibin gücü ve bir numara olma iddiasıyla kurulan bir mühendislik yaklaşımıdır.</h2>
            <p><strong>Ölçü birimi</strong>, 1im'in ilk anlamıdır. Ölçü olmadan doğru karar, doğru ürün ve tekrarlanabilir kalite ortaya çıkmaz. Bu nedenle her işi tolerans, kabul kriteri, çevrim süresi ve doğrulanabilir veri üzerinden ele alırız. 1im için ölçü; mühendisliğin ilk adımı, tasarımın ortak dili ve sonucun güvence noktasıdır.</p>
            <p><strong>Makinenin birimi</strong>, bütün içinde işlevi olan temel yapı taşıdır. Bir parça tek başına var olmaz; diğer parçalarla kurduğu ilişki, üstlendiği görev ve sistemin performansına katkısıyla anlam kazanır. Tasarım, prototip, proses, test ve otomasyonu bu yüzden birbirinden kopuk işler olarak değil, aynı makinenin birlikte çalışan birimleri olarak düşünürüz.</p>
            <p><strong>Ekip birimi</strong>, ortak hedefe bağlanan teknik güçtür. Ar-Ge birimi, üretim birimi, kalite birimi ve bakım birimiyle aynı dili konuşur; gerektiğinde ekibin içinde düşünen, gerektiğinde süreci hızlandıran bir mühendislik ortağı gibi çalışırız. Ortaya yalnızca bir çıktı değil, birlikte güçlenen bir çalışma düzeni koyarız.</p>
            <p><strong>Bir numara olma iddiası</strong>, yaptığımız işte iyiyle yetinmemek demektir. Her projede daha net, daha sağlam ve daha uygulanabilir sonuca ulaşmak için sorumluluğu sahiplenir; standardı yükseltecek detayların peşinden gideriz. 1im, bu iddiayı sözde değil, ölçülebilir mühendislik sonuçlarıyla göstermeyi hedefler.</p>
          </motion.div>
          
          <motion.aside 
            className="meaning-stack"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="meaning-card glass-panel"><span>01</span><strong>Ölçü birimi</strong><p>Tolerans, veri ve kabul kriteriyle başlayan mühendislik.</p></div>
            <div className="meaning-card glass-panel"><span>02</span><strong>Makinenin birimi</strong><p>Bütüne işlev kazandıran, görevini doğru yapan temel parça.</p></div>
            <div className="meaning-card glass-panel"><span>03</span><strong>Ekip birimi</strong><p>Ar-Ge, üretim ve kaliteyle aynı hedefte çalışan teknik güç.</p></div>
            <div className="meaning-card glass-panel"><span>04</span><strong>Bir numara</strong><p>Standardı yukarı taşıyan, işini sahiplenen mühendislik iddiası.</p></div>
          </motion.aside>
        </div>
      </section>

      <section className="section mission-section">
        <div className="container mission-grid">
          <motion.article 
            className="mission-card glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">Vizyon</p>
            <h2>Türkiye'den çıkan mühendislik çözümlerini global ölçekte tercih edilen ürün, proses ve otomasyon standardına dönüştürmek.</h2>
            <p>Yüksek hassasiyet, veri disiplini ve üretilebilirlik odağıyla teknik çıktılarımızın uluslararası kalite algısı oluşturmasını hedefliyoruz.</p>
          </motion.article>
          
          <motion.article 
            className="mission-card invert glass-panel-dark"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="eyebrow" style={{color: 'var(--gold)'}}>Misyon</p>
            <h2>Teknik fikirleri ve süreç problemlerini uygulanabilir, test edilebilir ve ölçülebilir mühendislik çıktılarına çevirmek.</h2>
            <p>İş ortaklarımızın Ar-Ge ve Ür-Ge yükünü azaltır; karar verilebilir proje dosyalarıyla ürün ve süreç geliştirme performansını hızlandırırız.</p>
          </motion.article>
        </div>
      </section>
    </main>
  );
};

export default About;
