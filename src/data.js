import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/kotlin.png";
import Tools13 from "/assets/tools/firebase.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools16 from "/assets/tools/ts.png";
import Tools17 from "/assets/tools/php.png";
import Tools18 from "/assets/tools/vite.png";
import Tools19 from "/assets/tools/mysql.png";


export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Kotlin",
    ket: "Language",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Firebase",
    ket: "Framework",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "HTML",
    ket: "Language",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "CSS",
    ket: "Language",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "TypeScript",
    ket: "Language",
    dad: "1600",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "PHP",
    ket: "Language",
    dad: "1700",
  },
  {
    id: 18,
    gambar: Tools18,
    nama: "Vite",
    ket: "Framework",
    dad: "1800",
  },
  {
    id: 19,
    gambar: Tools19,
    nama: "MySql",
    ket: "Framework",
    dad: "1900",
  },
];

import Proyek1 from "/assets/proyek/proyek1.jpg";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.png";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.png";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "ZDoS",
    subtitle: "Kode ini menggunakan modul socket dan threading Python untuk...",
    fullDescription:"Kode ini menggunakan modul socket dan threading Python untuk secara terus-menerus membanjiri alamat IP target tertentu pada Port 80 (HTTP) dengan permintaan data yang sangat banyak, sebanyak 100 thread dibuat, dan masing-masing menjalankan fungsi attack() secara bersamaan untuk mengonsumsi semua sumber daya jaringan dan server target sehingga server tersebut menjadi tidak responsif atau tidak dapat diakses oleh pengguna yang sah.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/Daffzoldyck/ZDoS",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "ESP32 Web-Based Servo Control",
    subtitle: "Proyek ini  adalah sistem kontrol servo motor berbasis...",
    fullDescription:"Proyek ini adalah sistem kontrol servo motor berbasis ESP32 yang dapat dikendalikan secara nirkabel melalui web browser menggunakan koneksi WiFi. Pengguna dapat mengatur sudut servo dari 0 hingga 180 derajat secara real-time melalui slider interaktif berbasis HTML dan JavaScript yang diakses melalui alamat IP ESP32. Sistem ini menggunakan WiFiServer pada port 80, komunikasi HTTP, serta servo yang dikendalikan langsung dari perintah web, sehingga cocok untuk diterapkan pada sistem smart device, otomasi, dan IoT berbasis jaringan lokal.",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/Daffzoldyck/Kontrol-Servo-Via-Web-Server",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "IoT Smart Monitoring dengan ESP32 & Blynk",
    subtitle: "Proyek ini merupakan sistem monitoring suhu dan kelembapan berbasis...",
    fullDescription:"Proyek ini merupakan sistem monitoring suhu dan kelembapan berbasis IoT menggunakan ESP32, sensor DHT11, dan platform Blynk. Data suhu dan kelembapan dikirimkan secara real-time ke aplikasi Blynk melalui koneksi WiFi dan ditampilkan pada widget virtual. Selain itu, pengguna juga dapat mengontrol LED dari jarak jauh melalui tombol di aplikasi Blynk. Sistem ini bekerja secara otomatis dengan pembaruan data setiap 2 detik, sehingga cocok untuk penerapan smart home, monitoring ruangan, dan sistem kendali jarak jauh berbasis internet.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/Daffzoldyck/Sistem-Pemantauan-Suhu-dan-Kelembaban-dengan-ESP32-dan-Blynk/blob/main/iot_simple.ino",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "Interactive Personal Portfolio Website",
    subtitle: "Proyek ini adalah website portofolio pribadi berbasis React...",
    fullDescription:"Proyek ini adalah website portofolio pribadi berbasis React dan Vite yang dirancang secara interaktif, modern, dan responsif untuk menampilkan profil, skill, serta proyek yang pernah saya kerjakan. Website ini dilengkapi dengan elemen visual interaktif, animasi, dan tata letak yang menyesuaikan berbagai ukuran layar. Seluruh konten dapat dikustomisasi dengan mudah, sehingga cocok digunakan sebagai media personal branding, dokumentasi karya, dan showcase kemampuan di bidang pemrograman dan teknologi.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/Daffzoldyck/daff",
    dad: "400",
  },
    {
    id: 5,
    image: Proyek5,
    title: "IoT Motion Detection & Security Alert System",
    subtitle: "Proyek ini merupakan sistem keamanan berbasis IoT menggunakan...",
    fullDescription:"Proyek ini merupakan sistem keamanan berbasis IoT menggunakan ESP32, sensor PIR, dan platform Blynk untuk mendeteksi gerakan di dalam ruangan secara real-time. Saat sensor PIR mendeteksi adanya pergerakan, sistem akan langsung mengirimkan notifikasi peringatan ke aplikasi Blynk melalui fitur event logging, sehingga pengguna dapat memantau kondisi ruangan dari jarak jauh. Proyek ini cocok diterapkan untuk keamanan rumah, ruang kelas, gudang, maupun sistem monitoring area terbatas berbasis internet.",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/Daffzoldyck/Deteksi-Gerak-Dengan-Sensor-PIR",
    dad: "500",
  },
  {
    id: 6,
    image: Proyek6,
    title: "Smart Light IoT dengan Kontrol Otomatis & Manual",
    subtitle: "Proyek ini adalah sistem lampu pintar berbasis IoT...",
    fullDescription:"Proyek ini adalah sistem lampu pintar berbasis IoT menggunakan ESP32, sensor LDR, dan aplikasi Blynk yang mampu mengontrol lampu secara otomatis berdasarkan intensitas cahaya lingkungan maupun secara manual melalui smartphone. Saat kondisi ruangan gelap, sistem akan menyalakan lampu secara otomatis, dan akan mematikannya kembali saat terang, sementara pengguna juga dapat mengaktifkan mode manual untuk mengontrol lampu dari jarak jauh melalui Blynk. Proyek ini cocok untuk penerangan smart home yang hemat energi, responsif, dan terhubung ke internet.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/Daffzoldyck/Lampu-Otomatis-Dengan-LDR",
    dad: "600",
  },
];
