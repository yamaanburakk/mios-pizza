import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Mios Pizza",
  description: "Mios Pizza gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi.",
};

const sections = [
  {
    title: "Veri Sorumlusu",
    content:
      "Mios Pizza Restoran İşletmeciliği Ltd. Şti. (bundan sonra \"Mios Pizza\"), 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında veri sorumlusu sıfatıyla kişisel verilerinizi işlemektedir. Adres: Kozyatağı mh. Kadıpaşa sk. No:28/C Kadıköy, İstanbul. İletişim: info@miospizza.com.tr",
  },
  {
    title: "Toplanan Veriler",
    content:
      "Web sitemiz ve sipariş süreçlerimizde adınız, iletişim bilgileriniz (telefon, e-posta), teslimat adresi, sipariş geçmişi ve tercihleriniz gibi veriler toplanabilir. Web sitesi ziyaretlerinde teknik çerezler (oturum, güvenlik) kullanılabilir.",
  },
  {
    title: "Verilerin Kullanım Amaçları",
    content:
      "Toplanan veriler; sipariş ve teslimat süreçlerinin yürütülmesi, müşteri hizmetleri, kampanya ve duyurular (açık rıza ile), web sitesi performansının iyileştirilmesi ve yasal yükümlülüklerin yerine getirilmesi amacıyla kullanılmaktadır.",
  },
  {
    title: "Verilerin Paylaşımı",
    content:
      "Kişisel verileriniz, yalnızca sipariş ve teslimat hizmeti veren iş ortaklarımız ve yasal zorunluluklar çerçevesinde yetkili kurumlarla, KVKK’da öngörülen sınırlar içinde paylaşılabilir. Verileriniz üçüncü taraflara satılmaz.",
  },
  {
    title: "Saklama Süresi",
    content:
      "Kişisel verileriniz, işleme amacının gerektirdiği süre ve yasal saklama süreleri boyunca saklanır. Amaç ortadan kalktığında veriler silinir, yok edilir veya anonim hale getirilir.",
  },
  {
    title: "Haklarınız",
    content:
      "KVKK 11. madde kapsamında kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini isteme, silinmesini veya yok edilmesini isteme ve otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme haklarına sahipsiniz. Başvurularınızı info@miospizza.com.tr üzerinden iletebilirsiniz.",
  },
  {
    title: "Çerezler",
    content:
      "Sitemiz, kullanıcı deneyimini iyileştirmek ve site trafiğini analiz etmek amacıyla çerez kullanabilir. Tarayıcı ayarlarınızdan çerezleri kapatabilirsiniz; ancak bu durumda bazı özellikler kısıtlanabilir.",
  },
  {
    title: "Güncellemeler",
    content:
      "Bu gizlilik politikası güncellendiğinde, değişiklikler bu sayfada yayımlanacaktır. Son güncelleme tarihi aşağıda belirtilir.",
  },
];

export default function GizlilikPolitikasiPage() {
  return (
    <div className="min-h-screen bg-cream">
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dark-green/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-dark-green/10 text-dark-green rounded-full text-sm font-semibold mb-4">
              Yasal
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-green mb-4">
              Gizlilik Politikası
            </h1>
            <div className="w-24 h-1 bg-dark-green rounded-full mx-auto mb-6" />
            <p className="text-dark-green/80 text-lg">
              Mios Pizza olarak kişisel verilerinizin güvenliği ve gizliliği bizim için önemlidir.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-10">
            {sections.map((section, index) => (
              <article key={index}>
                <h2 className="text-xl sm:text-2xl font-bold text-dark-green mb-3">
                  {section.title}
                </h2>
                <p className="text-dark-green/85 leading-relaxed">{section.content}</p>
              </article>
            ))}
            <p className="text-sm text-dark-green/60 pt-4">
              Son güncelleme: Mart 2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 border-t border-dark-green/10">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-terracotta hover:text-terracotta-dark font-semibold transition-colors"
          >
            <span>←</span> Ana Sayfaya Dön
          </Link>
        </div>
      </section>
    </div>
  );
}
