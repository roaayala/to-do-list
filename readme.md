# 📝 Vanilla JS Mini Project Management Application

![Mini Project Management Preview](https://via.placeholder.com/800x400?text=Insert+Your+App+Screenshot+Here)

Sebuah aplikasi manajemen proyek (*Project Management*) yang dibangun 100% menggunakan **Vanilla JavaScript**, HTML, dan CSS. Proyek ini merupakan bagian dari kurikulum **The Odin Project** dan dirancang untuk menguji pemahaman mendalam mengenai manipulasi DOM, Arsitektur MVC, dan *State Management*.

[👉 **Lihat Live Demo di sini!**](https://roaayala.github.io/to-do-list) *(Ganti dengan link aslimu jika sudah di-deploy)*

---

## ✨ Fitur Utama

- **Hierarki Data 3-Level:** Organisasi tugas yang terstruktur rapi mulai dari `Project` > `Task` > `Todo`.
- **Manajemen Waktu Presisi:** Menggunakan `date-fns` untuk memformat, memvalidasi, dan mengelola tenggat waktu (*deadline*) tugas secara akurat tanpa membebani performa aplikasi.
- **Flat State / Relational Data:** Menggunakan arsitektur penyimpanan data yang sejajar (mirip *Relational Database*) untuk mencegah *nested data hell* dan mempermudah manipulasi data skala besar.
- **Cascade Delete:** Penghapusan data berantai yang aman. Menghapus sebuah `Project` akan secara otomatis membersihkan semua `Task` dan `Todo` di dalamnya untuk mencegah *orphaned data* (data sampah) di memori.
- **Data Persistence:** Terintegrasi penuh dengan `localStorage`. Semua datamu aman dan tidak akan hilang saat *browser* di-*refresh*.
- **Dynamic Reusable Forms:** Komponen form dialog yang sepenuhnya dinamis dan dapat digunakan kembali untuk mode *Create* maupun *Edit* tanpa perlu menulis ulang elemen HTML.

---

## 🏗️ Arsitektur di Balik Layar

Meskipun terlihat sederhana dari luar, aplikasi ini dibangun dengan pola pikir *Software Engineering* tingkat lanjut:

1. **Centralized AppController (Sang Orkestrator):**
   Aplikasi ini tidak melakukan *prop drilling* manual. Sebagai gantinya, sebuah `AppController` bertindak sebagai otak utama (SSOT - *Single Source of Truth*) yang mengelola *State* (status aktif), *Models* (brankas data), dan *Actions* (kumpulan fungsi), lalu mendistribusikannya ke seluruh komponen UI.

2. **MVC (Model-View-Controller) Pattern:**
   Pemisahan tugas yang sangat tegas antara logika bisnis dan tampilan UI.
   - **Models:** Cetak biru struktur data (`Project`, `Task`, `Todo`).
   - **Controllers:** Manajer data yang menangani logika CRUD (Create, Read, Update, Delete) untuk masing-masing entitas secara independen.
   - **Views:** Komponen UI murni (seperti `Sidebar`, `MainLayout`, `DialogForm`) yang hanya bertugas me-render data yang dikirimkan.

---

## 💻 Teknologi yang Digunakan

- **HTML5** (Semantik & Aksesibilitas)
- **CSS3** (Flexbox, Grid, BEM Methodology, Vanilla CSS Custom Properties)
- **JavaScript (ES6+)** (Modules, Classes, Arrow Functions, Array Methods)
- **Ekosistem & Library Tambahan:**
  - `date-fns` (Untuk manipulasi dan pemformatan tanggal/waktu yang efisien)
  
---

## 🧠 Pelajaran Berharga (*Lessons Learned*)

Proyek ini adalah titik balik pemahaman fundamental JavaScript saya:
- Mengalami dan memecahkan masalah **Prop Drilling Hell** dengan menciptakan objek `actions` yang diteruskan dari atas ke bawah.
- Memahami konsep **Data Denormalization** dan menyadari kapan harus menggunakan arsitektur *Flat State* dibandingkan *Nested State*.
- Membedakan antara **"Push Data"** dan **"Pull Data"** dengan memanfaatkan fungsi *Getter/Setter* untuk menghindari *stale closure* (data basi) di dalam *event listener*.
- Menguasai serialisasi data menggunakan `JSON.stringify` dan `JSON.parse` untuk menjembatani *Object/Array* JavaScript dengan `localStorage` berbasis *string*.

---

## 🚀 Cara Menjalankan Secara Lokal

1. _Clone_ repositori ini ke komputer lokalmu:
   ```bash
   git clone https://github.com/roaayala/mini-project-management.git
2. cd mini-project-management
3. npx serve src
