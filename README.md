# TodoVue

**TodoVue** adalah aplikasi manajemen tugas sederhana yang dibuat menggunakan framework **Vue.js**. Aplikasi ini mendukung fitur login, registrasi, dan pengelolaan daftar tugas untuk pengguna yang sudah terautentikasi.

## Fitur
- **Manajemen Tugas**:
  - Menambah tugas baru.
  - Menghapus tugas yang tidak diperlukan.
  - Menandai tugas sebagai selesai/tidak selesai.
- **Autentikasi Pengguna**:
  - Halaman login dan registrasi pengguna.
  - Simulasi login dengan penyimpanan data di state lokal menggunakan Vuex.
- **Navigasi Halaman**:
  - Halaman utama untuk daftar tugas.
  - Halaman login.
  - Halaman registrasi.

## Teknologi yang Digunakan
- **Vue.js**: Framework JavaScript untuk membangun antarmuka pengguna.
- **Vue Router**: Untuk navigasi antar halaman.
- **Vuex**: Untuk manajemen state global.
- **npm**: Pengelola paket untuk menginstal dependensi.

## Struktur Proyek
src/ |-- assets/ # File statis (gambar, font, dll.) |-- components/ # Komponen reusable | |-- TodoList.vue # Daftar tugas | |-- TodoItem.vue # Item tugas | |-- Login.vue # Form login | |-- Register.vue # Form registrasi |-- store/ # Konfigurasi Vuex untuk state management | |-- main.js # Vuex store utama |-- views/ # Halaman (views) untuk navigasi | |-- Home.vue # Halaman utama | |-- LoginPage.vue # Halaman login | |-- RegisterPage.vue # Halaman registrasi |-- App.vue # Komponen root aplikasi |-- index.js # Entry point utama aplikasi |-- router.js # Konfigurasi Vue Router

markdown
Salin kode

## Instalasi
Pastikan Anda sudah menginstal **Node.js** dan **npm** di sistem Anda.

1. Clone repositori ini:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
Instal dependensi proyek:

bash
Salin kode
npm install
Jalankan server pengembangan:

bash
Salin kode
npm run serve
Buka di browser:

Aplikasi akan berjalan di http://localhost:8080.
File Tambahan
package.json: Berisi konfigurasi proyek dan dependensi yang diperlukan.
package-lock.json: Digunakan untuk mengunci versi dependensi.
node_modules/: Folder yang berisi modul-modul yang diinstal melalui npm install.
Prasyarat
Sebelum menjalankan proyek, pastikan Anda telah menginstal Vue CLI:

bash
Salin kode
npm install -g @vue/cli
