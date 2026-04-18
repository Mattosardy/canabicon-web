const clientsData = [
    {
        nombre: 'Cururu Club',
        tipo: 'Club y experiencia local',
        descripcion: 'Una referencia para mostrar comunidad, cultura cannábica y una experiencia confiable dentro del circuito local.',
        estado: 'Activo',
        url: 'clubes/cururu/index.html',
        thumbnail: 'clubes/cururu/assets/images/fondo-home.png',
        thumbnailAlt: 'Vista previa del sitio de Cururu Club',
        icono: 'fa-users',
        tagPrincipal: 'Cultura',
        tagSecundario: 'Experiencia local'
    },
    {
        nombre: 'GEENERICO Club',
        tipo: 'Formato escalable',
        descripcion: 'Modelo adaptable para sumar nuevos espacios, marcas y experiencias dentro de la ruta turística de CANABICON.',
        estado: 'Activo',
        url: 'https://generico-web.netlify.app',
        thumbnail: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fgenerico-web.netlify.app?w=1200',
        thumbnailAlt: 'Vista previa del sitio de GEENERICO Club',
        icono: 'fa-layer-group',
        tagPrincipal: 'Escalable',
        tagSecundario: 'Ruta turística'
    },
    {
        nombre: 'Terp Labs',
        tipo: 'Marca diferencial',
        descripcion: 'Una marca con perfil propio para ampliar la propuesta más allá del consumo tradicional y elevar el atractivo del ecosistema.',
        estado: 'Cliente estratégico',
        url: 'https://www.terplabs.com/',
        thumbnail: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.terplabs.com%2F?w=1200',
        thumbnailAlt: 'Vista previa del sitio de Terp Labs',
        icono: 'fa-flask',
        tagPrincipal: 'Derivados',
        tagSecundario: 'Valor diferencial'
    }
];

const verticalsData = [
    {
        titulo: 'Clubes y experiencias guiadas',
        descripcion: 'Espacios, comunidades y propuestas confiables para turistas que quieren vivir el cannabis con contexto local.',
        icono: 'fa-user-group'
    },
    {
        titulo: 'Productos y derivados',
        descripcion: 'Derivados, bienestar, accesorios y productos seleccionados para ampliar la experiencia más allá del consumo clásico.',
        icono: 'fa-store'
    },
    {
        titulo: 'Gastronomía cannábica',
        descripcion: 'Helados, vinos, quesos, degustaciones y propuestas gourmet que hoy son difíciles de descubrir para el visitante.',
        icono: 'fa-utensils'
    },
    {
        titulo: 'Descubrimiento y contacto',
        descripcion: 'Una guía clara para que el turista encuentre experiencias, haga consultas y conecte con cada propuesta.',
        icono: 'fa-bullhorn'
    }
];

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text ?? '';
    return div.innerHTML;
}

function createClientCard(client) {
    const article = document.createElement('article');
    const isExternal = client.url.startsWith('http');
    article.className = 'client-card';
    article.tabIndex = 0;
    article.setAttribute('role', 'link');
    article.setAttribute('aria-label', `Abrir ${client.nombre}${isExternal ? ' en una pestaña nueva' : ''}`);
    article.innerHTML = `
        <a class="client-thumb-link" href="${client.url}" ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''} aria-label="Abrir ${escapeHtml(client.nombre)}${isExternal ? ' en una pestaña nueva' : ''}">
            <img class="client-thumb" src="${client.thumbnail}" alt="${escapeHtml(client.thumbnailAlt || `Vista previa de ${client.nombre}`)}" loading="lazy">
        </a>
        <div class="client-icon"><i class="fas ${client.icono}" aria-hidden="true"></i></div>
        <div>
            <span class="section-badge">${escapeHtml(client.tipo)}</span>
            <h3>${escapeHtml(client.nombre)}</h3>
            <p>${escapeHtml(client.descripcion)}</p>
        </div>
        <div class="client-meta">
            <span class="client-tag">${escapeHtml(client.tagPrincipal)}</span>
            <span class="client-tag">${escapeHtml(client.tagSecundario)}</span>
            <span class="client-tag">${escapeHtml(client.estado)}</span>
        </div>
        <a class="client-link" href="${client.url}" ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''} aria-label="Abrir ${escapeHtml(client.nombre)}${isExternal ? ' en una pestaña nueva' : ''}">
            Abrir sitio <i class="fas fa-arrow-right" aria-hidden="true"></i>
        </a>
    `;
    article.addEventListener('click', (event) => {
        if (event.target.closest('a')) return;
        if (isExternal) {
            window.open(client.url, '_blank', 'noopener,noreferrer');
            return;
        }
        window.location.href = client.url;
    });
    article.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        if (isExternal) {
            window.open(client.url, '_blank', 'noopener,noreferrer');
            return;
        }
        window.location.href = client.url;
    });
    return article;
}

function createVerticalCard(item) {
    const article = document.createElement('article');
    article.className = 'vertical-card';
    article.innerHTML = `
        <div class="vertical-icon"><i class="fas ${item.icono}" aria-hidden="true"></i></div>
        <div>
            <h3>${escapeHtml(item.titulo)}</h3>
            <p>${escapeHtml(item.descripcion)}</p>
        </div>
    `;
    return article;
}

function loadClients() {
    const grid = document.getElementById('clientGrid');
    if (!grid) return;
    grid.innerHTML = '';
    clientsData.forEach((client) => grid.appendChild(createClientCard(client)));
}

function loadVerticals() {
    const grid = document.getElementById('verticalGrid');
    if (!grid) return;
    grid.innerHTML = '';
    verticalsData.forEach((item) => grid.appendChild(createVerticalCard(item)));
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');
            if (!targetId || targetId === '#') return;
            const target = document.querySelector(targetId);
            if (!target) return;
            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

function showNotificationFuturistic(message) {
    const notification = document.createElement('div');
    notification.className = 'forum-notification-futuristic';
    notification.innerHTML = `
        <i class="fas fa-circle-info" aria-hidden="true"></i>
        <span>${escapeHtml(message)}</span>
    `;
    notification.style.cssText = `
        position: fixed;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, rgba(184, 141, 89, 0.96), rgba(110, 141, 98, 0.96));
        color: #16110b;
        padding: 14px 22px;
        border-radius: 999px;
        font-size: 0.88rem;
        font-weight: 800;
        z-index: 120;
        display: flex;
        align-items: center;
        gap: 10px;
        box-shadow: 0 18px 36px rgba(0,0,0,0.32);
    `;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = '0.25s ease';
        setTimeout(() => notification.remove(), 260);
    }, 2600);
}

let supabaseClient = null;
let currentUser = null;

const SUPABASE_URL = 'https://nmvzcjeqqpwndffzahjg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tdnpjamVxcXB3bmRmZnphaGpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyODk2ODgsImV4cCI6MjA5MDg2NTY4OH0.Ban1Hfa0ul7Jpj7DWai54D4zeNXrRpjg9gcsYCYC5eU';

function initSupabaseAuth() {
    if (typeof window.supabase === 'undefined') {
        setTimeout(initSupabaseAuth, 400);
        return;
    }
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    checkUserSession();
}

async function checkUserSession() {
    if (!supabaseClient) return;
    try {
        const { data: { user } } = await supabaseClient.auth.getUser();
        currentUser = user;
        updateAuthButtonUI();
        addAuthElements();
    } catch (error) {
        currentUser = null;
        updateAuthButtonUI();
        addAuthElements();
    }
}

function updateAuthButtonUI() {
    const btn = document.getElementById('authFloatBtn');
    if (!btn) return;
    if (currentUser?.email) {
        btn.innerHTML = `<i class="fas fa-user-check" aria-hidden="true"></i> ${escapeHtml(currentUser.email.split('@')[0])}`;
        btn.classList.add('logged-in');
    } else {
        btn.innerHTML = '<i class="fas fa-user" aria-hidden="true"></i> Mi Cuenta';
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
            email,
            nombre,
            rol: 'socio',
            activo: false
        });
    }

    showNotificationFuturistic('Registro enviado. Tu cuenta será revisada por un administrador.');
}

async function handleLogout() {
    if (!supabaseClient) return;
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

window.doLogin = async function doLogin() {
    const email = document.getElementById('loginEmail')?.value?.trim();
    const password = document.getElementById('loginPassword')?.value || '';
    try {
        await handleLogin(email, password);
        hideAuthModal();
    } catch (error) {
        showNotificationFuturistic(`Error al iniciar sesión: ${error.message}`);
    }
};

window.doRegister = async function doRegister() {
    const nombre = document.getElementById('regNombre')?.value?.trim();
    const email = document.getElementById('regEmail')?.value?.trim();
    const password = document.getElementById('regPassword')?.value || '';

    if (!nombre || !email || !password) {
        showNotificationFuturistic('Completa todos los campos para registrarte.');
        return;
    }
    if (password.length < 6) {
        showNotificationFuturistic('La contraseña debe tener al menos 6 caracteres.');
        return;
    }
    try {
        await handleRegister(email, password, nombre);
        hideAuthModal();
    } catch (error) {
        showNotificationFuturistic(`Error al registrarte: ${error.message}`);
    }
};

window.hideAuthModal = hideAuthModal;
window.showNotificationFuturistic = showNotificationFuturistic;

function addAuthElements() {
    if (!document.getElementById('authFloatBtn')) {
        const btn = document.createElement('button');
        btn.id = 'authFloatBtn';
        btn.className = 'auth-float-btn';
        btn.type = 'button';
        btn.innerHTML = '<i class="fas fa-user" aria-hidden="true"></i> Mi Cuenta';
        btn.onclick = showAuthModal;
        document.body.appendChild(btn);
    }

    if (!document.getElementById('authModal')) {
        const modalHTML = `
            <div id="authModal" class="auth-modal">
                <div class="auth-modal-content" role="dialog" aria-modal="true" aria-labelledby="authModalTitle">
                    <button class="auth-close" type="button" onclick="hideAuthModal()" aria-label="Cerrar modal">&times;</button>
                    <h2 id="authModalTitle" class="section-badge">Acceso CANABICON</h2>
                    <div class="auth-tabs">
                        <button class="auth-tab active" data-tab="login" type="button">Iniciar sesión</button>
                        <button class="auth-tab" data-tab="register" type="button">Registrarse</button>
                    </div>
                    <div id="loginForm" class="auth-form active">
                        <label class="sr-only" for="loginEmail">Email</label>
                        <input type="email" id="loginEmail" placeholder="Email" autocomplete="email">
                        <label class="sr-only" for="loginPassword">Contraseña</label>
                        <input type="password" id="loginPassword" placeholder="Contraseña" autocomplete="current-password">
                        <button type="button" onclick="doLogin()">Ingresar</button>
                    </div>
                    <div id="registerForm" class="auth-form">
                        <label class="sr-only" for="regNombre">Nombre</label>
                        <input type="text" id="regNombre" placeholder="Nombre" autocomplete="name">
                        <label class="sr-only" for="regEmail">Email</label>
                        <input type="email" id="regEmail" placeholder="Email" autocomplete="email">
                        <label class="sr-only" for="regPassword">Contraseña</label>
                        <input type="password" id="regPassword" placeholder="Contraseña" autocomplete="new-password">
                        <button type="button" onclick="doRegister()">Registrarme</button>
                        <p class="auth-note">El registro se revisa antes de habilitar el acceso.</p>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        document.querySelectorAll('.auth-tab').forEach((tab) => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.auth-tab').forEach((item) => item.classList.remove('active'));
                tab.classList.add('active');
                document.getElementById('loginForm')?.classList.toggle('active', tab.dataset.tab === 'login');
                document.getElementById('registerForm')?.classList.toggle('active', tab.dataset.tab === 'register');
            });
        });

        document.getElementById('authModal')?.addEventListener('click', (event) => {
            if (event.target.id === 'authModal') hideAuthModal();
        });
    }

    const existingLogout = document.getElementById('logoutBtn');
    if (currentUser && !existingLogout) {
        const logoutBtn = document.createElement('button');
        logoutBtn.id = 'logoutBtn';
        logoutBtn.type = 'button';
        logoutBtn.className = 'logout-float-btn';
        logoutBtn.innerHTML = '<i class="fas fa-sign-out-alt" aria-hidden="true"></i> Salir';
        logoutBtn.onclick = handleLogout;
        document.body.appendChild(logoutBtn);
    } else if (!currentUser && existingLogout) {
        existingLogout.remove();
    }

    updateAuthButtonUI();
}

document.addEventListener('DOMContentLoaded', () => {
    loadClients();
    loadVerticals();
    initSmoothScroll();
    addAuthElements();
    initSupabaseAuth();
});
