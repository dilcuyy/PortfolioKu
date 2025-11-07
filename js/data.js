/**
 * js/data.js
 * Objek Global yang berisi semua konten dinamis untuk Portofolio Grid Asimetris.
 * Data ini akan dimuat oleh app.js untuk mengisi elemen-elemen secara modular.
 */

const ASYMMETRIC_PORTFOLIO_DATA = {

    // =========================================================================
    // 1. DATA HERO SECTION
    // =========================================================================
    hero: {
        mainTitle: "ABDILA ASY SYAFIQ",
        tagline: "WEBSITE DEVELOPER",
        roleDescription: "STUDENTS OF THE FACULTY OF INFORMATION AND DIGITAL ENGINEERING.",
    },

    // =========================================================================
    // 2. DATA TENTANG SAYA (ABOUT SECTION)
    // =========================================================================
    about: {
        title: "Dimensi Persona",
        subtitle: "Latar Belakang & Profil Singkat",
        introText: `
            <p>Saya <strong>Abdila Asy Syafiq</strong>, seorang individu dengan latar belakang studi di bidang <strong>Sistem Informasi</strong>.</p>
            
            <p><strong>Latar Belakang Akademik:</strong></p>
            <ul>
                <li><strong>Program Studi:</strong> S1 - Sistem Informasi</li>
                <li><strong>Periode Masuk:</strong> 2023 Ganjil</li>
                <li><strong>Jalur Pendaftaran:</strong> Seleksi Mandiri</li>
                <li><strong>Status Mahasiswa:</strong> Aktif</li>
            </ul>

            <p><strong>Profil Pribadi Singkat:</strong></p>
            <ul>
                <li><strong>Tanggal Lahir:</strong> 28 Agustus 2004 (Bekasi)</li>
                <li><strong>Jenis Kelamin:</strong> Laki-Laki</li>
                <li><strong>No. HP:</strong> 089517939138</li>
                <li><strong>Tinggi / Berat Badan:</strong> 160 cm / 45 kg</li>
                <li><strong>Domisili:</strong> Kota Bekasi, Jawa Barat</li>
            </ul>

            <p class="mt-20">Fokus saya adalah menciptakan solusi digital yang <strong>stabil</strong> dan kode yang <strong>bersih</strong> mengaplikasikan struktur sistematis dalam setiap desain web.</p>
        `,
        // Data ini akan digunakan untuk membuat Diagram Radar/Dot Matrix oleh app.js
        skills: [
            { name: "HTML & CSS", level: 95, icon: 'code' },
            { name: "JavaScript (JS)", level: 85, icon: 'js' },
            { name: "Java", level: 75, icon: 'java' },
            { name: "Python", level: 70, icon: 'python' },
            { name: "Kotlin", level: 60, icon: 'kotlin' },
            { name: "PHPMyAdmin", level: 80, icon: 'sql' }
        ]
    },

    // =========================================================================
    // 3. DATA PROYEK (WORK SECTION - Grid Asimetris)
    // =========================================================================
    projects: [
        {
            id: 1,
            title: "E-Ticketing Bus: Pembelian tiket bus online",
            category: "Website Ticketing",
            thumbnail: 'assets/images/projects/bustumb.jpg',
            spanClass: 'large-span', // Menggunakan modifier CSS untuk asimetris (2x2)
        },
        {
            id: 2,
            title: "ChronoBlend : Website CoffeShop dengan tema klasik",
            category: "CoffeShop",
            thumbnail: 'assets/images/projects/chronotumb.jpg',
            spanClass: '', // Ukuran standar (1x1)
        },
        {
            id: 3,
            title: "CinemaSi : Website E-Ticketing Bioskop",
            category: "Website Ticketing",
            thumbnail: 'assets/images/projects/cinematumb.jpg',
            spanClass: '', // Ukuran standar (1x1)
        },
        {
            id: 4,
            title: "Alsaahir : Website E-Commerce Hijab",
            category: "E-Commerce",
            thumbnail: 'assets/images/projects/alsaahirtumb.jpg',
            spanClass: 'wide-span', // Modifier 3x1 (Horizontal Penuh)
        },
    ],
};