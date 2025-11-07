/**
 * js/app.js
 * Logika Inti untuk Portofolio Grid Asimetris.
 * Menangani: 1. Loading konten dinamis (data.js) 2. Navigasi Vertikal 
 * 3. Animasi berbasis Scroll (GSAP/ScrollTrigger) 4. Modal Proyek & Modal CV.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // PENTING: Pastikan nama variabel ini sesuai dengan nama variabel di data.js
    if (typeof ASYMMETRIC_PORTFOLIO_DATA === 'undefined') {
        console.error('Error: ASYMMETRIC_PORTFOLIO_DATA tidak ditemukan. Pastikan data.js dimuat.');
        // Jika data tidak ada, jangan lanjutkan.
        return;
    }

    // --- 1. INISIALISASI & LOADING KONTEN ---
    
    loadHeroContent();
    loadProjectsGrid();
    loadAboutContent(); 

    // --- 2. SETUP INTERAKSI ---
    
    setupVerticalNav();
    setupProjectModal();
    setupCVModal(); 
});

// --- FUNGSI LOADING KONTEN (dari data.js) ---

function loadHeroContent() {
    // MEMASTIKAN PANGGILAN VARIABEL SUDAH BENAR
    const data = ASYMMETRIC_PORTFOLIO_DATA.hero;
    const mainTitle = document.querySelector('.main-title');
    const tagline = document.querySelector('.tagline');
    const roleDesc = document.querySelector('.role-desc');

    if (mainTitle) mainTitle.textContent = data.mainTitle;
    if (tagline) tagline.textContent = data.tagline;
    if (roleDesc) roleDesc.textContent = data.roleDescription;
}

function loadProjectsGrid() {
    const gridContainer = document.getElementById('projects-grid');
    // MEMASTIKAN PANGGILAN VARIABEL SUDAH BENAR
    const projects = ASYMMETRIC_PORTFOLIO_DATA.projects;

    if (!gridContainer) return;

    gridContainer.innerHTML = ''; 
    
    projects.forEach(project => {
        const card = document.createElement('article');
        card.className = `project-card ${project.spanClass || ''}`; 
        card.setAttribute('data-project-id', project.id);
        
        card.innerHTML = `
            <img src="${project.thumbnail}" alt="Thumbnail ${project.title}">
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <span class="project-category">${project.category}</span>
            </div>
        `;
        gridContainer.appendChild(card);
    });
}

function loadAboutContent() {
    // MEMASTIKAN PANGGILAN VARIABEL SUDAH BENAR
    const data = ASYMMETRIC_PORTFOLIO_DATA.about;
    const introTextElement = document.querySelector('.intro-text');
    
    // KUNCI PERBAIKAN: Memastikan elemen ditemukan sebelum diisi
    if (introTextElement) {
        // Menggunakan innerHTML karena konten mengandung list dan strong tags
        introTextElement.innerHTML = data.introText;
    }
    
    createSkillsVisualization(data.skills);
}

// --- 3. NAVIGASI & SCROLL ANIMASI ---

function setupVerticalNav() {
    const navDots = document.querySelectorAll('.nav-dot');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const navLink = document.querySelector(`.nav-dot[href="#${id}"]`);

            if (entry.isIntersecting && navLink) {
                navDots.forEach(dot => dot.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    }, {
        rootMargin: '0px 0px -50% 0px', 
        threshold: 0
    });

    document.querySelectorAll('section[id]').forEach(section => {
        observer.observe(section);
    });
}

function createSkillsVisualization(skills) {
    const container = document.getElementById('skills-chart-placeholder');
    if (!container) {
        console.error('Error: Element with ID "skills-chart-placeholder" not found.');
        return; 
    }

    container.innerHTML = ''; 
    
    skills.forEach(skill => {
        const barWrapper = document.createElement('div');
        barWrapper.className = 'skill-item';
        
        barWrapper.innerHTML = `
            <div class="skill-name-wrapper">
                <span class="skill-icon-placeholder" data-icon="${skill.icon}"></span>
                <span class="skill-name">${skill.name}</span>
            </div>
            <div class="skill-bar-outer">
                <div class="skill-bar-inner" data-level="${skill.level}" style="width: 0%;"></div>
            </div>
            <span class="skill-level">${skill.level}%</span>
        `;
        container.appendChild(barWrapper);
    });

    // Animasi GSAP/ScrollTrigger
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        const skillBars = container.querySelectorAll('.skill-bar-inner');

        ScrollTrigger.create({
            trigger: "#about", 
            start: "top 70%", 
            onEnter: () => {
                skillBars.forEach(bar => {
                    const level = bar.getAttribute('data-level');
                    gsap.to(bar, { 
                        width: `${level}%`, 
                        duration: 1.5, 
                        ease: "power2.out",
                        delay: Math.random() * 0.3 
                    });
                });
            },
            once: true 
        });
    } else {
        console.warn('GSAP or ScrollTrigger not loaded. Skill animations will be static.');
        container.querySelectorAll('.skill-bar-inner').forEach(bar => {
            bar.style.width = `${bar.getAttribute('data-level')}%`;
        });
    }
}


// --- 4. MODAL PROYEK & MODAL CV ---

function setupProjectModal() {
    const modal = document.getElementById('project-detail-modal');
    const modalContentArea = document.getElementById('modal-project-content');
    const closeBtn = modal ? modal.querySelector('.modal-close-btn') : null;

    if (!modal) return;
    
    // MEMASTIKAN PANGGILAN VARIABEL SUDAH BENAR
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.addEventListener('click', (e) => {
        const trigger = e.target.closest('.detail-trigger-btn');
        if (!trigger) return;

        const projectId = trigger.closest('.project-card').getAttribute('data-project-id');
        const project = ASYMMETRIC_PORTFOLIO_DATA.projects.find(p => p.id == projectId);
        
        if (project) {
            modalContentArea.innerHTML = project.detail;
            modal.classList.add('visible');
            document.body.style.overflow = 'hidden'; 
        }
    });

    function closeModal() {
        modal.classList.remove('visible');
        document.body.style.overflow = '';
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    modal.addEventListener('click', (e) => {
        if (e.target.id === 'project-detail-modal') {
            closeModal(); 
        }
    });
}


function setupCVModal() {
    const viewCvBtn = document.getElementById('view-cv-btn');
    const cvModal = document.getElementById('cv-modal');
    const closeBtn = cvModal ? cvModal.querySelector('.modal-close-btn') : null;

    if (!viewCvBtn || !cvModal) return;

    viewCvBtn.addEventListener('click', () => {
        cvModal.classList.remove('hidden');
        cvModal.classList.add('visible');
        document.body.style.overflow = 'hidden';
    });

    function closeCVModal() {
        cvModal.classList.add('hidden');
        cvModal.classList.remove('visible');
        document.body.style.overflow = '';
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeCVModal);
    }
    
    cvModal.addEventListener('click', (e) => {
        if (e.target.id === 'cv-modal') {
            closeCVModal();
        }
    });
}