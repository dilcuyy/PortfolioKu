/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export type Language = 'EN' | 'ID' | 'ES' | 'FR' | 'JA' | 'IT';

export interface TranslationDict {
  [key: string]: {
    EN: string;
    ID: string;
    ES: string;
    FR: string;
    JA: string;
    IT: string;
  };
}

const translations: TranslationDict = {
  // Navigation
  'nav.home': {
    EN: 'Home',
    ID: 'Beranda',
    ES: 'Inicio',
    FR: 'Accueil',
    JA: 'ホーム',
    IT: 'Home',
  },
  'nav.about': {
    EN: 'About',
    ID: 'Tentang',
    ES: 'Sobre mí',
    FR: 'À propos',
    JA: '自己紹介',
    IT: 'Info',
  },
  'nav.experience': {
    EN: 'Experience',
    ID: 'Pengalaman',
    ES: 'Experiencia',
    FR: 'Expérience',
    JA: '経歴',
    IT: 'Esperienza',
  },
  'nav.certificates': {
    EN: 'Certificates',
    ID: 'Sertifikat',
    ES: 'Certificados',
    FR: 'Certificats',
    JA: '資格',
    IT: 'Certificati',
  },
  'nav.projects': {
    EN: 'Projects',
    ID: 'Proyek',
    ES: 'Proyectos',
    FR: 'Projets',
    JA: 'プロジェクト',
    IT: 'Progetti',
  },
  'nav.contact': {
    EN: 'Contact',
    ID: 'Kontak',
    ES: 'Contacto',
    FR: 'Contact',
    JA: 'お問い合わせ',
    IT: 'Contatti',
  },

  // Hero Section
  'hero.hello': {
    EN: 'HELLO, I AM',
    ID: 'HALO, SAYA',
    ES: 'HOLA, SOY',
    FR: 'BONJOUR, JE SUIS',
    JA: 'こんにちは、私は',
    IT: 'CIAO, SONO',
  },
  'hero.bio': {
    EN: 'Building functional, interactive, and user-centric web applications.',
    ID: 'Membangun aplikasi web yang fungsional, interaktif, dan berorientasi pada pengguna.',
    ES: 'Construyendo aplicaciones web funcionales, interactivas y centradas en el usuario.',
    FR: 'Création d\'applications web fonctionnelles, interactives et centrées sur l\'utilisateur.',
    JA: '機能的でインタラクティブ、かつユーザー中心のウェブアプリケーションを構築。',
    IT: 'Creazione di applicazioni web funzionali, interattive e centrate sull\'utente.',
  },
  'hero.viewProjects': {
    EN: 'View Projects',
    ID: 'Lihat Proyek',
    ES: 'Ver Proyectos',
    FR: 'Voir les projets',
    JA: 'プロジェクトを見る',
    IT: 'Vedi Progetti',
  },
  'hero.contactMe': {
    EN: 'Contact Me',
    ID: 'Hubungi Saya',
    ES: 'Contáctame',
    FR: 'Me contacter',
    JA: 'お問い合わせ',
    IT: 'Contattami',
  },

  // About Section
  'about.badge': {
    EN: 'I AM ABDILA ASY SYAFIQ ,',
    ID: 'SAYA ABDILA ASY SYAFIQ ,',
    ES: 'SOY ABDILA ASY SYAFIQ ,',
    FR: 'JE SUIS ABDILA ASY SYAFIQ ,',
    JA: '私はアブディラ・アシ・シャフィクです ,',
    IT: 'SONO ABDILA ASY SYAFIQ ,',
  },
  'about.p1': {
    EN: 'As an Information Systems graduate and Software Engineer, I specialize in translating complex business needs into efficient web applications.',
    ID: 'Sebagai lulusan Sistem Informasi dan Rekayasa Perangkat Lunak, saya berspesialisasi dalam menerjemahkan kebutuhan bisnis yang kompleks menjadi aplikasi web yang efisien.',
    ES: 'Como graduado en Sistemas de Información e Ingeniero de Software, me especializo en traducir necesidades comerciales complejas en aplicaciones web eficientes.',
    FR: 'En tant que diplômé en Systèmes d\'Information et Ingénieur Logiciel, je me spécialise dans la traduction de besoins commerciaux complexes en applications web efficaces.',
    JA: '情報システム学科を卒業したソフトウェアエンジニアとして、複雑なビジネスニーズを効率的なウェブアプリケーションに翻訳することに特化しています。',
    IT: 'Come laureato in Sistemi Informativi e Ingegnere del Software, mi occupo di tradurre le complesse esigenze aziendali in applicazioni web efficienti.',
  },
  'about.p2': {
    EN: 'From digitizing operational workflows to architecting frontend interfaces, I thrive on building scalable full-stack solutions from the ground up that deliver real-world impact.',
    ID: 'Dari digitalisasi alur kerja operasional hingga arsitektur antarmuka frontend, saya berkembang dalam membangun solusi full-stack skalabel dari awal yang memberikan dampak nyata.',
    ES: 'Desde la digitalización de flujos de trabajo operativos hasta la arquitectura de interfaces frontend, prospero construyendo soluciones completas y escalables desde cero que generen un impacto en el mundo real.',
    FR: 'De la numérisation des flux de travail opérationnels à l\'architecture des interfaces frontend, je m\'épanouis dans la construction de solutions full-stack évolutives à partir de zéro, apportant un impact concret.',
    JA: '業務ワークフローのデジタル化からフロントエンドインターフェースの設計まで、現実世界に影響を与える拡張性の高いフルスタックソリューションを一から構築することを得意としています。',
    IT: 'Dalla digitalizzazione dei flussi di lavoro operativi all\'architettura delle interfacce frontend, mi dedico alla creazione di soluzioni full-stack scalabili da zero che offrono un impatto reale.',
  },
  'about.downloadCv': {
    EN: 'DOWNLOAD CV',
    ID: 'UNDUH CV',
    ES: 'DESCARGAR CV',
    FR: 'TÉLÉCHARGER LE CV',
    JA: 'CVをダウンロード',
    IT: 'SCARICA CV',
  },

  // Tech Skills
  'skills.title': {
    EN: 'Tech Skills',
    ID: 'Keahlian Teknis',
    ES: 'Habilidades Técnicas',
    FR: 'Compétences Techniques',
    JA: '技術スキル',
    IT: 'Competenze Tecniche',
  },
  'skills.titleBold': {
    EN: 'tech',
    ID: 'tech',
    ES: 'tecnología',
    FR: 'tech',
    JA: '技術',
    IT: 'tech',
  },
  'skills.desc': {
    EN: 'Programming languages, frameworks, and tools I use to build applications.',
    ID: 'Bahasa pemrograman, framework, dan tools yang saya gunakan untuk membangun aplikasi.',
    ES: 'Lenguajes de programación, frameworks y herramientas que utilizo para construir aplicaciones.',
    FR: 'Langages de programmation, frameworks et outils que j\'utilise pour concevoir des applications.',
    JA: 'アプリケーション構築に使用するプログラミング言語、フレームワーク、ツール。',
    IT: 'Linguaggi di programmazione, framework e strumenti che utilizzo per creare applicazioni.',
  },
  'skills.toolbelt': {
    EN: '/ MY TOOLBELT',
    ID: '/ PERALATAN SAYA',
    ES: '/ MI CAJA DE HERRAMIENTAS',
    FR: '/ MA BOÎTE À OUTILS',
    JA: '/ マイツールベルト',
    IT: '/ I MIEI STRUMENTI',
  },

  // Experience Section
  'exp.titleBold': {
    EN: 'student',
    ID: 'mahasiswa',
    ES: 'estudiante',
    FR: 'étudiant',
    JA: '学生',
    IT: 'studente',
  },
  'exp.titleHighlight': {
    EN: 'Experience.',
    ID: 'Experience.',
    ES: 'Experiencia.',
    FR: 'Expérience.',
    JA: '経歴.',
    IT: 'Esperienza.',
  },
  'exp.year': {
    EN: '2023 - 2028',
    ID: '2023 - 2028',
    ES: '2023 - 2028',
    FR: '2023 - 2028',
    JA: '2023年 - 2028年',
    IT: '2023 - 2028',
  },
  'exp.role': {
    EN: 'Information Systems Student',
    ID: 'Mahasiswa Sistem Informasi',
    ES: 'Estudiante de Sistemas de Información',
    FR: 'Étudiant en Systèmes d\'information',
    JA: '情報システム学科 学生',
    IT: 'Studente di Sistemi Informativi',
  },
  'exp.company': {
    EN: 'Universitas Bani Saleh',
    ID: 'Universitas Bani Saleh',
    ES: 'Universitas Bani Saleh',
    FR: 'Universitas Bani Saleh',
    JA: 'バニ・サレー大学',
    IT: 'Universitas Bani Saleh',
  },
  'exp.location': {
    EN: 'Bekasi, Indonesia',
    ID: 'Bekasi, Indonesia',
    ES: 'Bekasi, Indonesia',
    FR: 'Bekasi, Indonésie',
    JA: 'インドネシア、ブカシ',
    IT: 'Bekasi, Indonesia',
  },
  'exp.point1': {
    EN: 'Currently in Semester 6 of Information Systems major, maintaining a focus on software engineering and web application architectures.',
    ID: 'Saat ini menempuh Semester 6 jurusan Sistem Informasi, berfokus pada rekayasa perangkat lunak dan arsitektur aplikasi web.',
    ES: 'Actualmente en el 6º semestre de la carrera de Sistemas de Información, enfocado en ingeniería de software y arquitectura de aplicaciones web.',
    FR: 'Actuellement au semestre 6 de la majeure Systèmes d\'information, avec un accent sur le génie logiciel et les architectures d\'applications web.',
    JA: '情報システム学科の第6学期（3年生）に在籍中で、ソフトウェア工学とウェブアプリケーション設計に焦点を当てています。',
    IT: 'Attualmente al 6° semestre del corso di laurea in Sistemi Informativi, con focus sull\'ingegneria del software e sulle architetture web.',
  },
  'exp.point2': {
    EN: 'Actively building full-stack web applications (React, Next.js, Laravel) to solve real-world problems and digitize administrative processes.',
    ID: 'Aktif membangun aplikasi web full-stack (React, Next.js, Laravel) untuk memecahkan masalah dunia nyata dan mendigitalisasi proses administrasi.',
    ES: 'Construyendo activamente aplicaciones web full-stack (React, Next.js, Laravel) para resolver problemas reales y digitalizar procesos administrativos.',
    FR: 'Création active d\'applications web full-stack (React, Next.js, Laravel) pour résoudre des problèmes concrets et numériser des processus administratifs.',
    JA: '現実世界の課題解決や行政プロセスのデジタル化に向けて、フルスタックウェブアプリケーション（React、Next.js、Laravel）を積極的に構築。',
    IT: 'Sviluppo attivo di applicazioni web full-stack (React, Next.js, Laravel) per risolvere problemi reali e digitalizzare processi amministrativi.',
  },
  'exp.point3': {
    EN: 'Participated in university programs including the Digital Competency Challenge and technical seminars to validate skills.',
    ID: 'Berpartisipasi dalam program universitas termasuk Digital Competency Challenge dan seminar teknis untuk memvalidasi keahlian.',
    ES: 'Participé en programas universitarios, incluido el Reto de Competencia Digital y seminarios técnicos para validar habilidades.',
    FR: 'Participation à des programmes universitaires, dont le Digital Competency Challenge et des séminaires techniques pour valider mes compétences.',
    JA: 'スキル検証のため、学内のデジタルコンピテンシーチャレンジや各種技術セミナーに積極的に参加。',
    IT: 'Partecipazione a programmi universitari, tra cui la Digital Competency Challenge e seminari tecnici per convalidare le competenze.',
  },
  'exp.point4': {
    EN: 'Collaborating with peers on academic projects, implementing version control with Git and modern developer workflows.',
    ID: 'Berkolaborasi dengan rekan mahasiswa dalam proyek akademis, menerapkan kontrol versi dengan Git dan alur kerja pengembangan modern.',
    ES: 'Colaborando con compañeros en proyectos académicos, implementando control de versiones con Git y flujos de trabajo de desarrollo modernos.',
    FR: 'Collaboration avec des pairs sur des projets académiques, en utilisant le contrôle de version avec Git et des méthodes de développement modernes.',
    JA: 'Gitによるバージョン管理やモダンな開発フローを導入し、共同の学術プロジェクトでチームメンバーと連携。',
    IT: 'Collaborazione con colleghi su progetti accademici, implementando il controllo di versione con Git e moderni flussi di lavoro.',
  },
  'exp.techUsed': {
    EN: '/ TECHNOLOGIES USED',
    ID: '/ TEKNOLOGI YANG DIGUNAKAN',
    ES: '/ TECNOLOGÍAS UTILIZADAS',
    FR: '/ TECHNOLOGIES UTILISÉES',
    JA: '/ 使用技術',
    IT: '/ TECNOLOGIE UTILIZZATE',
  },

  // Certificates Section
  'cert.titleBold': {
    EN: 'Certificates &',
    ID: 'Certificates &',
    ES: 'Certificados y',
    FR: 'Certificats &',
    JA: '資格と',
    IT: 'Certificati &',
  },
  'cert.titleHighlight': {
    EN: 'Awards.',
    ID: 'Penghargaan.',
    ES: 'Premios.',
    FR: 'Prix.',
    JA: '賞.',
    IT: 'Premi.',
  },
  'cert.desc': {
    EN: 'Professional certifications and technical competencies I have achieved to validate my expertise in information technology.',
    ID: 'Sertifikasi profesional dan kompetensi teknis yang saya raih untuk memvalidasi keahlian di bidang teknologi informasi.',
    ES: 'Certificaciones profesionales y competencias técnicas que he logrado para validar mi experiencia en tecnología de la información.',
    FR: 'Certifications professionnelles et compétences techniques acquises pour valider mon expertise en technologie de l\'information.',
    JA: 'IT分野の専門知識を証明するために取得したプロフェッショナル認定および技術スキル。',
    IT: 'Certificazioni professionali e competenze tecniche conseguite per convalidare la mia esperienza nella tecnologia dell\'informazione.',
  },
  'cert.zoom': {
    EN: 'Zoom Certificate',
    ID: 'Perbesar Sertifikat',
    ES: 'Ampliar Certificado',
    FR: 'Agrandir le certificat',
    JA: '証明書を拡大',
    IT: 'Ingrandisci Certificato',
  },

  // Projects Section
  'proj.titleBold': {
    EN: 'featured',
    ID: 'featured',
    ES: 'proyectos',
    FR: 'projets',
    JA: '主な',
    IT: 'principali',
  },
  'proj.titleHighlight': {
    EN: 'Projects.',
    ID: 'Projects.',
    ES: 'Destacados.',
    FR: 'Favoris.',
    JA: 'プロジェクト.',
    IT: 'Progetti.',
  },
  'proj.desc': {
    EN: 'A selection of my best work, designed with premium visual aesthetics and clean code architecture.',
    ID: 'Tinjauan proyek unggulan saya yang dirancang dengan estetika visual premium dan arsitektur kode bersih.',
    ES: 'Una selección de mis mejores trabajos, diseñados con estética visual premium y arquitectura de código limpia.',
    FR: 'Une sélection de mes meilleurs projets, conçus avec une esthétique premium et une architecture propre.',
    JA: 'プレミアムな視覚的美学とクリーンコード設計で構築された、主要なプロジェクトの紹介。',
    IT: 'Una selezione dei miei migliori lavori, progettati con estetica visiva premium e architettura del codice pulita.',
  },
  'proj.finished': {
    EN: 'Finished: 2026',
    ID: 'Selesai: 2026',
    ES: 'Completado: 2026',
    FR: 'Terminé: 2026',
    JA: '完了: 2026年',
    IT: 'Completato: 2026',
  },
  'proj.category': {
    EN: 'Category: Web App',
    ID: 'Kategori: Web App',
    ES: 'Categoría: Web App',
    FR: 'Catégorie: Web App',
    JA: 'カテゴリ: Webアプリ',
    IT: 'Categoria: Web App',
  },
  'proj.github': {
    EN: 'View GitHub',
    ID: 'Lihat GitHub',
    ES: 'Ver GitHub',
    FR: 'Voir GitHub',
    JA: 'GitHubを見る',
    IT: 'Vedi GitHub',
  },

  // Project 1 (Neptunus)
  'proj1.headline': {
    EN: 'Ocean Beauty in Your Space',
    ID: 'Keindahan Laut di Ruang Anda',
    ES: 'Belleza oceánica en tu espacio',
    FR: 'Beauté de l\'océan dans votre espace',
    JA: 'あなたの空間に広がる海の美しさ',
    IT: 'La bellezza dell\'oceano nel tuo spazio',
  },
  'proj1.desc': {
    EN: 'Premium e-commerce platform for ornamental fish and modern aquascape collections.',
    ID: 'Platform e-commerce premium untuk koleksi ikan hias dan aquascape modern.',
    ES: 'Plataforma de comercio electrónico premium para peces ornamentales y colecciones modernas de aquascape.',
    FR: 'Plateforme e-commerce premium pour les poissons d\'ornement et aquascapes modernes.',
    JA: '観賞魚とモダンなアクアスケープコレクションのためのプレミアム電子商取引プラットフォーム。',
    IT: 'Piattaforma e-commerce premium per pesci ornamentali e collezioni di aquascape moderni.',
  },
  'proj1.longDesc': {
    EN: 'Neptunus is a premium e-commerce platform for ornamental fish and aquascaping. It features an interactive gallery, seamless checkout, and integrated expert consultation.',
    ID: 'Neptunus adalah platform e-commerce premium ikan hias dan aquascape. Menyediakan galeri interaktif, checkout ringkas, dan konsultasi ahli terintegrasi.',
    ES: 'Neptunus es una plataforma premium para peces ornamentales y aquascaping. Cuenta con galería interactiva, pago sencillo y consulta de expertos.',
    FR: 'Neptunus est une plateforme e-commerce premium pour les poissons d\'ornement et l\'aquascaping. Elle propose une galerie interactive, un paiement fluide et un espace conseil.',
    JA: 'Neptunusは、観賞魚とアクアスケーピングのプレミアムECプラットフォーム。インタラクティブギャラリー、簡単な会計処理、専門家への相談機能を備えています。',
    IT: 'Neptunus è una piattaforma e-commerce premium per pesci ornamentali e aquascaping. Offre galleria interattiva, pagamento rapido e consulenza di esperti.',
  },

  // Project 2 (GravitiAuto)
  'proj2.headline': {
    EN: 'Premium Ease of Exploration',
    ID: 'Kemudahan Premium Eksplorasi',
    ES: 'Facilidad de exploración premium',
    FR: 'Facilité d\'exploration premium',
    JA: 'プレミアムな探索の快適さ',
    IT: 'Facilità di esplorazione premium',
  },
  'proj2.desc': {
    EN: 'Self-drive premium car rental services in Depok and West Java.',
    ID: 'Layanan persewaan mobil premium lepas kunci di Depok dan Jawa Barat.',
    ES: 'Servicio premium de alquiler de coches sin conductor en Depok y Java Occidental.',
    FR: 'Service de location de voitures premium sans chauffeur à Depok et Java occidental.',
    JA: 'デポックおよび西ジャワにおけるプレミアムカーレンタルサービス。',
    IT: 'Servizio di noleggio auto premium senza conducente a Depok e Giava Occidentale.',
  },
  'proj2.longDesc': {
    EN: 'GravitiAuto is a self-drive car rental platform featuring real-time fleet searches, instant lookup filters, and rapid digital document verification.',
    ID: 'GravitiAuto adalah platform rental mobil lepas kunci dengan pencarian armada waktu nyata. Mendukung filter pencarian instan dan verifikasi dokumen digital cepat.',
    ES: 'GravitiAuto es una plataforma de alquiler de coches sin conductor con búsqueda de flota en tiempo real, filtros de búsqueda instantánea y verificación digital rápida.',
    FR: 'GravitiAuto est une plateforme de location de voitures avec recherche de flotte en temps réel, filtres instantanés et vérification rapide des documents.',
    JA: 'GravitiAutoは、リアルタイム空車検索、インスタントフィルター、迅速なデジタル書類確認機能を備えたレンタカープラットフォーム。',
    IT: 'GravitiAuto è una piattaforma di noleggio auto senza conducente con ricerca della flotta in tempo reale, filtri di ricerca istantanei e verifica digitale dei documenti.',
  },

  // Project 3 (Cimuning)
  'proj3.headline': {
    EN: 'Online Civil Registry Services',
    ID: 'Pelayanan Kependudukan Online',
    ES: 'Servicios de registro civil en línea',
    FR: 'Services d\'état civil en ligne',
    JA: 'オンライン市民登録サービス',
    IT: 'Servizi di anagrafe civile online',
  },
  'proj3.desc': {
    EN: 'Self-service e-government portal for civil administration in Bekasi City.',
    ID: 'Portal e-government pelayanan administrasi mandiri kependudukan Kota Bekasi.',
    ES: 'Portal de administración civil de autoservicio en la ciudad de Bekasi.',
    FR: 'Portail d\'administration en libre-service pour la ville de Bekasi.',
    JA: 'ブカシ市における住民登録・行政手続き di セルフサービスポータル。',
    IT: 'Portale di anagrafe civile in modalità self-service per la città di Bekasi.',
  },
  'proj3.longDesc': {
    EN: 'A self-service portal for residents of Cimuning, Bekasi. It enables online administrative requests with a transparent document processing dashboard.',
    ID: 'Portal layanan mandiri kependudukan warga Kelurahan Cimuning, Bekasi. Memfasilitasi pengajuan surat administrasi online dengan dasbor status pemrosesan dokumen transparan.',
    ES: 'Portal de autoservicio para residentes de Cimuning, Bekasi. Permite solicitudes en línea con un panel de procesamiento de documentos transparente.',
    FR: 'Portail en libre-service pour les habitants de Cimuning, Bekasi. Permet les demandes administratives en ligne avec suivi en temps réel du traitement.',
    JA: 'ブカシ市チムニング住民向けのセルフサービスポータル。オンライン行政書類申請と、透明性の高い書類処理状況ダッシュボードを提供。',
    IT: 'Portale self-service per i residenti di Cimuning, Bekasi. Consente richieste amministrative online con una dashboard trasparente dello stato dei documenti.',
  },

  // GitHub Contributions Section
  'github.desc': {
    EN: 'Overview of my open source contributions on GitHub.',
    ID: 'Tinjauan kontribusi kode sumber terbuka saya di GitHub.',
    ES: 'Resumen de mis contribuciones de código abierto en GitHub.',
    FR: 'Aperçu de mes contributions open source sur GitHub.',
    JA: 'GitHubにおけるオープンソースへの貢献状況一覧。',
    IT: 'Panoramica dei miei contributi open source su GitHub.',
  },
  'github.titleHighlight': {
    EN: 'Contributions.',
    ID: 'Contributions.',
    ES: 'Contribuciones.',
    FR: 'Contributions.',
    JA: '貢献.',
    IT: 'Contributi.',
  },
  'github.handle': {
    EN: '@dilcuyy on GitHub',
    ID: '@dilcuyy di GitHub',
    ES: '@dilcuyy en GitHub',
    FR: '@dilcuyy sur GitHub',
    JA: 'GitHubの @dilcuyy',
    IT: '@dilcuyy su GitHub',
  },

  // Contact Section
  'contact.titleBold': {
    EN: 'Get In',
    ID: 'Get In',
    ES: 'Ponte en',
    FR: 'Me',
    JA: 'お気軽に',
    IT: 'Rimaniamo in',
  },
  'contact.titleHighlight': {
    EN: 'Touch.',
    ID: 'Touch.',
    ES: 'Contacto.',
    FR: 'Contacter.',
    JA: 'ご連絡ください.',
    IT: 'Contatto.',
  },
  'contact.desc': {
    EN: 'Have a project idea, a question, or just want to say hi? Feel free to drop a message. I\'m always open to new collaborative opportunities.',
    ID: 'Punya ide proyek, pertanyaan, atau sekadar ingin menyapa? Silakan kirim pesan. Saya selalu terbuka untuk peluang kolaborasi baru.',
    ES: '¿Tienes una idea de proyecto, alguna pregunta o simplemente quieres saludar? No dudes en enviarme un mensaje. Siempre estoy abierto a nuevas colaboraciones.',
    FR: 'Vous avez un projet, une question ou simplement envie de dire bonjour ? N\'hésitez pas. Je suis toujours ouvert aux opportunités de collaboration.',
    JA: 'プロジェクトのアイデアやご質問、ご挨拶など、お気軽にご連絡ください。新しいコラボレーションの機会をいつでもお待ちしております。',
    IT: 'Hai un\'idea per un progetto, una domanda o vuoi solo dire ciao? Sentiti libero di inviarmi un messaggio. Sono sempre aperto a nuove opportunità di collaborazione.',
  },
  'contact.email': {
    EN: 'EMAIL',
    ID: 'EMAIL',
    ES: 'CORREO ELECTRÓNICO',
    FR: 'E-MAIL',
    JA: 'メールアドレス',
    IT: 'EMAIL',
  },
  'contact.location': {
    EN: 'LOCATION',
    ID: 'LOKASI',
    ES: 'UBICACIÓN',
    FR: 'LOCALISATION',
    JA: '現在地',
    IT: 'POSIZIONE',
  },

  // Footer Section
  'footer.copyright': {
    EN: '© {year} Abdila Asy Syafiq. All Rights Reserved.',
    ID: '© {year} Abdila Asy Syafiq. Hak Cipta Dilindungi.',
    ES: '© {year} Abdila Asy Syafiq. Todos los derechos reservados.',
    FR: '© {year} Abdila Asy Syafiq. Tous droits réservés.',
    JA: '© {year} Abdila Asy Syafiq. All Rights Reserved.',
    IT: '© {year} Abdila Asy Syafiq. Tutti i diritti riservati.',
  },
  'footer.madeWith': {
    EN: 'Made with',
    ID: 'Dibuat dengan',
    ES: 'Hecho con',
    FR: 'Fait avec',
    JA: '開発環境:',
    IT: 'Fatto con',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lang');
    return (saved as Language) || 'EN';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio_lang', lang);
  };

  const t = (key: string): string => {
    const item = translations[key];
    if (!item) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return item[language] || item['EN'] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
