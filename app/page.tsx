import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-60 animate-float" />
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-50 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-fuchsia-100 rounded-full blur-3xl opacity-40 animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-lg text-white">
                E
              </div>
              <div>
                <span className="text-xl font-bold text-slate-900">EROT</span>
                <span className="hidden sm:block text-xs text-slate-500">
                  Erken Okuryazarlık Testi
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {["Hakkında", "Eğitim", "Dernek", "Başvuru"].map((item, i) => (
                <a
                  key={i}
                  href={`#${item.toLowerCase().replace("ı", "i")}`}
                  className="text-slate-600 hover:text-indigo-600 transition-colors relative group font-medium"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
            <a
              href="https://www.evokuluapp.com/tum-egitimler/erot-testi-erken-okuryazarlik-testi-uygulayici-egitimi-mart-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-6 py-2.5 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/25"
            >
              Başvuru Yap
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 text-sm font-medium animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            Bilimsel Temelli Değerlendirme Aracı
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8 animate-fade-in-up stagger-1">
            <span className="block text-slate-900">EROT Erken Okuryazarlık Testi</span>
            <span className="block mt-4 gradient-text">
              Uygulayıcısı Olmak İster misiniz?
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in-up stagger-2">
            Ülkemizde erken okuryazarlık becerilerine gereksinim duyan çocukların
            belirlenebilmesi için geliştirilmiş olan EROT eğitimi,{" "}
            <span className="text-slate-900 font-semibold">Prof. Dr. Tevhide KARGIN</span>{" "}
            ve{" "}
            <span className="text-slate-900 font-semibold">Prof. Dr. Birkan GÜLDENOĞLU</span>{" "}
            tarafından verilmektedir.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up stagger-3">
            <a
              href="https://www.evokuluapp.com/tum-egitimler/erot-testi-erken-okuryazarlik-testi-uygulayici-egitimi-mart-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine group flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all hover:shadow-2xl hover:shadow-indigo-500/30"
            >
              Başvuru için Tıklayınız
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#hakkinda"
              className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 px-8 py-5 rounded-2xl font-medium transition-colors border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50"
            >
              Daha Fazla Bilgi
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent" />
      </header>

      {/* EROT Hakkında Section */}
      <section id="hakkinda" className="relative py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
              Hakkında
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              EROT Nedir?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Çocukların ilkokula ve okuma-yazma sürecine ne kadar hazır olduklarını belirleyen bilimsel test
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                EROT, çocukların ilkokula ve okuma-yazma sürecine ne kadar hazır
                olduklarını belirlemek amacıyla geliştirilmiş,{" "}
                <span className="text-slate-900 font-semibold">bilimsel temelli bir değerlendirme aracıdır</span>.
                Okuma becerisi sadece harfleri birleştirmekten ibaret değildir;
                bu süreç çocuk daha okula başlamadan çok önce zihninde
                şekillenmeye başlar.
              </p>

              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-3 text-slate-900">Geliştirilme Amacı</h3>
                <p className="text-slate-600">
                  EROT, çocukların erken okuryazarlık becerilerini kapsamlı bir
                  şekilde değerlendirmek ve özellikle okuma güçlüğü (disleksi
                  vb.) riski taşıyan çocukları erken dönemde tespit etmek
                  amacıyla geliştirilmiştir.
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              {[
                {
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                  title: "Güçlü ve Zayıf Alanları Belirleme",
                  desc: "Çocukların güçlü ve desteklenmesi gereken alanlarını belirler.",
                },
                {
                  icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                  title: "Müdahale Programları",
                  desc: "Okuma-yazma öğretimine başlamadan önce eksik kalan beceriler için müdahale programları hazırlar.",
                },
                {
                  icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                  title: "Standardize Ölçüm",
                  desc: "Akademik başarıyı doğrudan etkileyen dil ve farkındalık becerilerini standardize bir araçla ölçer.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="hover-card group p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Yaş Aralığı */}
          <div className="relative rounded-3xl overflow-hidden mb-20">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600" />
            <div className="relative p-10 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left text-white">
                <h3 className="text-3xl font-bold mb-3">Uygulama Yaş Aralığı</h3>
                <p className="text-white/90 max-w-xl text-lg">
                  EROT, genellikle <strong className="text-white">60-72 ay (5-6 yaş)</strong> arasındaki,
                  okul öncesi eğitim alan veya ilkokul birinci sınıfın hemen başındaki çocuklara
                  uygulanmak üzere tasarlanmıştır.
                </p>
              </div>
              <div className="bg-white rounded-3xl p-8 text-center min-w-[180px] shadow-2xl">
                <div className="text-6xl font-bold text-indigo-600 mb-1">5-6</div>
                <div className="text-slate-600 font-medium">Yaş / 60-72 Ay</div>
                <div className="mt-3 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-medium">
                  "Altın Çağ" Dönemi
                </div>
              </div>
            </div>
          </div>

          {/* 7 Alt Boyut */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-slate-900 text-center mb-4">EROT Neleri Ölçer?</h3>
            <p className="text-slate-600 text-center mb-12">Okuma başarısının temel taşlarını oluşturan 7 farklı alt boyut</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {[
                { title: "Alıcı Dil Sözcük Bilgisi", desc: "Duyduğu kelimeleri anlamlandırma kapasitesi", color: "from-blue-500 to-cyan-500" },
                { title: "İfade Edici Dil Sözcük Bilgisi", desc: "Kavramları kelimelere dökme becerisi", color: "from-indigo-500 to-blue-500" },
                { title: "İşlevsel Yazı Bilgisi", desc: "Kitap tutma, yazı yönü ve materyalleri kavrama", color: "from-violet-500 to-indigo-500" },
                { title: "Harf Bilgisi", desc: "Harflerin şekillerini tanıma ve ayırt etme", color: "from-purple-500 to-violet-500" },
                { title: "Sesbilgisel Farkındalık", desc: "Kelimelerdeki sesleri fark etme ve birleştirme", color: "from-fuchsia-500 to-purple-500" },
                { title: "Dinlediğini Anlama", desc: "Olay örgüsünü takip etme ve muhakeme yapma", color: "from-pink-500 to-fuchsia-500" },
                { title: "Sözcük Geri Çağırma", desc: "Nesne ve sembolleri hızla isimlendirme", color: "from-rose-500 to-pink-500" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="hover-card group relative p-6 rounded-2xl bg-white border border-slate-200 hover:border-transparent hover:shadow-xl overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="text-xl font-bold text-white">{index + 1}</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Eğitmenler */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 text-center mb-4">Eğitmenler</h3>
            <p className="text-slate-600 text-center mb-12">Alanında uzman akademisyenler tarafından verilen eğitim</p>

            <div className="grid md:grid-cols-2 gap-8">
              <article className="hover-card group relative p-8 rounded-3xl bg-white border border-slate-200 hover:shadow-2xl hover:shadow-indigo-100 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-100 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 blur opacity-30 group-hover:opacity-50 transition-opacity" />
                    <Image
                      src="/egitmen_tevhide_kargin.png"
                      alt="Prof. Dr. Tevhide Kargın - EROT Eğitmeni"
                      width={100}
                      height={100}
                      className="relative w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="text-2xl font-bold text-slate-900 mb-1">
                      Prof. Dr. Tevhide KARGIN
                    </h4>
                    <p className="text-indigo-600 font-medium">Hasan Kalyoncu Üniversitesi</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Lisan eğitimini 1988 yılında Ankara Üniversitesi Eğitim Bilimleri Fakültesi'nde tamamlamıştır.
                  1999 yılında Türkiye Bilimler Akademisi "Doktora Sonrası Araştırma Bursu" ile ABD University of Oregon'da
                  çalışmalar yapmıştır. 2010 yılında Profesör unvanını almış olup, otizm, öğrenme güçlükleri, okuma güçlükleri,
                  erken okuryazarlık ve eğitsel değerlendirme alanlarında uzmanlaşmıştır.
                </p>
              </article>

              <article className="hover-card group relative p-8 rounded-3xl bg-white border border-slate-200 hover:shadow-2xl hover:shadow-purple-100 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-100 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-600 blur opacity-30 group-hover:opacity-50 transition-opacity" />
                    <Image
                      src="/egitmen_birkan_guldenoglu.png"
                      alt="Prof. Dr. İ. Birkan Güldenoğlu - EROT Eğitmeni"
                      width={100}
                      height={100}
                      className="relative w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="text-2xl font-bold text-slate-900 mb-1">
                      Prof. Dr. İ. Birkan GÜLDENOĞLU
                    </h4>
                    <p className="text-purple-600 font-medium">Ankara Üniversitesi</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Ankara Üniversitesi Eğitim Bilimleri Fakültesi Özel Eğitim Bölümü'nde öğretim üyesi olarak görev yapmaktadır.
                  Zihin Engelliler Eğitimi Anabilim Dalı'nda uzmanlaşan Güldenoğlu, özel eğitim alanında Türkiye'nin önde gelen
                  akademisyenlerinden biridir. Erken çocukluk dönemi gelişimi ve okuryazarlık becerileri üzerine çalışmaktadır.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* EROT Eğitimi Section */}
      <section id="egitim" className="relative py-32 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
              Eğitim Programı
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              EROT Uygulayıcı Eğitimi
            </h2>
            <p className="text-2xl gradient-text font-semibold">
              Erken Teşhis, Aydınlık Gelecek
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Bir ölçme aracının başarısı, sadece sorularının niteliğine değil,
                onu uygulayan uzmanın donanımına da bağlıdır. EROT Eğitimi, çocukların
                akademik yolculuğundaki en kritik dönemeçleri doğru okumanızı ve
                bilimsel verilere dayalı bir rehberlik sunmanızı hedefler.
              </p>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-xl mb-6 flex items-center gap-3 text-slate-900">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  Eğitimin Amacı
                </h3>
                <p className="text-slate-600">
                  Bu eğitim programı, katılımcıların EROT'u standart yönergelere uygun şekilde
                  uygulayabilme, puanlayabilme ve elde edilen sonuçları profesyonel bir rapor
                  formatında analiz edebilme becerisi kazanması için tasarlanmıştır.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-indigo-50 border border-slate-200">
              <h3 className="font-bold text-xl mb-6 text-slate-900">Eğitim İçeriği</h3>
              <ul className="space-y-4">
                {[
                  { title: "Erken Okuryazarlık Teorisi", desc: "Okuma ve yazma becerilerinin gelişimsel evreleri" },
                  { title: "7 Alt Boyutun Analizi", desc: "Her bir alt testin nasıl uygulandığına dair detaylı gösterimler" },
                  { title: "Puanlama ve Norm Değerlendirme", desc: "Ham puanların standart puanlara dönüştürülmesi" },
                  { title: "Hata Analizi ve Yorumlama", desc: "Çocuğun hangi bilişsel süreçte takıldığını anlama" },
                  { title: "Müdahale Planı Oluşturma", desc: "Test sonuçlarına göre destek programının ana hatları" },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium text-slate-900">{item.title}</span>
                      <p className="text-slate-600 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Neden EROT */}
          <div className="p-10 rounded-3xl bg-slate-50 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-4">Neden Bu Testi Uygulamalısınız?</h3>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-12">
              Okuma-yazma süreci başladığında bazı çocuklar için her şey çok hızlı ilerlerken,
              bazıları için bu süreç sancılı bir mücadeleye dönüşür. EROT, bu mücadelenin daha başlamadan fark edilmesini sağlar.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Geleceği Öngörür", desc: "Anaokulu dönemindeki beceriler, 4. sınıftaki okuma başarısının en güçlü yordayıcısıdır.", color: "from-blue-500 to-cyan-500", bg: "bg-blue-50" },
                { title: "Etiketlemeyi Önler", desc: 'Çocuk "başarısız" olarak etiketlenmeden, hangi alanda zorlandığı tespit edilir.', color: "from-green-500 to-emerald-500", bg: "bg-green-50" },
                { title: "Objektif Veri Sunar", desc: "Gözlemleri bilimsel ve standardize edilmiş verilerle destekler.", color: "from-violet-500 to-purple-500", bg: "bg-violet-50" },
                { title: "Disleksi Riskini Bulur", desc: "Erken tespit ile akranlarını yakalama şansını %80'e kadar artırır.", color: "from-orange-500 to-amber-500", bg: "bg-orange-50" },
              ].map((item, index) => (
                <div key={index} className={`hover-card text-center p-8 rounded-2xl ${item.bg} border border-transparent hover:border-slate-200 hover:shadow-lg`}>
                  <div className={`w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-3">{item.title}</h4>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <a
              href="https://www.evokuluapp.com/tum-egitimler/erot-testi-erken-okuryazarlik-testi-uygulayici-egitimi-mart-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all hover:shadow-2xl hover:shadow-indigo-500/30"
            >
              Başvuru için Tıklayınız
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Ev Okulu Derneği Section */}
      <section id="dernek" className="relative py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-fuchsia-100 text-fuchsia-700 text-sm font-medium mb-4">
              Organizatör
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Ev Okulu Derneği
            </h2>
            <p className="text-xl gradient-text font-semibold max-w-3xl mx-auto">
              Türkiye'deki her bir evi eğitim ve mutluluk yuvasına dönüştürmektir.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Biz Kimiz?</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Prof. Dr. Doğan CÜCELOĞLU'nun onursal başkanı olarak destek verdiği, 2017 senesinde
                kurulan Ev Okulu Derneği; Türkiye'nin en çok takipçi kitlesine sahip saygın bir
                sivil toplum kuruluşudur.
              </p>

              <div className="grid grid-cols-3 gap-4 p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 mb-8">
                {[
                  { top: "Ev Eğitimin", bottom: "Merkezidir" },
                  { top: "Her Ev Bir", bottom: "Okuldur" },
                  { top: "Eğitim Evde", bottom: "Başlar" },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="gradient-text font-bold text-lg">{item.top}</div>
                    <div className="text-slate-600 text-sm">{item.bottom}</div>
                  </div>
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed">
                Ev Okulu Derneği; aileleri, anne-babaları, eğitimcileri, çocukları destekleyen pek çok
                eğitim faaliyetini organize etmektedir. Aileler için Ev Rehberliği'nden Ev ve Aile
                Danışmanlığı'na, çocuklar için atölyelerden astronomi kamplarına kadar geniş bir
                yelpazede hizmet sunmaktadır.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-2xl">Vizyon</h4>
                  </div>
                  <p className="text-white/90 text-lg">
                    Türkiye'deki her bir evi, eğitim ve mutluluk yuvasına dönüştürmektir.
                    Ev, eğitimin merkezidir.
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-slate-200 relative overflow-hidden hover:shadow-xl transition-shadow">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full blur-2xl opacity-50" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-2xl text-slate-900">Misyon</h4>
                  </div>
                  <p className="text-slate-600">
                    Her türlü eğitim sürecinin ev ve aile ortamında desteklenmesi, ailelerin çocuklarının
                    öğrenme süreçlerine katılması, okul ve ev uyumunun sağlanması, aile bağlarının
                    kuvvetlenmesine yardımcı olmak ve ev okulu sistemlerinin ülkemizde tanınmasını amaçlamaktadır.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Değerler */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Değerlerimiz</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { title: "DİNLEMEK", desc: "Her bir bireyi etkili iletişimin kurallarına dikkat ederek dinleriz.", icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" },
                { title: "REHBERLİK", desc: "Kişiye özel rehberlik hizmeti sunuyoruz.", icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" },
                { title: "İŞ BİRLİĞİ", desc: "Eğitim adına ben de varım diyen kurumlarla iş birliği kuruyoruz.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                { title: "KABUL", desc: "Herkese ve her kesime hizmet veriyoruz.", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
                { title: "DİSİPLİNLERARASILIK", desc: "Farklı uzmanlık alanlarıyla iş birliği içinde çalışıyoruz.", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
                { title: "YENİLİKÇİLİK", desc: "Geleceğin dünyasına hazırlıyoruz.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                { title: "ULAŞILABİLİRLİK", desc: "Pek çok içeriği ücretsiz sunuyoruz.", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" },
                { title: "BECERİ ODAKLILIK", desc: "İlgi, yetenek ve karakter gelişimini önemsiyoruz.", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
              ].map((item, index) => (
                <div key={index} className="hover-card group p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center mb-4 group-hover:from-indigo-500 group-hover:to-purple-600 transition-all">
                    <svg className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EROT Uygulayıcıları */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
              Yakında
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-8">EROT Uygulayıcıları</h2>
            <div className="max-w-2xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-slate-50 to-indigo-50 border border-slate-200">
              <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-200">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <p className="text-xl text-slate-600">
                EROT Erken Okuryazarlık Testi uygulayıcıları, çok kısa bir süre içerisinde burada yayınlanacaktır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Başvuru Section */}
      <section id="basvuru" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 text-white">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Nasıl Başvuru Yapabilirim?</h2>
            <p className="text-xl text-white/90">
              Eğitim programı, <strong className="text-white">28 Mart 2026</strong> tarihinde
              gerçekleştirilecek canlı oturum ile gerçekleştirilecektir.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20">
              <h3 className="text-2xl font-bold mb-8 text-white">Eğitim İçeriği</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Alıcı Dilde Sözcük Bilgisi", "İfade Edici Dilde Sözcük Bilgisi",
                  "Genel İsimlendirme", "İşlev Bilgisi", "Harf Bilgisi",
                  "Alıcı Dilde Harf Bilgisi", "İfade Edici Dilde Harf Bilgisi",
                  "Sesbilgisel Farkındalık", "Uyak Farkındalığı", "İlk Sese Göre Eşleştirme",
                  "Son Sese Göre Eşleştirme", "Cümleyi Sözcüklere Ayırma",
                  "Sözcükleri Hecelere Ayırma", "Hece Birleştirme", "İlk Ses Atma",
                  "Son Ses Atma", "Dinlediğini Anlama"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-2">
                    <div className="w-2 h-2 rounded-full bg-white/70" />
                    <span className="text-white/90 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-white rounded-3xl p-10 text-center w-full max-w-md shadow-2xl">
                <div className="text-8xl font-bold text-indigo-600 mb-2">28</div>
                <div className="text-3xl font-semibold text-slate-900 mb-2">Mart 2026</div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium mb-8">
                  Canlı Oturum
                </div>
                <a
                  href="https://www.evokuluapp.com/tum-egitimler/erot-testi-erken-okuryazarlik-testi-uygulayici-egitimi-mart-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine block w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white py-5 rounded-2xl font-semibold text-lg transition-all hover:shadow-xl mb-4"
                >
                  Başvuru için Tıklayınız
                </a>
                <a
                  href="https://www.evokuluapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-medium transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Ev Okulu App'i İndirin
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-xl">
                  E
                </div>
                <div>
                  <span className="text-2xl font-bold">EROT</span>
                  <p className="text-slate-400 text-sm">Erken Okuryazarlık Testi</p>
                </div>
              </div>
              <p className="text-slate-400 max-w-md">
                Çocukların geleceği için erken tanı ve doğru müdahale.
                Bilimsel temelli değerlendirme ile aydınlık yarınlar.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-6">Hızlı Bağlantılar</h4>
              <ul className="space-y-3">
                {["Hakkında", "Eğitim", "Dernek", "Başvuru"].map((item, i) => (
                  <li key={i}>
                    <a href={`#${item.toLowerCase().replace("ı", "i")}`} className="text-slate-400 hover:text-white transition-colors">
                      {item === "Hakkında" ? "EROT Hakkında" : item === "Eğitim" ? "Eğitim Programı" : item === "Dernek" ? "Ev Okulu Derneği" : item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-6">İletişim</h4>
              <a
                href="https://www.evokuluapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                evokuluapp.com
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} EROT - Erken Okuryazarlık Testi. Tüm hakları saklıdır.
            </p>
            <p className="text-slate-500 text-sm">
              Ev Okulu Derneği tarafından desteklenmektedir.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
