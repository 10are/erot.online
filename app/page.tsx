import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-blue-800">EROT</span>
              <span className="hidden sm:inline text-sm text-slate-600">
                Erken Okuryazarlık Testi
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#hakkinda"
                className="text-slate-600 hover:text-blue-700 transition-colors"
              >
                Hakkında
              </a>
              <a
                href="#egitim"
                className="text-slate-600 hover:text-blue-700 transition-colors"
              >
                Eğitim
              </a>
              <a
                href="#dernek"
                className="text-slate-600 hover:text-blue-700 transition-colors"
              >
                Ev Okulu Derneği
              </a>
              <a
                href="#basvuru"
                className="text-slate-600 hover:text-blue-700 transition-colors"
              >
                Başvuru
              </a>
            </div>
            <a
              href="https://www.evokuluapp.com/tum-egitimler/erot-testi-erken-okuryazarlik-testi-uygulayici-egitimi-mart-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
            >
              Başvuru Yap
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            Bilimsel Temelli Değerlendirme Aracı
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            EROT Erken Okuryazarlık Testi
            <span className="block text-blue-700 mt-2">
              Uygulayıcısı Olmak İster misiniz?
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Ülkemizde erken okuryazarlık becerilerine gereksinim duyan
            çocukların belirlenebilmesi için geliştirilmiş olan EROT eğitimi,{" "}
            <strong className="text-slate-800">Prof. Dr. Tevhide KARGIN</strong>{" "}
            ve{" "}
            <strong className="text-slate-800">
              Prof. Dr. Birkan GÜLDENOĞLU
            </strong>{" "}
            tarafından verilmektedir.
          </p>
          <a
            href="https://www.evokuluapp.com/tum-egitimler/erot-testi-erken-okuryazarlik-testi-uygulayici-egitimi-mart-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-lg hover:shadow-blue-700/25"
          >
            Başvuru için Tıklayınız
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </header>

      {/* EROT Hakkında Section */}
      <section id="hakkinda" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              EROT (Erken Okuryazarlık Testi) Hakkında
            </h2>
            <div className="w-24 h-1 bg-blue-700 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                EROT, çocukların ilkokula ve okuma-yazma sürecine ne kadar hazır
                olduklarını belirlemek amacıyla geliştirilmiş,{" "}
                <strong>bilimsel temelli bir değerlendirme aracıdır</strong>.
                Okuma becerisi sadece harfleri birleştirmekten ibaret değildir;
                bu süreç çocuk daha okula başlamadan çok önce zihninde
                şekillenmeye başlar. EROT, tam da bu "hazırbulunuşluk"
                seviyesini ölçer.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-lg">
                <h3 className="font-bold text-slate-900 mb-3">
                  Geliştirilme Amacı
                </h3>
                <p className="text-slate-600">
                  EROT, çocukların erken okuryazarlık becerilerini kapsamlı bir
                  şekilde değerlendirmek ve özellikle okuma güçlüğü (disleksi
                  vb.) riski taşıyan çocukları erken dönemde tespit etmek
                  amacıyla geliştirilmiştir.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Güçlü ve Zayıf Alanları Belirleme
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Çocukların güçlü ve desteklenmesi gereken alanlarını
                      belirler.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Müdahale Programları
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Okuma-yazma öğretimine başlamadan önce eksik kalan
                      beceriler için müdahale programları hazırlar.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Standardize Ölçüm
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Akademik başarıyı doğrudan etkileyen dil ve farkındalık
                      becerilerini standardize bir araçla ölçer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Yaş Aralığı */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl p-8 text-white mb-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Uygulama Yaş Aralığı
                </h3>
                <p className="text-blue-100 max-w-2xl">
                  EROT, genellikle{" "}
                  <strong className="text-white">60-72 ay (5-6 yaş)</strong>{" "}
                  arasındaki, okul öncesi eğitim alan veya ilkokul birinci
                  sınıfın hemen başındaki çocuklara uygulanmak üzere
                  tasarlanmıştır.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl font-bold mb-1">5-6</div>
                <div className="text-blue-200 text-sm">Yaş / 60-72 Ay</div>
                <div className="text-xs text-blue-300 mt-2">
                  "Altın Çağ" Dönemi
                </div>
              </div>
            </div>
          </div>

          {/* Alt Boyutlar */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
              EROT Neleri Ölçer? (7 Alt Boyut)
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {[
                {
                  title: "Alıcı Dil Sözcük Bilgisi",
                  desc: "Çocuğun duyduğu kelimeleri anlamlandırma kapasitesi.",
                  icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
                },
                {
                  title: "İfade Edici Dil Sözcük Bilgisi",
                  desc: "Çocuğun kavramları kelimelere dökme becerisi.",
                  icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
                },
                {
                  title: "İşlevsel Yazı Bilgisi",
                  desc: "Kitap tutma, yazı yönü ve yazılı materyallerin amacını kavrama.",
                  icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                },
                {
                  title: "Harf Bilgisi",
                  desc: "Harflerin şekillerini tanıma ve isimlerini ayırt etme.",
                  icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129",
                },
                {
                  title: "Sesbilgisel Farkındalık",
                  desc: "Kelimelerin içindeki sesleri fark etme, ayırma ve birleştirme yetisi.",
                  icon: "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z",
                },
                {
                  title: "Dinlediğini Anlama",
                  desc: "Sözel olarak anlatılan bir olay örgüsünü takip etme ve muhakeme yapma.",
                  icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                },
                {
                  title: "Sözcük Geri Çağırma",
                  desc: "Gördüğü bir nesneyi veya sembolü zihinden hızla isimlendirme hızı.",
                  icon: "M13 10V3L4 14h7v7l9-11h-7z",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg hover:border-blue-200 transition-all group"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-700 transition-colors">
                    <svg
                      className="w-5 h-5 text-blue-700 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={item.icon}
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Eğitmenler */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Eğitmenler
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">TK</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">
                      Prof. Dr. Tevhide KARGIN
                    </h4>
                    <p className="text-blue-700 text-sm">
                      Hasan Kalyoncu Üniversitesi
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Lisan eğitimini 1988 yılında Ankara Üniversitesi Eğitim
                  Bilimleri Fakültesi'nde tamamlamıştır. 1999 yılında Türkiye
                  Bilimler Akademisi "Doktora Sonrası Araştırma Bursu" ile ABD
                  University of Oregon'da çalışmalar yapmıştır. 2010 yılında
                  Profesör unvanını almış olup, otizm, öğrenme güçlükleri, okuma
                  güçlükleri, erken okuryazarlık ve eğitsel değerlendirme
                  alanlarında uzmanlaşmıştır.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">BG</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">
                      Prof. Dr. İ. Birkan GÜLDENOĞLU
                    </h4>
                    <p className="text-blue-700 text-sm">
                      Ankara Üniversitesi
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Ankara Üniversitesi Eğitim Bilimleri Fakültesi Özel Eğitim
                  Bölümü'nde öğretim üyesi olarak görev yapmaktadır. Zihin
                  Engelliler Eğitimi Anabilim Dalı'nda uzmanlaşan Güldenoğlu,
                  özel eğitim alanında Türkiye'nin önde gelen
                  akademisyenlerinden biridir. Erken çocukluk dönemi gelişimi ve
                  okuryazarlık becerileri üzerine çalışmaktadır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EROT Eğitimi Section */}
      <section id="egitim" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              EROT Uygulamacı Eğitimi
            </h2>
            <p className="text-xl text-blue-700 font-medium">
              Erken Teşhis, Aydınlık Gelecek
            </p>
            <div className="w-24 h-1 bg-blue-700 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Bir ölçme aracının başarısı, sadece sorularının niteliğine
                değil, onu uygulayan uzmanın donanımına da bağlıdır. EROT
                Eğitimi, çocukların akademik yolculuğundaki en kritik
                dönemeçleri doğru okumanızı ve bilimsel verilere dayalı bir
                rehberlik sunmanızı hedefler.
              </p>

              <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Eğitimin Amacı
                </h3>
                <p className="text-slate-600">
                  Bu eğitim programı, katılımcıların EROT'u standart yönergelere
                  uygun şekilde uygulayabilme, puanlayabilme ve elde edilen
                  sonuçları profesyonel bir rapor formatında analiz edebilme
                  becerisi kazanması için tasarlanmıştır.
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 mb-4">
                Eğitim İçeriğinde Neler Var?
              </h3>
              <ul className="space-y-3">
                {[
                  {
                    title: "Erken Okuryazarlık Teorisi",
                    desc: "Okuma ve yazma becerilerinin gelişimsel evreleri",
                  },
                  {
                    title: "7 Alt Boyutun Analizi",
                    desc: "Her bir alt testin nasıl uygulandığına dair detaylı gösterimler",
                  },
                  {
                    title: "Puanlama ve Norm Değerlendirme",
                    desc: "Ham puanların standart puanlara dönüştürülmesi",
                  },
                  {
                    title: "Hata Analizi ve Yorumlama",
                    desc: "Çocuğun hangi bilişsel süreçte takıldığını anlama",
                  },
                  {
                    title: "Müdahale Planı Oluşturma",
                    desc: "Test sonuçlarına göre destek programının ana hatları",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-blue-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium text-slate-900">
                        {item.title}:
                      </span>
                      <span className="text-slate-600 text-sm">
                        {" "}
                        {item.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Neden EROT */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
              EROT'un Önemi: Neden Bu Testi Uygulamalısınız?
            </h3>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Okuma-yazma süreci başladığında bazı çocuklar için her şey çok
              hızlı ilerlerken, bazıları için bu süreç sancılı bir mücadeleye
              dönüşür. EROT, bu mücadelenin daha başlamadan fark edilmesini
              sağlar.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Geleceği Öngörür",
                  desc: "Anaokulu dönemindeki erken okuryazarlık becerileri, 4. sınıftaki okuma başarısının en güçlü yordayıcısıdır.",
                  color: "blue",
                },
                {
                  title: "Etiketlemeyi Önler",
                  desc: 'Çocuk "başarısız" olarak etiketlenmeden, hangi spesifik alanda zorlandığı tespit edilir.',
                  color: "green",
                },
                {
                  title: "Objektif Veri Sunar",
                  desc: "Öğretmen ve ebeveyn gözlemlerini bilimsel ve standardize edilmiş verilerle destekler.",
                  color: "purple",
                },
                {
                  title: "Disleksi Riskini Erken Fark Eder",
                  desc: "Erken tespit ve doğru müdahale ile akranlarını yakalama şansını %80'e kadar artırır.",
                  color: "orange",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-slate-50 rounded-xl"
                >
                  <div
                    className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      item.color === "blue"
                        ? "bg-blue-100"
                        : item.color === "green"
                          ? "bg-green-100"
                          : item.color === "purple"
                            ? "bg-purple-100"
                            : "bg-orange-100"
                    }`}
                  >
                    <svg
                      className={`w-6 h-6 ${
                        item.color === "blue"
                          ? "text-blue-700"
                          : item.color === "green"
                            ? "text-green-700"
                            : item.color === "purple"
                              ? "text-purple-700"
                              : "text-orange-700"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Başvuru Butonu */}
          <div className="text-center mt-12">
            <a
              href="https://www.evokuluapp.com/tum-egitimler/erot-testi-erken-okuryazarlik-testi-uygulayici-egitimi-mart-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-lg hover:shadow-blue-700/25"
            >
              Başvuru için Tıklayınız
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Ev Okulu Derneği Section */}
      <section id="dernek" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Ev Okulu Derneği
            </h2>
            <p className="text-xl text-blue-700 font-medium max-w-3xl mx-auto">
              Türkiye'deki her bir evi eğitim ve mutluluk yuvasına
              dönüştürmektir.
            </p>
            <div className="w-24 h-1 bg-blue-700 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Biz Kimiz?
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Prof. Dr. Doğan CÜCELOĞLU'nun onursal başkanı olarak destek
                verdiği, 2017 senesinde kurulan Ev Okulu Derneği; Türkiye'nin en
                çok takipçi kitlesine sahip saygın bir sivil toplum kuruluşudur.
              </p>

              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-blue-700 font-bold text-lg">
                      Ev Eğitimin
                    </div>
                    <div className="text-slate-600 text-sm">Merkezidir</div>
                  </div>
                  <div>
                    <div className="text-blue-700 font-bold text-lg">
                      Her Ev Bir
                    </div>
                    <div className="text-slate-600 text-sm">Okuldur</div>
                  </div>
                  <div>
                    <div className="text-blue-700 font-bold text-lg">
                      Eğitim Evde
                    </div>
                    <div className="text-slate-600 text-sm">Başlar</div>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed">
                Ev Okulu Derneği; aileleri, anne-babaları, eğitimcileri,
                çocukları destekleyen pek çok eğitim faaliyetini organize
                etmektedir. Aileler için Ev Rehberliği'nden Ev ve Aile
                Danışmanlığı'na, çocuklar için atölyelerden astronomi kamplarına
                kadar geniş bir yelpazede hizmet sunmaktadır.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl p-6 text-white">
                <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  Vizyon
                </h4>
                <p className="text-blue-100">
                  Türkiye'deki her bir evi, eğitim ve mutluluk yuvasına
                  dönüştürmektir. Ev, eğitimin merkezidir.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-6 text-white">
                <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  Misyon
                </h4>
                <p className="text-slate-300">
                  Her türlü eğitim sürecinin ev ve aile ortamında desteklenmesi,
                  ailelerin çocuklarının öğrenme süreçlerine katılması, okul ve
                  ev uyumunun sağlanması, aile bağlarının kuvvetlenmesine
                  yardımcı olmak ve ev okulu sistemlerinin ülkemizde tanınmasını
                  amaçlamaktadır.
                </p>
              </div>
            </div>
          </div>

          {/* Değerler */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Değerlerimiz
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: "DİNLEMEK",
                  desc: "Her bir bireyi etkili iletişimin kurallarına dikkat ederek dinleriz.",
                },
                {
                  title: "REHBERLİK",
                  desc: "Her ailenin farklı beklentileri olduğundan kişiye özel rehberlik hizmeti sunuyoruz.",
                },
                {
                  title: "İŞ BİRLİĞİ",
                  desc: "Eğitim adına ben de varım, diyen kişi ve kurumlarla iş birliği kuruyoruz.",
                },
                {
                  title: "KABUL",
                  desc: "İnanç, ideoloji, düşünce yapılarını ayırt etmeksizin herkese hizmet veriyoruz.",
                },
                {
                  title: "DİSİPLİNLERARASILIK",
                  desc: "Farklı uzmanlık alanlarıyla iş birliği içinde çalışıyoruz.",
                },
                {
                  title: "YENİLİKÇİLİK",
                  desc: "Günümüz dünyasına değil, geleceğin dünyasına hazırlıyoruz.",
                },
                {
                  title: "ULAŞILABİLİRLİK",
                  desc: "Bilginin paha biçilemez olduğu felsefesinden hareketle pek çok içeriği ücretsiz sunuyoruz.",
                },
                {
                  title: "BECERİ ODAKLILIK",
                  desc: "Akademik skorlardan ziyade ilgi, yetenek ve karakter gelişimini önemsiyoruz.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-xl p-5 hover:bg-blue-50 transition-colors group"
                >
                  <h4 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EROT Uygulayıcıları Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              EROT Uygulayıcıları
            </h2>
            <div className="w-24 h-1 bg-blue-700 mx-auto rounded-full mb-8"></div>
            <div className="bg-white rounded-2xl p-12 border border-slate-200 max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-blue-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <p className="text-slate-600 text-lg">
                EROT Erken Okuryazarlık Testi uygulayıcıları, çok kısa bir süre
                içerisinde burada yayınlanacaktır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Başvuru Section */}
      <section id="basvuru" className="py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nasıl Başvuru Yapabilirim?
            </h2>
            <p className="text-xl text-blue-100">
              Eğitim programı,{" "}
              <strong className="text-white">28 Mart 2026</strong> tarihinde
              gerçekleştirilecek canlı oturum ile gerçekleştirilecektir.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">
                Eğitim İçeriği
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Alıcı Dilde Sözcük Bilgisi",
                  "İfade Edici Dilde Sözcük Bilgisi",
                  "Genel İsimlendirme",
                  "İşlev Bilgisi",
                  "Harf Bilgisi",
                  "Alıcı Dilde Harf Bilgisi",
                  "İfade Edici Dilde Harf Bilgisi",
                  "Sesbilgisel Farkındalık",
                  "Uyak Farkındalığı",
                  "İlk Sese Göre Eşleştirme",
                  "Son Sese Göre Eşleştirme",
                  "Cümleyi Sözcüklere Ayırma",
                  "Sözcükleri Hecelere Ayırma",
                  "Hece Birleştirme",
                  "İlk Ses Atma",
                  "Son Ses Atma",
                  "Dinlediğini Anlama",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-blue-300 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-blue-100 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center items-center text-center">
              <div className="bg-white rounded-2xl p-8 w-full max-w-md">
                <div className="text-6xl font-bold text-blue-700 mb-2">28</div>
                <div className="text-2xl font-semibold text-slate-900 mb-1">
                  Mart 2026
                </div>
                <div className="text-slate-600 mb-6">Canlı Oturum</div>
                <a
                  href="https://www.evokuluapp.com/tum-egitimler/erot-testi-erken-okuryazarlik-testi-uygulayici-egitimi-mart-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-semibold transition-colors mb-4"
                >
                  Başvuru için Tıklayınız
                </a>
                <a
                  href="https://www.evokuluapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-800 font-medium text-sm"
                >
                  Ev Okulu App'i İndirin
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">EROT</div>
              <p className="text-slate-400 text-sm">
                Erken Okuryazarlık Testi - Çocukların geleceği için erken tanı
                ve doğru müdahale.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hızlı Bağlantılar</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#hakkinda" className="hover:text-white transition">
                    EROT Hakkında
                  </a>
                </li>
                <li>
                  <a href="#egitim" className="hover:text-white transition">
                    Eğitim Programı
                  </a>
                </li>
                <li>
                  <a href="#dernek" className="hover:text-white transition">
                    Ev Okulu Derneği
                  </a>
                </li>
                <li>
                  <a href="#basvuru" className="hover:text-white transition">
                    Başvuru
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">İletişim</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a
                    href="https://www.evokuluapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    evokuluapp.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} EROT - Erken Okuryazarlık Testi.
              Tüm hakları saklıdır.
            </p>
            <p className="mt-2">Ev Okulu Derneği tarafından desteklenmektedir.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
