// ========== DATOS DE PRODUCTOS ==========
const productsData = {
    cosmetica: [
        {
            nombre: "GLOW BOMB - Crema Facial",
            descripcion: "¡POW! Explosión de CBD + colágeno. Piel radiante al instante.",
            imagen: "https://placehold.co/400x300/3d6b4f/f2cc8f?text=GLOW+BOMB",
            tienda: "GreenBeauty Shop",
            url: "#"
        },
        {
            nombre: "Bálsamo Labial K.O.",
            descripcion: "¡ZAS! Hidratación extrema con aceite de cáñamo orgánico.",
            imagen: "https://placehold.co/400x300/3d6b4f/f2cc8f?text=BÁLSAMO+KO",
            tienda: "HempCare",
            url: "#"
        },
        {
            nombre: "Aceite Corporal ZEN MODE",
            descripcion: "Relajación garantizada. 500mg de CBD activo.",
            imagen: "https://placehold.co/400x300/3d6b4f/f2cc8f?text=ZEN+MODE",
            tienda: "Natural Hemp Co.",
            url: "#"
        }
    ],
    textil: [
        {
            nombre: "Camiseta HEMP HERO",
            descripcion: "¡BAM! 100% cáñamo, resistente como superhéroe.",
            imagen: "https://placehold.co/400x300/3d6b4f/f2cc8f?text=HEMP+HERO",
            tienda: "EcoWear Hemp",
            url: "#"
        },
        {
            nombre: "Bufanda GREEN CAPE",
            descripcion: "Estilo y sostenibilidad en una sola capa.",
            imagen: "https://placehold.co/400x300/3d6b4f/f2cc8f?text=GREEN+CAPE",
            tienda: "Artesanía Verde",
            url: "#"
        }
    ],
    hogar: [
        {
            nombre: "Cojín STONER VIBES",
            descripcion: "Diseño psicodélico, tela de cáñamo orgánico.",
            imagen: "https://placehold.co/400x300/3d6b4f/f2cc8f?text=STONER+VIBES",
            tienda: "HempHome Living",
            url: "#"
        },
        {
            nombre: "Vela HIGH VIBRATION",
            descripcion: "Aromas a pino, sándalo y CBD. Ambiente místico.",
            imagen: "https://placehold.co/400x300/3d6b4f/f2cc8f?text=HIGH+VIBE",
            tienda: "Aromas Naturales",
            url: "#"
        },
        {
            nombre: "Manta HEMP COZY",
            descripcion: "Suave, ecológica y perfecta para tus momentos de relax.",
            imagen: "https://placehold.co/400x300/3d6b4f/f2cc8f?text=HEMP+COZY",
            tienda: "HempHome Living",
            url: "#"
        }
    ],
    entretenimiento: [
        {
            nombre: "Kit Grow MASTER",
            descripcion: "Semillas premium + maceta + guía. ¡Cultiva tu propia aventura!",
            imagen: "https://placehold.co/400x300/3d6b4f/f2cc8f?text=GROW+MASTER",
            tienda: "GrowUrban",
            url: "#"
        },
        {
            nombre: "Trivia CANNA-EDITION",
            descripcion: "Pon a prueba tu conocimiento cannábico. 100 preguntas.",
            imagen: "https://placehold.co/400x300/3d6b4f/f2cc8f?text=CANNA+TRIVIA",
            tienda: "CannaFun",
            url: "#"
        },
        {
            nombre: "Rolling Papers DELUXE",
            descripcion: "Set premium con filtros de cáñamo y estuche metálico.",
            imagen: "https://placehold.co/400x300/3d6b4f/f2cc8f?text=ROLLING+DELUXE",
            tienda: "CannaFun",
            url: "#"
        }
    ]
};

// ========== DATOS DE CLUBES ==========
const clubsData = [
    {
        nombre: "CURURU",
        descripcion: "Club social cannábico pionero en cultura, arte y activismo. Espacio de encuentro para cultivadores y entusiastas.",
        icono: "🍃✨",
        tag: "FUNDADOR",
        url: "clubes/cururu/index.html",
        destacado: true
    },
    {
        nombre: "Green Society",
        descripcion: "Comunidad internacional con eventos, catas y workshops mensuales.",
        icono: "🌱🤝",
        tag: "CLUB SOCIAL",
        url: "#"
    },
    {
        nombre: "Hemp Tribe",
        descripcion: "Enfoque en sostenibilidad y educación sobre el cáñamo industrial.",
        icono: "🌿📚",
        tag: "EDUCATIVO",
        url: "#"
    }
];

// ========== DATOS DE EMPRESAS ASOCIADAS ==========
const partnersData = [
    { nombre: "GreenBeauty", logo: "https://placehold.co/80x80/3d6b4f/white?text=GB", url: "#" },
    { nombre: "EcoWear", logo: "https://placehold.co/80x80/3d6b4f/white?text=EW", url: "#" },
    { nombre: "HempHome", logo: "https://placehold.co/80x80/3d6b4f/white?text=HH", url: "#" },
    { nombre: "CannaFun", logo: "https://placehold.co/80x80/3d6b4f/white?text=CF", url: "#" },
    { nombre: "GrowUrban", logo: "https://placehold.co/80x80/3d6b4f/white?text=GU", url: "#" }
];

// ========== FUNCIONES DE PRODUCTOS ==========
function createProductCard(producto) {
    const card = document.createElement('a');
    card.className = 'product-card';
    card.href = producto.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    
    card.innerHTML = `
        <img class="card-image" src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">
        <div class="card-content">
            <h3 class="card-title">${producto.nombre}</h3>
            <p class="card-description">${producto.descripcion}</p>
            <span class="card-store"><i class="fas fa-store"></i> ${producto.tienda}</span>
        </div>
    `;
    return card;
}

function loadProducts() {
    for (const [category, products] of Object.entries(productsData)) {
        const grid = document.getElementById(`grid-${category}`);
        if (grid) {
            grid.innerHTML = '';
            const shuffled = [...products].sort(() => Math.random() - 0.5);
            shuffled.forEach(product => {
                grid.appendChild(createProductCard(product));
            });
        }
    }
}

// ========== FUNCIONES DE CLUBES ==========
function createClubCard(club) {
    const card = document.createElement('a');
    card.className = 'club-card';
    card.href = club.url;
    if (club.url === "clubes/cururu/index.html") {
        card.target = '_self';
    } else {
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
    }
    
    const isCururu = club.nombre === "CURURU";
    
    card.innerHTML = `
        <div class="club-icon">${club.icono}</div>
        <h3 class="club-name">${club.nombre}</h3>
        <p class="club-description">${club.descripcion}</p>
        <span class="club-tag">${club.tag}</span>
        <div class="club-btn-action">${isCururu ? '🌿 VISITAR CLUB' : 'CONOCER CLUB'} →</div>
    `;
    return card;
}

function loadClubs() {
    const clubsGrid = document.getElementById('clubesGrid');
    if (clubsGrid) {
        clubsGrid.innerHTML = '';
        const sortedClubs = [...clubsData].sort((a, b) => (b.destacado ? 1 : 0) - (a.destacado ? 1 : 0));
        sortedClubs.forEach(club => {
            clubsGrid.appendChild(createClubCard(club));
        });
    }
}

// ========== FUNCIONES DE EMPRESAS ==========
function loadPartners() {
    const partnersGrid = document.getElementById('partnersGrid');
    if (partnersGrid) {
        partnersGrid.innerHTML = '';
        partnersData.forEach(partner => {
            const link = document.createElement('a');
            link.className = 'partner-item';
            link.href = partner.url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.innerHTML = `
                <img class="partner-logo" src="${partner.logo}" alt="${partner.nombre}">
                <span class="partner-name">${partner.nombre}</span>
            `;
            partnersGrid.appendChild(link);
        });
    }
}

// ========== FORO FUTURISTA ==========
let forumMessages = [];

function loadForumMessagesFuturistic() {
    const saved = localStorage.getItem('canabicon_forum_messages');
    if (saved) {
        forumMessages = JSON.parse(saved);
    } else {
        forumMessages = [
            {
                id: 1,
                author: "GreenMaster",
                content: "¡Acabo de probar la crema GLOW BOMB y es increíble! Mi piel nunca había estado tan radiante. Recomendadísima 🌿✨",
                date: new Date(Date.now() - 86400000).toISOString(),
                isRegistered: true
            },
            {
                id: 2,
                author: "HempLover",
                content: "Alguien ha probado los cojines de cáñamo? Me encanta la textura y son super cómodos para el home office.",
                date: new Date(Date.now() - 172800000).toISOString(),
                isRegistered: true
            },
            {
                id: 3,
                author: "CannaExplorer",
                content: "El kit Grow MASTER es perfecto para principiantes. Ya tengo mis primeras plantas y van espectaculares. 🌱",
                date: new Date(Date.now() - 259200000).toISOString(),
                isRegistered: true
            },
            {
                id: 4,
                author: "TerpeneHunter",
                content: "La bufanda Green Cape es lo más. Súper suave y mantiene el calor perfecto. 100% recomendada.",
                date: new Date(Date.now() - 345600000).toISOString(),
                isRegistered: true
            }
        ];
        saveForumMessagesFuturistic();
    }
    renderForumMessagesFuturistic();
    updateMessageCount();
}

function saveForumMessagesFuturistic() {
    localStorage.setItem('canabicon_forum_messages', JSON.stringify(forumMessages));
}

function formatDateFuturistic(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return 'Hoy';
    if (days === 1) return 'Ayer';
    if (days < 7) return `Hace ${days} días`;
    return date.toLocaleDateString('es-ES', { day: '2-digit', month: 'short' });
}

function updateMessageCount() {
    const countEl = document.getElementById('messageCount');
    if (countEl) {
        countEl.textContent = forumMessages.length;
    }
}

function renderForumMessagesFuturistic() {
    const container = document.getElementById('forumMessagesFuturistic');
    if (!container) return;
    
    if (forumMessages.length === 0) {
        container.innerHTML = `
            <div class="empty-forum-futuristic">
                <i class="fas fa-comment-dots"></i>
                <p>Sé el primero en dejar un mensaje</p>
            </div>
        `;
        return;
    }
    
    const sorted = [...forumMessages].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    container.innerHTML = sorted.map(msg => `
        <div class="forum-message-futuristic">
            <div class="message-header-futuristic">
                <div class="message-author-futuristic">
                    <i class="fas fa-user-astronaut"></i>
                    <span>${escapeHtml(msg.author)}</span>
                    ${msg.isRegistered ? '<span class="message-badge">✓ miembro</span>' : ''}
                </div>
                <div class="message-date-futuristic">${formatDateFuturistic(msg.date)}</div>
            </div>
            <div class="message-content-futuristic">
                <p>${escapeHtml(msg.content)}</p>
            </div>
        </div>
    `).join('');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function postNewMessageFuturistic() {
    const nameInput = document.getElementById('forumNameFuturistic');
    const messageInput = document.getElementById('forumMessageFuturistic');
    
    const author = nameInput.value.trim();
    const content = messageInput.value.trim();
    
    if (!author) {
        showNotificationFuturistic('Por favor ingresa tu nombre', 'error');
        return;
    }
    
    if (!content) {
        showNotificationFuturistic('Por favor escribe un mensaje', 'error');
        return;
    }
    
    if (content.length > 500) {
        showNotificationFuturistic('El mensaje no puede exceder los 500 caracteres', 'error');
        return;
    }
    
    const newMessage = {
        id: Date.now(),
        author: author,
        content: content,
        date: new Date().toISOString(),
        isRegistered: false
    };
    
    forumMessages.unshift(newMessage);
    saveForumMessagesFuturistic();
    renderForumMessagesFuturistic();
    updateMessageCount();
    
    messageInput.value = '';
    showNotificationFuturistic('¡Mensaje publicado!', 'success');
}

function showNotificationFuturistic(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = 'forum-notification-futuristic';
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    notification.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        background: linear-gradient(135deg, #3d6b4f, #e07a5f);
        color: white;
        padding: 12px 24px;
        border-radius: 40px;
        font-size: 0.85rem;
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 10px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        animation: fadeInUp 0.3s ease;
    `;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function initForumFuturistic() {
    loadForumMessagesFuturistic();
    
    const postBtn = document.getElementById('postMessageBtnFuturistic');
    if (postBtn) {
        postBtn.addEventListener('click', postNewMessageFuturistic);
    }
}

// ========== SMOOTH SCROLL ==========
function initSmoothScroll() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ========== AUTENTICACIÓN CON SUPABASE ==========
let supabaseClient = null;
let currentUser = null;

// Configuración de Supabase
const SUPABASE_URL = 'https://nmvzcjeqqpwndffzahjg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tdnpjamVxcXB3bmRmZnphaGpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyODk2ODgsImV4cCI6MjA5MDg2NTY4OH0.Ban1Hfa0ul7Jpj7DWai54D4zeNXrRpjg9gcsYCYC5eU';

// Inicializar UNA SOLA instancia
function initSupabaseAuth() {
    if (typeof window.supabase !== 'undefined' && !supabaseClient) {
        supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        checkUserSession();
    } else if (!window.supabase) {
        setTimeout(initSupabaseAuth, 500);
    }
}

async function checkUserSession() {
    if (!supabaseClient) return;
    const { data: { user } } = await supabaseClient.auth.getUser();
    currentUser = user;
    updateAuthButtonUI();
}

function updateAuthButtonUI() {
    const btn = document.getElementById('authFloatBtn');
    if (!btn) return;
    
    if (currentUser) {
        btn.innerHTML = `<i class="fas fa-user-check"></i> ${currentUser.email.split('@')[0]}`;
        btn.classList.add('logged-in');
    } else {
        btn.innerHTML = `<i class="fas fa-user"></i> Mi Cuenta`;
        btn.classList.remove('logged-in');
    }
}

async function handleLogin(email, password) {
    const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) throw error;
    window.location.reload();
}

async function handleRegister(email, password, nombre) {
    const { error } = await supabaseClient.auth.signUp({ 
        email, 
        password,
        options: { data: { nombre } }
    });
    if (error) throw error;
    
    if (supabaseClient) {
        await supabaseClient.from('perfiles').insert({
            email: email,
            nombre: nombre,
            rol: 'socio',
            activo: false
        });
    }
    
    alert('Registro exitoso! Tu cuenta será activada por un administrador.');
}

async function handleLogout() {
    await supabaseClient.auth.signOut();
    window.location.reload();
}

function showAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) modal.style.display = 'flex';
}

function hideAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) modal.style.display = 'none';
}

// Funciones globales para los botones del modal
window.doLogin = async function() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    try {
        await handleLogin(email, password);
        hideAuthModal();
    } catch (error) {
        alert('Error: ' + error.message);
    }
};

window.doRegister = async function() {
    const nombre = document.getElementById('regNombre').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    
    if (!nombre || !email || !password) {
        alert('Completá todos los campos');
        return;
    }
    if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
        return;
    }
    try {
        await handleRegister(email, password, nombre);
        hideAuthModal();
    } catch (error) {
        alert('Error: ' + error.message);
    }
};

window.hideAuthModal = hideAuthModal;

function addAuthElements() {
    // Botón flotante
    if (!document.getElementById('authFloatBtn')) {
        const btn = document.createElement('button');
        btn.id = 'authFloatBtn';
        btn.className = 'auth-float-btn';
        btn.innerHTML = '<i class="fas fa-user"></i> Mi Cuenta';
        btn.onclick = showAuthModal;
        document.body.appendChild(btn);
    }
    
    // Modal de autenticación
    if (!document.getElementById('authModal')) {
        const modalHTML = `
            <div id="authModal" class="auth-modal" style="display: none;">
                <div class="auth-modal-content">
                    <span class="auth-close" onclick="hideAuthModal()">&times;</span>
                    <div class="auth-tabs">
                        <button class="auth-tab active" data-tab="login">Iniciar Sesión</button>
                        <button class="auth-tab" data-tab="register">Registrarse</button>
                    </div>
                    <div id="loginForm" class="auth-form active">
                        <input type="email" id="loginEmail" placeholder="Email">
                        <input type="password" id="loginPassword" placeholder="Contraseña">
                        <button onclick="doLogin()">Ingresar</button>
                    </div>
                    <div id="registerForm" class="auth-form">
                        <input type="text" id="regNombre" placeholder="Nombre">
                        <input type="email" id="regEmail" placeholder="Email">
                        <input type="password" id="regPassword" placeholder="Contraseña">
                        <button onclick="doRegister()">Registrarse</button>
                        <p class="auth-note">Al registrarte, tu cuenta será revisada por un administrador.</p>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Tabs del modal
        document.querySelectorAll('.auth-tab').forEach(tab => {
            tab.onclick = () => {
                document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                document.getElementById('loginForm').classList.toggle('active', tab.dataset.tab === 'login');
                document.getElementById('registerForm').classList.toggle('active', tab.dataset.tab === 'register');
            };
        });
    }
    
    // Botón de logout si está logueado
    if (currentUser && !document.getElementById('logoutBtn')) {
        const logoutBtn = document.createElement('button');
        logoutBtn.id = 'logoutBtn';
        logoutBtn.className = 'logout-float-btn';
        logoutBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i> Salir';
        logoutBtn.onclick = handleLogout;
        document.body.appendChild(logoutBtn);
    } else if (!currentUser) {
        const existingLogout = document.getElementById('logoutBtn');
        if (existingLogout) existingLogout.remove();
    }
}

// ========== INICIALIZACIÓN PRINCIPAL ==========
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    loadClubs();
    loadPartners();
    initSmoothScroll();
    initForumFuturistic();
    
    const sections = document.querySelectorAll('.category-section');
    sections.forEach((section, idx) => {
        section.style.animationDelay = `${idx * 0.1}s`;
    });
    
    // Inicializar autenticación
    addAuthElements();
    initSupabaseAuth();
});