import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kullanım Şartları | Mios Pizza",
  description: "Mios Pizza web sitesi ve hizmetlerinin kullanım şartları.",
};

const sections = [
  {
    title: "Genel Hükümler",
    content:
      "Bu web sitesi Mios Pizza Restoran İşletmeciliği Ltd. Şti. (\"Mios Pizza\") tarafından işletilmektedir. Siteyi ve ilgili hizmetleri (bilgi edinme, iletişim, sipariş yönlendirmesi vb.) kullanarak bu kullanım şartlarını kabul etmiş sayılırsınız. Şartları kabul etmiyorsanız lütfen sitemizi kullanmayınız.",
  },
  {
    title: "Hizmet Kapsamı",
    content:
      "Mios Pizza, İstanbul Kadıköy / Kozyatağı bölgesinde restoran ve teslimat hizmeti sunmaktadır. Web sitemiz; menü, iletişim bilgileri, çalışma saatleri ve kampanya duyuruları gibi bilgileri sunar. Siparişler telefon veya WhatsApp üzerinden alınır; online ödeme veya kapıda ödeme seçenekleri mevcut olabilir.",
  },
  {
    title: "Kullanıcı Yükümlülükleri",
    content:
      "Sitemizi yalnızca yasalara ve iyi niyet kurallarına uygun şekilde kullanmanız beklenir. Yanıltıcı, saldırgan veya üçüncü kişilerin haklarına zarar veren içerik paylaşımı yasaktır. Sipariş verirken doğru iletişim ve adres bilgisi vermeniz, teslimat ve hizmet kalitesi için önemlidir.",
  },
  {
    title: "Fikri Mülkiyet",
    content:
      "Sitedeki metinler, görseller, logo ve tasarım öğeleri Mios Pizza’ya aittir. İzinsiz kopyalama, çoğaltma veya ticari kullanım yasaktır. Alıntı yapılacaksa kaynak gösterilmesi gerekmektedir.",
  },
  {
    title: "Sipariş ve Teslimat",
    content:
      "Siparişler, belirtilen iletişim kanalları üzerinden alınır. Teslimat süresi ve ücreti, mesafe ve yoğunluğa göre değişebilir. Restoran, mücbir sebepler veya yoğunluk nedeniyle sipariş kabul etmeme veya teslimat süresini uzatma hakkını saklı tutar. Sipariş onayı restoran tarafından verilir.",
  },
  {
    title: "Şikayet ve İletişim",
    content:
      "Şikayet ve önerilerinizi info@miospizza.com.tr veya şube telefonlarımız üzerinden iletebilirsiniz: Kozyatağı 0216 999 50 57 ve 0531 345 58 00; Erenköy 0216 759 54 34 ve 0533 558 54 34. Müşteri memnuniyeti önceliğimizdir; talepleriniz en kısa sürede değerlendirilir.",
  },
  {
    title: "Sorumluluk Sınırı",
    content:
      "Web sitemiz \"olduğu gibi\" sunulmaktadır. Teknik aksaklıklar veya güncellemeler nedeniyle bilgilerde geçici hatalar olabilir. Mios Pizza, sitedeki bilgilerin eksiksiz ve güncel olduğuna dair garanti vermez. Hizmete ilişkin asıl sorumluluk, sipariş ve teslimat sözleşmesi kapsamında belirlenir.",
  },
  {
    title: "Değişiklikler",
    content:
      "Mios Pizza, bu kullanım şartlarını önceden duyurmaksızın değiştirme hakkını saklı tutar. Değişiklikler bu sayfada yayımlanarak yürürlüğe girer. Sitenin kullanıma devam etmeniz, güncel şartları kabul ettiğiniz anlamına gelir.",
  },
  {
    title: "Uygulanacak Hukuk",
    content:
      "Bu şartlara Türkiye Cumhuriyeti kanunları uygulanır. Uyuşmazlıklarda İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.",
  },
];

export default function KullanimSartlariPage() {
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
              Kullanım Şartları
            </h1>
            <div className="w-24 h-1 bg-dark-green rounded-full mx-auto mb-6" />
            <p className="text-dark-green/80 text-lg">
              Mios Pizza web sitesi ve hizmetlerinin kullanımına ilişkin şartlar.
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
