// --- TELEFON KILIFLARI ---
const KILIFLAR = [
    { id: 1, title: "iPhone 14 Pro Max Silikon Kılıf", category: "kilif", brand: "Apple", price: 349.90, image: "img/ip14pm-silikon.jpg", rating: 4.5, reviewCount: 124, specs: { "Malzeme": "Sıvı Silikon", "Renk": "Gece Yarısı", "MagSafe": "Var", "Koruma": "360 Derece" } },
    { id: 2, title: "Samsung Galaxy A55 MagSafe Kılıf", category: "kilif", brand: "Samsung", price: 299.90, image: "img/a55-magsafe.jpg", rating: 5.0, reviewCount: 45, specs: { "Malzeme": "Sert Polikarbon", "Renk": "Şeffaf", "MagSafe": "Var", "Kenar Koruması": "Ekstra Güçlendirilmiş" } },
    { id: 3, title: "iPhone 12 Şeffaf Kılıf", category: "kilif", brand: "Apple", price: 199.90, image: "img/ip12-seffaf.jpg", rating: 5.0, reviewCount: 32, specs: { "Malzeme": "TPU", "Renk": "Ultra Şeffaf", "Sararma Direnci": "Yüksek", "İncelik": "0.5mm" } },
    { id: 4, title: "iPhone 12 Pro Max Guard Kılıf", category: "kilif", brand: "Apple", price: 329.90, image: "img/ip12pm-guard.webp", rating: 5.0, reviewCount: 67, specs: { "Malzeme": "Askeri Sınıf Plastik", "Renk": "Siyah", "Düşme Testi": "3 Metre", "Ekran Koruması": "Var" } },
    { id: 5, title: "iPhone 13 Zore Premium Kılıf", category: "kilif", brand: "Zore", price: 249.90, image: "img/ip13-zore.jpg", rating: 5.0, reviewCount: 112, specs: { "Malzeme": "Deri Görünümlü PU", "Renk": "Kahverengi", "İç Yüzey": "Kadife", "Şıklık": "Premium" } },
    { id: 6, title: "Samsung S24 Ultra Silikon Kılıf", category: "kilif", brand: "Samsung", price: 189.90, image: "img/s24u-silikon.webp", rating: 5.0, reviewCount: 14, specs: { "Malzeme": "Yumuşak Silikon", "Renk": "Lacivert", "Kamera Koruması": "Var", "Tutuş Hissiyatı": "Kaymaz" } },
    { id: 15, title: "Samsung Galaxy A55 Silikon Kılıf", category: "kilif", brand: "Samsung", price: 199.90, image: "img/a55-kilif.webp", rating: 4.8, reviewCount: 89, specs: { "Malzeme": "TPE", "Renk": "Siyah", "Kamera Koruması": "Var", "İç Yapı": "Mikrofiber" } },
    { id: 18, title: "iPhone 12 Pro Max MagSafe Kılıf", category: "kilif", brand: "Apple", price: 449.90, image: "img/ip12pm-magsafe.webp", rating: 5.0, reviewCount: 92, specs: { "Özellik": "Mıknatıslı MagSafe", "Malzeme": "Deri", "Renk": "Lacivert", "Koruma": "Tam Gövde" } },
    { id: 19, title: "iPhone 14 Zore Kılıf", category: "kilif", brand: "Zore", price: 299.90, image: "img/ip14-zore.jpg", rating: 4.6, reviewCount: 58, specs: { "Seri": "Focus", "Malzeme": "Silikon + PC", "Dizayn": "Zırhlı Görünüm", "Yüzük Aparatı": "Var" } },
    { id: 20, title: "iPhone Premium Deri Kılıf", category: "kilif", brand: "Apple", price: 899.90, image: "img/iphone-premium.jpg", rating: 5.0, reviewCount: 15, specs: { "Malzeme": "Gerçek Deri", "Renk": "Taba", "Eskitme": "Doğal Patina", "Logo": "Gömme Elma" } },
    { id: 21, title: "Redmi Note 13 Pro Kılıf", category: "kilif", brand: "Xiaomi", price: 149.90, image: "img/redmi13pro-kilif.webp", rating: 4.5, reviewCount: 210, specs: { "Malzeme": "TPU", "Renk": "Şeffaf Füme", "Kamera Çerçevesi": "Metal", "Butonlar": "Hassas Kesim" } },
    { id: 22, title: "Redmi Note 13 Pro Silikon", category: "kilif", brand: "Xiaomi", price: 129.90, image: "img/redmi13pro-silikon.webp", rating: 4.4, reviewCount: 145, specs: { "Malzeme": "Mat Silikon", "Renk": "Buz Mavisi", "Leke Tutmaz": "Evet", "Esneklik": "Yüksek" } },
    { id: 23, title: "Samsung S24 Ultra MagSafe", category: "kilif", brand: "Samsung", price: 349.90, image: "img/s24u-magsafe.webp", rating: 4.9, reviewCount: 76, specs: { "Özellik": "MagSafe Uyumlu", "Malzeme": "Aramid Fiber", "Renk": "Karbon Siyah", "Ağırlık": "12g" } }
];

// --- KULAKLIKLAR ---
const KULAKLIKLAR = [
    { id: 7, title: "Apple AirPods 4. Nesil", category: "kulaklik", brand: "Apple", price: 5899.00, image: "img/airpods4.webp", rating: 4.5, reviewCount: 85, specs: { "Bağlantı": "Bluetooth 5.3", "Pil Ömrü": "30 Saat", "Suya Dayanıklılık": "IPX4", "Çip": "H2" } },
    { id: 8, title: "Samsung Kablolu Kulaklık", category: "kulaklik", brand: "Samsung", price: 299.90, image: "img/samsung-kablolu.webp", rating: 5.0, reviewCount: 123, specs: { "Giriş Tipi": "Type-C", "Kablo Uzunluğu": "1.2m", "Kontrolcü": "Var", "Ses Kalitesi": "Hi-Fi" } },
    { id: 9, title: "Apple AirPods Pro 3", category: "kulaklik", brand: "Apple", price: 7299.00, image: "img/airpods-pro3.webp", rating: 5.0, reviewCount: 56, specs: { "Gürültü Engelleme": "Aktif (ANC)", "Bağlantı": "Bluetooth 5.3", "Pil Ömrü": "6 Saat (Tek Şarj)", "Uzamsal Ses": "Var" } },
    { id: 16, title: "Apple AirPods 3. Nesil", category: "kulaklik", brand: "Apple", price: 4599.00, image: "img/airpods3.webp", rating: 4.9, reviewCount: 240, specs: { "Tasarım": "Yarı Açık", "Pil Ömrü": "30 Saat", "Şarj Kutusu": "Lightning", "Bas": "Adaptif EQ" } },
    { id: 17, title: "Apple AirPods Kablolu", category: "kulaklik", brand: "Apple", price: 649.90, image: "img/airpods-kablolu.webp", rating: 4.7, reviewCount: 312, specs: { "Giriş": "Lightning / 3.5mm Seçenekli", "Kontrol": "Ses ve Müzik", "Mikrofon": "Var", "Kablo": "Orijinal Kalite" } }
];

// --- ŞARJ CİHAZLARI VE KABLOLAR ---
const SARJ_ALETLERI = [
    { id: 10, title: "Samsung Hızlı Şarj Adaptörü", category: "sarj", brand: "Samsung", price: 549.90, image: "img/samsung-adaptor.webp", rating: 5.0, reviewCount: 456, specs: { "Güç": "25W", "Giriş": "Type-C", "Teknoloji": "Super Fast Charging", "Güvenlik": "Aşırı Isınma Koruması" } },
    { id: 11, title: "Hızlı Şarj Kablosu", category: "sarj", brand: "Zore", price: 129.90, image: "img/hizli-kablo.webp", rating: 5.0, reviewCount: 324, specs: { "Uzunluk": "2 Metre", "Akım": "3A", "Malzeme": "Örgü Kablo", "Dayanıklılık": "10.000+ Bükülme" } },
    { id: 12, title: "Hızlı Şarj Adaptörü ve Kablo Seti", category: "sarj", brand: "OEM", price: 699.90, image: "img/batarya-adaptor.webp", rating: 5.0, reviewCount: 89, specs: { "Güç": "20W", "Kutu İçeriği": "Adaptör + Kablo", "Uyumluluk": "Evrensel", "Garanti": "2 Yıl" } },
    { id: 24, title: "Type-C Hızlı Şarj Kablosu", category: "sarj", brand: "OEM", price: 99.90, image: "img/typec-kablo.webp", rating: 4.8, reviewCount: 856, specs: { "Uzunluk": "1m", "Güç": "60W Destekli", "Renk": "Beyaz", "Veri Aktarımı": "480 Mbps" } }
];

// --- EKRAN KORUYUCULAR ---
const EKRAN_KORUYUCULAR = [
    { id: 13, title: "Premium Ekran Koruyucu", category: "ekran", brand: "GlassGuard", price: 149.90, image: "img/ekran-koruyucu.webp", rating: 5.0, reviewCount: 1241, specs: { "Sertlik": "9H", "Malzeme": "Temperli Cam", "Kaplama": "Oleofobik", "Kenar Tipi": "2.5D" } },
    { id: 14, title: "Hayalet Ekran Koruyucu", category: "ekran", brand: "GlassGuard", price: 199.90, image: "img/ekran-hayalet.jpg", rating: 5.0, reviewCount: 456, specs: { "Özellik": "Gizlilik (Hayalet)", "Sertlik": "9H", "Açı": "30 Derece Kararma", "Dokunmatik Hassasiyeti": "Yüksek" } }
];

// TÜM ÜRÜNLERİ MERKEZİ BİR LİSTEDE BİRLEŞTİR (Sistem burayı kullanır)
const products = [
    ...KILIFLAR, 
    ...KULAKLIKLAR, 
    ...SARJ_ALETLERI, 
    ...EKRAN_KORUYUCULAR
];
