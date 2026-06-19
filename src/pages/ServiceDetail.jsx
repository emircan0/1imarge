import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './ServiceDetail.css';

const servicesData = {
  'urun-gelistirme-prototipleme': {
    kicker: 'Çözüm 01',
    title: 'Ürün Geliştirme ve Prototipleme',
    heroImage: '/assets/images/solution-product-development.png',
    heroDesc: 'Fikir aşamasındaki teknik belirsizliği; konsept, CAD, prototip ve karar verilebilir mühendislik dosyasına dönüştüren uçtan uca geliştirme akışı kurarız.',
    pills: ['Kavramsal çalışmalar', 'Ar-Ge | Ür-Ge danışmanlığı', 'Mekanik tasarım/çizim', 'Prototip üretme'],
    overviewTitle: 'Başlangıçtan teslim dosyasına kadar net, izlenebilir ve uygulanabilir ilerleme.',
    overviewDesc: 'Fikir aşamasındaki teknik belirsizliği; konsept, CAD, prototip ve karar verilebilir mühendislik dosyasına dönüştüren uçtan uca geliştirme akışı kurarız. Proje boyunca hedef, risk, revizyon ve teknik karar kayıtlarını görünür tutarız.',
    outcomes: [
      'Konsept alternatifleri ve karar matrisi',
      '3D parça/montaj modeli ve teknik resim paketi',
      'Prototip üretim yöntemi, numune ve revizyon planı',
      'Teknik fizibilite ve ürün geliştirme yol haritası'
    ],
    visualSectionTitle: 'Ürün geliştirme kapsamında iki teknik odak.',
    visualSectionDesc: 'Ürün geliştirme tarafında CAD kararını, prototip üretimini ve revizyon geri bildirimini aynı teknik dosyanın parçaları olarak ele alırız.',
    visuals: [
      {
        image: '/assets/images/detail-product-cad.jpg',
        subtitle: 'CAD ve konsept',
        title: 'Tasarım kararını erken görünür hale getiririz.',
        desc: 'Modelleme, üretilebilirlik ve prototip planı aynı aşamada değerlendirilir.'
      },
      {
        image: '/assets/images/detail-product-prototype.jpg',
        subtitle: 'Prototip doğrulama',
        title: 'Numune üzerinden ölçülebilir geri bildirim toplarız.',
        desc: 'Prototip; form, montaj, kullanım ve revizyon kararlarını hızlandıran somut çıktıdır.'
      }
    ],
    methods: [
      'İhtiyaç, hedef, kısıt ve kabul kriterlerini netleştiririz.',
      'Konsept mimariyi üretilebilirlik ve risk açısından kıyaslarız.',
      'CAD model, teknik resim ve prototip stratejisini birlikte çıkarırız.',
      'Numune geri bildirimiyle tasarımı revize edip teslim dosyasını tamamlarız.'
    ],
    related: [
      { link: '/proses-alt-sigma', title: 'Proses iyileştirme', summary: 'Saha verisi, kök neden ve kontrol planı.' },
      { link: '/test-dogrulama-cihazlari', title: 'Test ve doğrulama', summary: 'Fikstür, ölçüm senaryosu ve validasyon düzeni.' },
      { link: '/makine-otomasyon', title: 'Makine otomasyon', summary: 'Makine, hat entegrasyonu ve devreye alma.' }
    ]
  },
  'proses-alt-sigma': {
    kicker: 'Çözüm 02',
    title: 'Proses ve Alt Sigma İyileştirme',
    heroImage: '/assets/images/solution-process-improvement.png',
    heroDesc: 'Darboğaz, fire, çevrim süresi ve kalite değişkenlerini sezgiyle değil; ölçüm, saha verisi ve sürdürülebilir kontrol planıyla iyileştiririz.',
    pills: ['Proses/süreç iyileştirme', 'Alt Sigma proje yürütücülüğü', 'Kök neden analizi', 'Kontrol planı'],
    overviewTitle: 'Başlangıçtan teslim dosyasına kadar net, izlenebilir ve uygulanabilir ilerleme.',
    overviewDesc: 'Darboğaz, fire, çevrim süresi ve kalite değişkenlerini sezgiyle değil; ölçüm, saha verisi ve sürdürülebilir kontrol planıyla iyileştiririz. Proje boyunca hedef, risk, revizyon ve teknik karar kayıtlarını görünür tutarız.',
    outcomes: [
      'Mevcut durum, kayıp ve varyasyon analizi',
      'Problem tanımı, proje charter ve aksiyon önceliği',
      'Kök neden, etki doğrulama ve takip ritmi',
      'Süreç standardı, kontrol planı ve yönetim raporu'
    ],
    visualSectionTitle: 'Proses iyileştirme kapsamında iki teknik odak.',
    visualSectionDesc: 'Proses iyileştirmede üretim akışını, malzeme hareketini ve kontrol noktalarını sahadaki gerçek veriyle birlikte okuruz.',
    visuals: [
      {
        image: '/assets/images/detail-process-conveyor.jpg',
        subtitle: 'Akış analizi',
        title: 'Darboğazı ve kaybı sürecin üzerinde görürüz.',
        desc: 'Çevrim, bekleme, taşıma ve kalite etkisi aynı proses haritasında değerlendirilir.'
      },
      {
        image: '/assets/images/detail-process-lean-line.jpg',
        subtitle: 'Standart iş',
        title: 'İyileştirmeyi kalıcı kontrol düzenine bağlarız.',
        desc: 'Aksiyonlar; standart, takip göstergesi ve saha sorumluluğuyla sürdürülebilir hale gelir.'
      }
    ],
    methods: [
      'Süreci sahada haritalar, veri güvenilirliğini kontrol ederiz.',
      'Kayıp noktalarını çevrim, kalite, maliyet ve emniyet etkisine göre sıralarız.',
      'Kök neden analizini aksiyon sahipliği ve doğrulama planıyla bağlarız.',
      'Kazanımı standart, gösterge ve düzenli gözden geçirme sistemiyle kalıcı hale getiririz.'
    ],
    related: [
      { link: '/urun-gelistirme-prototipleme', title: 'Ürün geliştirme', summary: 'Fikir, CAD, prototip ve teknik dosya akışı.' },
      { link: '/test-dogrulama-cihazlari', title: 'Test ve doğrulama', summary: 'Fikstür, ölçüm senaryosu ve validasyon düzeni.' },
      { link: '/makine-otomasyon', title: 'Makine otomasyon', summary: 'Makine, hat entegrasyonu ve devreye alma.' }
    ]
  },
  'test-dogrulama-cihazlari': {
    kicker: 'Çözüm 03',
    title: 'Test, Fikstür ve Doğrulama Sistemleri',
    heroImage: '/assets/images/solution-test-validation.png',
    heroDesc: 'Doğrulanmayan ürün ve proses risk taşır. Test sistemlerini ölçülebilir, tekrarlanabilir ve operatör dostu olacak şekilde tasarlarız.',
    pills: ['Özel test cihazları', 'Fikstür ve aparatlar', 'Ölçüm senaryosu', 'Validasyon düzeni'],
    overviewTitle: 'Başlangıçtan teslim dosyasına kadar net, izlenebilir ve uygulanabilir ilerleme.',
    overviewDesc: 'Doğrulanmayan ürün ve proses risk taşır. Test sistemlerini ölçülebilir, tekrarlanabilir ve operatör dostu olacak şekilde tasarlarız. Proje boyunca hedef, risk, revizyon ve teknik karar kayıtlarını görünür tutarız.',
    outcomes: [
      'Test senaryosu ve gereksinim dosyası',
      'Fikstür, aparat ve cihaz konsepti',
      'Sensör, ölçüm ve emniyet yaklaşımı',
      'Devreye alma, kalibrasyon ve doğrulama desteği'
    ],
    visualSectionTitle: 'Test ve doğrulama kapsamında iki teknik odak.',
    visualSectionDesc: 'Test ve doğrulamada ölçüm prensibini, fikstür geometrisini ve sonuçların tekrar edilebilirliğini birlikte tasarlarız.',
    visuals: [
      {
        image: '/assets/images/detail-test-cmm.jpg',
        subtitle: 'Ölçüm disiplini',
        title: 'Kabul kriterini ölçülebilir hale getiririz.',
        desc: 'Tolerans, ölçüm metodu ve raporlama çıktısı daha test başlamadan netleşir.'
      },
      {
        image: '/assets/images/detail-test-fixture.jpg',
        subtitle: 'Fikstür tasarımı',
        title: 'Tekrarlanabilir test düzeni kurarız.',
        desc: 'Parçanın doğru konumlanması, sensör erişimi ve operatör akışı birlikte düşünülür.'
      }
    ],
    methods: [
      'Ölçülecek parametre, tolerans ve kabul kriterlerini tanımlarız.',
      'Parçaya ve prosese uygun fikstür mimarisini tasarlarız.',
      'Sensör, kontrol paneli, emniyet ve operatör akışını birlikte kurgularız.',
      'Test sonuçlarını raporlanabilir ve tekrar edilebilir hale getiririz.'
    ],
    related: [
      { link: '/urun-gelistirme-prototipleme', title: 'Ürün geliştirme', summary: 'Fikir, CAD, prototip ve teknik dosya akışı.' },
      { link: '/proses-alt-sigma', title: 'Proses iyileştirme', summary: 'Saha verisi, kök neden ve kontrol planı.' },
      { link: '/makine-otomasyon', title: 'Makine otomasyon', summary: 'Makine, hat entegrasyonu ve devreye alma.' }
    ]
  },
  'makine-otomasyon': {
    kicker: 'Çözüm 04',
    title: 'Makine ve Otomasyon Çözümleri',
    heroImage: '/assets/images/solution-machine-automation.png',
    heroDesc: 'Otomasyonu yalnızca ekipman eklemek olarak değil; çevrim, kalite, emniyet, bakım ve operatör deneyimini aynı sistemde kurmak olarak görürüz.',
    pills: ['Makine otomasyon', 'Hat entegrasyonu', 'Mekanik entegrasyon', 'Devreye alma desteği'],
    overviewTitle: 'Başlangıçtan teslim dosyasına kadar net, izlenebilir ve uygulanabilir ilerleme.',
    overviewDesc: 'Otomasyonu yalnızca ekipman eklemek olarak değil; çevrim, kalite, emniyet, bakım ve operatör deneyimini aynı sistemde kurmak olarak görürüz. Proje boyunca hedef, risk, revizyon ve teknik karar kayıtlarını görünür tutarız.',
    outcomes: [
      'Otomasyon ihtiyaç ve çevrim analizi',
      'Makine, hat ve yardımcı ekipman konsepti',
      'Yerleşim, emniyet ve bakım erişimi yaklaşımı',
      'Devreye alma ve sürdürülebilir kontrol planı'
    ],
    visualSectionTitle: 'Makine otomasyon kapsamında iki teknik odak.',
    visualSectionDesc: 'Makine otomasyonda ekipman seçimini, mekanik entegrasyonu ve kontrol mimarisini devreye alma gerçekliğiyle birlikte kurgularız.',
    visuals: [
      {
        image: '/assets/images/detail-machine-robot.jpg',
        subtitle: 'Otomasyon hücresi',
        title: 'Çevrim, emniyet ve kaliteyi aynı hücrede toplarız.',
        desc: 'Mekanik akış, sensörleme ve operatör erişimi devreye alma aşamasından önce netleşir.'
      },
      {
        image: '/assets/images/detail-machine-control-panel.jpg',
        subtitle: 'Kontrol mimarisi',
        title: 'Makine kararlarını kontrol sistemiyle bağlarız.',
        desc: 'PLC, HMI, saha sinyalleri ve bakım ihtiyaçları tek otomasyon omurgasında ele alınır.'
      }
    ],
    methods: [
      'Mevcut operasyonu, darboğazı ve operatör temas noktalarını inceleriz.',
      'Mekanik, elektrik, kontrol ve saha arayüzlerini netleştiririz.',
      'Yerleşim, erişim, güvenlik ve bakım gerekliliklerini tasarıma işleriz.',
      'Test, devreye alma ve kullanıcı geri bildirimleriyle sistemi olgunlaştırırız.'
    ],
    related: [
      { link: '/urun-gelistirme-prototipleme', title: 'Ürün geliştirme', summary: 'Fikir, CAD, prototip ve teknik dosya akışı.' },
      { link: '/proses-alt-sigma', title: 'Proses iyileştirme', summary: 'Saha verisi, kök neden ve kontrol planı.' },
      { link: '/test-dogrulama-cihazlari', title: 'Test ve doğrulama', summary: 'Fikstür, ölçüm senaryosu ve validasyon düzeni.' }
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const data = servicesData[serviceId];

  if (!data) return <div className="container" style={{paddingTop: '150px'}}><h2>Hizmet bulunamadı.</h2></div>;

  return (
    <main id="main" className="solution-detail-page">
      <section className="solution-hero">
        <img className="hero-image" src={data.heroImage} alt={data.title} />
        <div className="hero-shade"></div>
        <div className="container solution-hero-grid">
          <motion.div 
            className="solution-hero-copy glass-panel-dark"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow" style={{color: 'var(--gold)'}}>{data.kicker}</p>
            <h1>{data.title}</h1>
            <p>{data.heroDesc}</p>
            <a className="btn btn-primary" href="#iletisim">Bu konuda görüşelim <ArrowUpRight size={18}/></a>
          </motion.div>
          <motion.div 
            className="solution-spec glass-panel"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span>Kapsam</span>
            <strong>Bu çözümde yer alan kabiliyetler</strong>
            <div className="spec-pills">
              {data.pills.map((pill, idx) => <span key={idx}>{pill}</span>)}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section detail-overview">
        <div className="container detail-grid">
          <motion.div 
            className="detail-copy"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">Kapsam</p>
            <h2>{data.overviewTitle}</h2>
            <p>{data.overviewDesc}</p>
          </motion.div>
          <motion.div 
            className="outcome-panel glass-panel"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Beklenen çıktılar</h3>
            <ul>
              {data.outcomes.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="section detail-visual-section">
        <div className="container section-head compact">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow">Uygulama görselleri</p>
            <h2>{data.visualSectionTitle}</h2>
            <p>{data.visualSectionDesc}</p>
          </motion.div>
        </div>
        <div className="container detail-visual-grid">
          {data.visuals.map((vis, idx) => (
            <motion.figure 
              key={idx}
              className="detail-visual-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <img src={vis.image} alt={vis.title} loading="lazy" />
              <figcaption>
                <span>{vis.subtitle}</span>
                <h3>{vis.title}</h3>
                <p>{vis.desc}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <section className="section method-section">
        <div className="container section-head compact">
          <p className="eyebrow">Yöntem</p>
          <h2>Çözümü yalnızca tasarlamayız; doğrulanabilir bir uygulama yoluna bağlarız.</h2>
        </div>
        <div className="container method-grid">
          {data.methods.map((method, idx) => (
            <motion.div 
              key={idx}
              className="method-step glass-panel"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <span className="text-gradient">0{idx + 1}</span>
              <p>{method}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section related-section">
        <div className="container related-grid">
          <div>
            <p className="eyebrow">Birlikte çalışan çözümler</p>
            <h2>Bu hizmet çoğu projede diğer çözüm alanlarıyla birlikte daha güçlü sonuç verir.</h2>
          </div>
          <div className="related-links">
            {data.related.map((rel, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
              >
                <Link to={rel.link} className="related-card glass-panel" data-summary={rel.summary}>
                  {rel.title}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section contact-section" id="iletisim">
        <div className="container contact-grid">
          <div className="contact-copy">
            <p className="eyebrow">Proje hattı</p>
            <h2>Teknik fikri net bir mühendislik planına çevirelim.</h2>
            <p>Tasarım, prototip, proses iyileştirme, test cihazı veya otomasyon projeniz için hedefleri, riskleri ve ilk aksiyon planını birlikte netleştirelim.</p>
          </div>
          <form className="contact-form glass-panel-dark" onSubmit={(e) => e.preventDefault()}>
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
          </form>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;
