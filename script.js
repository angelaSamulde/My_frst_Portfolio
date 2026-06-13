const pageLabels = {
  about: "About Me",
  travel: "Gallery",
  hobbies: "Hobbies",
  music: "Music",
  contact: "Contact"
};

const defaultGoals = [
  ["school", "Finish my studies"],
  ["work", "Have a successful career"],
  ["family_restroom", "Help my family"],
  ["flag", "Build a stable future"]
];

const defaultGallery = [
  ["best_friends.jpg", "Best Friends", "A collection of unforgettable moments shared with my closest friends. These memories represent friendship, trust, support, and happiness throughout my journey."],
  ["classmate.jpg", "Classmate Moments", "Captured during school activities and classroom experiences. These moments reflect teamwork, learning, cooperation, and personal growth with my classmates."],
  ["friends.jpg", "Friends", "A special memory with friends who bring joy, encouragement, and positivity into my life. These friendships make every experience more meaningful."],
  ["outing_with_friends.jpg", "Outing With Friends", "A memorable outing filled with laughter, adventure, and bonding. These experiences strengthened our friendship and created lasting memories."]
];

const users = {
  angela: {
    password: "123",
    name: "Angela Samulde",
    role: "Office Administration Student",
    location: "Lau-an, Antique, Philippines",
    bio: "“Choose Office Administration for a better future!”\n\nOffice Administration is a course that teaches office management, communication, computer, and organizational skills. It prepares students for jobs like office assistant, secretary, and administrative officer. It helps build professionalism and skills for a successful career.",
    school: "Bachelor of Science in Office Administration",
    skills: ["Communication skills", "Office management", "Filing and record keeping", "Customer service", "Administrative support", "Computer literacy"],
    image: "profile.jpg",
    goals: [
      ["school", "Finish my studies"],
      ["work", "Have a successful career"],
      ["family_restroom", "Help my family"],
      ["flag", "Travel to different countries"]
    ],
    gallery: defaultGallery,
    hobbies: [
      ["music_note", "Listening to music", "Enjoying songs that bring comfort, focus, and relaxation."],
      ["wb_twilight", "Watching sunsets", "Appreciating peaceful sunset views and quiet moments."],
      ["travel_explore", "Traveling", "Exploring new places and creating meaningful experiences."],
      ["church", "Visiting unfamiliar churches", "Discovering peaceful churches and learning from new places."],
      ["menu_book", "Reading Wattpad stories", "Enjoying Wattpad stories during free time."]
    ],
    music: [
      ["music_note", "Favorite Songs", "Soft pop, worship songs, and relaxing music that match her calm personality."],
      ["headphones", "Listening Time", "Music helps me relax, reflect, and stay inspired during busy school days."],
      ["queue_music", "Playlist Mood", "Peaceful, meaningful, and uplifting songs for studying, traveling, and quiet moments."]
    ],
    musicIcon: "music_note",
    musicLabel: "Music",
    musicIntro: "Songs and playlists that fit the vibe.",
    contact: [
      ["email", "Email", "samuldeangela99@gmail.com"],
      ["call", "Phone", "09688369563"],
      ["language", "Facebook", "facebook.com/angela samulde"]
    ],
    bannerGradient: "linear-gradient(to right, #3ac78e, #3B82F6)", // Vibrant gradient for user interaction
    bannerTextColor: "#FFFFFF", // White text for light banner
    themeBadgeTextColor: "#FFFFFF", // White text for badge
    themeBadge: "OFFICE ADMINISTRATION",
    sectionIcons: { about: "person", travel: "collections", hobbies: "auto_awesome", contact: "contact_page", music: "music_note" },
    uiConfig: {
      navOrder: ['about', 'travel', 'hobbies', 'music', 'contact'],
      staggerDelay: 70,
      useMotion: true
    }
  },
  kristine: {
    password: "456",
    name: "Kristine Labiao", // Keeping the name as requested
    role: "Office Administration Student",
    location: "Bugasong, Antique, Philippines",
    bio: "I am a dedicated student pursuing a Bachelor of Science in Office Administration. I am passionate about developing strong organizational, communication, and administrative skills to contribute effectively to any professional environment. I enjoy learning about efficient office management and utilizing technology to streamline operations.",
    school: "Bachelor of Science in Office Administration",
    skills: ["Office Management", "Microsoft Office Suite", "Communication", "Administrative Support", "Customer Service", "Time Management", "Record Keeping", "Organizational Skills"],
    image: "kristine1.jpg",
    goals: [
      ["school", "Excel in Office Administration studies"],
      ["work", "Secure a fulfilling administrative career"],
      ["family_restroom", "Support my family's well-being"],
      ["flag", "Achieve professional certifications"]
    ],
    gallery: [
      ["kristine1.jpg", "Serene Portrait", "A moment of calm reflection."],
      ["kristine2.jpg", "Campus Exploration", "Exploring new places and environments."],
      ["kristine3.jpg", "Vista Cafe Evenings", "Enjoying a cozy evening at Vista Cafe."],
      ["kristine4.jpg", "Nature Retreat Cabins", "Nature's embrace at a peaceful retreat."],
      ["kristine5.jpg", "Festival Vibrance", "Experiencing vibrant local culture."],
      ["kristine6.jpg", "Anyap Falls Adventure", "Discovering the beauty of Anyap Falls."],
      ["kristine7.jpg", "Evening Balcony Views", "Relaxing under the night sky."],
      ["kristine8.jpg", "Cityscape Dynamics", "Cityscapes and urban exploration."],
      ["kristine9.jpg", "Sky & Sea Collection", "Capturing the beauty of sunsets and seascapes."],
      ["kristine10.jpg", "Hala Bira, Iloilo!", "Capturing the vibrant energy and festival spirit of Iloilo City at night."],
      ["kristine11.jpg", "Friends Under the Stars", "Cherished moments with friends."]
    ],
    hobbies: [
      ["menu_book", "Reading", "Reading books and articles to expand knowledge."],
      ["local_cafe", "Coffee Enthusiast", "Enjoying coffee and quiet moments."],
      ["travel_explore", "Exploring New Places", "Exploring new places and cultures."],
      ["fitness_center", "Staying Active", "Staying active and maintaining well-being."]
    ],
    music: [
      ["local_cafe", "I Love Coffee", "Sipping on my favorite brew while listening to calming acoustic melodies."],
      ["music_note", "Cafe Playlist", "Soft jazz and lo-fi beats that complement the perfect coffee shop vibe."],
      ["headphones", "Brew & Relax", "The best music to enjoy during a coffee break or while focusing on work."],
      ["emoji_food_beverage", "Morning Ritual", "Starting the day right with a hot cup and motivational instrumentals."],
      ["cake", "Sweet Harmony", "A sweet treat paired with soulful melodies for a perfect afternoon break."]
    ],
    musicIcon: "local_cafe",
    musicLabel: "I Love Coffee",
    travelLabel: "Travel",
    musicIntro: "Where caffeine meets rhythm — my favorite blends and tunes.",
    contact: [
      ["email", "Email", "kristine12@gmail.com"],
      ["call", "Phone", "09295362006"],
      ["language", "Facebook", "facebook.com/kristine"], // Assuming this should still be a link
      ["alternate_email", "Instagram", "_itslovekrstne"] // Displaying handle, not a link
    ],
    bannerGradient: "linear-gradient(to right, #6366F1, #EC4899)",
    bannerTextColor: "#FFFFFF", // White text for dark banner
    themeBadgeTextColor: "#FFFFFF", // White text for badge
    themeBadge: "OFFICE ADMINISTRATION",
    sectionIcons: { about: "history_edu", travel: "flight", hobbies: "volunteer_activism", contact: "alternate_email", music: "local_cafe" },
    uiConfig: {
      navOrder: ['about', 'travel', 'hobbies', 'music'],
      staggerDelay: 70,
      useMotion: true
    }
  }
};

const state = {
  currentUser: null,
  currentPage: "about",
  isTransitioning: false
};

const elements = {
  app: document.querySelector(".app"),
  loginForm: document.getElementById("loginForm"),
  loginScreen: document.getElementById("loginScreen"),
  portfolioScreen: document.getElementById("portfolioScreen"),
  content: document.getElementById("content"),
  loginMessage: document.getElementById("loginMessage"),
  usernameInput: document.getElementById("username"),
  passwordInput: document.getElementById("password"),
  showPassword: document.getElementById("showPassword"),
  pageTitle: document.getElementById("pageTitle"),
  sidebar: document.getElementById("sidebar"),
  sidebarOverlay: document.getElementById("sidebarOverlay"),
  modalOverlay: document.getElementById("modalOverlay"),
  logoutDialog: document.getElementById("logoutDialog"),
  sidebarName: document.getElementById("sidebarName"),
  sidebarPhoto: document.getElementById("sidebarPhoto"),
  topAvatar: document.getElementById("topAvatar"),
  topAvatarButton: document.getElementById("topAvatarButton"),
  menuBtn: document.getElementById("menuBtn"),
  logoutBtn: document.getElementById("logoutBtn"),
  cancelLogout: document.getElementById("cancelLogout"),
  confirmLogout: document.getElementById("confirmLogout"),
};

function signIn(userKey) {
  const user = users[userKey];
  
  // 1. High-level sensitization sequence (Welcome Overlay)
  const welcomeOverlay = document.createElement("div");
  welcomeOverlay.style.cssText = `
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px);
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    z-index: 10000; opacity: 0; transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
  `;

  welcomeOverlay.innerHTML = `
    <div style="text-align: center; transform: translateY(20px); transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);" id="welcomeContent">
      <img src="${user.image}" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; border: 4px solid white; box-shadow: 0 20px 40px rgba(0,0,0,0.1); margin-bottom: 24px;">
      <h1 style="font-size: 2.2rem; color: #0f172a; font-weight: 700; margin: 0; letter-spacing: -0.02em;">Welcome back,</h1>
      <p style="font-size: 1.4rem; color: #64748b; margin: 8px 0 0 0;">${user.name}</p>
    </div>
  `;

  (document.querySelector('.app') || document.body).appendChild(welcomeOverlay);

  // Start sensitization animations
  requestAnimationFrame(() => {
    welcomeOverlay.style.opacity = "1";
    welcomeOverlay.querySelector("#welcomeContent").style.transform = "translateY(0)";
  });

  // Blur the background login screen for a premium feel
  elements.loginScreen.style.filter = "blur(15px) scale(1.05)";
  elements.loginScreen.style.transition = "filter 1.5s ease, transform 1.5s ease";

  setTimeout(() => {
    // 2. Prepare state while user is looking at the welcome message
    state.currentUser = user;
    state.currentPage = "about";
    
    elements.sidebarName.textContent = user.name;
    elements.sidebarPhoto.src = user.image;
    elements.topAvatar.src = user.image;

    // Navigation UI update: handle labels, icons and order
    pageLabels.music = user.musicLabel || "Music";
    pageLabels.travel = user.travelLabel || "Gallery";
    const navOrder = user.uiConfig.navOrder;
    const navContainers = new Set();

    document.querySelectorAll('.nav-item, .menu-item[data-page]').forEach(el => {
      const page = el.getAttribute('data-page');
      if (el.parentElement) navContainers.add(el.parentElement);

      // Update Labels and Icons
      const textEl = el.querySelector('span:not(.material-icons)') || 
                     Array.from(el.childNodes).find(n => n.nodeType === 3 && n.textContent.trim());
      if (textEl && pageLabels[page]) textEl.textContent = pageLabels[page];

      const icon = el.querySelector('.material-icons');
      if (icon && user.sectionIcons[page]) icon.textContent = user.sectionIcons[page];

      // Professional internal alignment
      el.style.display = 'flex';
      el.style.alignItems = 'center';
      el.style.gap = '10px';
    });

    // Strictly organize navigation order and visibility
    navContainers.forEach(container => {
      // Professional Alignment Fix: Adjust bottom-nav grid to fit the specific user's item count
      if (container.classList.contains('bottom-nav')) {
        container.style.gridTemplateColumns = `repeat(${navOrder.length}, 1fr)`;
      }

      navOrder.forEach(pageId => {
        const item = container.querySelector(`[data-page="${pageId}"]`);
        if (item) {
          container.appendChild(item);
          item.style.display = '';
        }
      });
      Array.from(container.children).forEach(child => {
        const link = child.hasAttribute('data-page') ? child : child.querySelector('[data-page]');
        if (link && !navOrder.includes(link.getAttribute('data-page'))) child.style.display = 'none';
      });
    });

    renderPage("about");

    // 3. Final professional transition into the app
    welcomeOverlay.style.opacity = "0";
    elements.loginScreen.classList.remove("active"); 
    elements.portfolioScreen.classList.add("active");
    elements.loginScreen.style.filter = "none";
    elements.loginScreen.style.transform = "none";
    document.title = `${user.name} | Portfolio Connect`;

    setTimeout(() => {
      welcomeOverlay.remove();
      elements.loginMessage.textContent = "";
      elements.loginForm.reset();
      elements.passwordInput.type = "password";
    }, 800);
  }, 2400); // 2.4s display time for the welcome sequence
}

function signOut() {
  state.currentUser = null;
  closeLogoutDialog();
  elements.portfolioScreen.classList.remove("active");
  elements.loginScreen.classList.add("active");
  document.title = "Portfolio Connect";
  elements.usernameInput.focus();
}

function renderPage(page) {
  if (!state.currentUser || !pageLabels[page] || state.isTransitioning) return;

  const config = state.currentUser.uiConfig;
  state.isTransitioning = true;

  // Phase 1: Exit Animation for the container
  elements.content.style.opacity = "0";
  if (config.useMotion) elements.content.style.transform = "translateY(-8px) scale(0.98)";
  elements.content.style.transition = config.useMotion ? "opacity 0.25s cubic-bezier(0.4, 0, 1, 1), transform 0.25s cubic-bezier(0.4, 0, 1, 1)" : "opacity 0.2s ease-in";

  setTimeout(() => {
    state.currentPage = page;
    elements.pageTitle.textContent = pageLabels[page];

    const templates = {
      about: renderAboutPage,
      travel: renderTravelPage,
      hobbies: renderHobbiesPage,
      music: renderMusicPage,
      contact: renderContactPage,
    };

    updateActiveNavigation(page);
    elements.content.innerHTML = templates[page]();
    closeSidebar();
    const scrollTarget = elements.portfolioScreen || window;
    scrollTarget.scrollTo({ top: 0, behavior: 'instant' });

    // Phase 2: Prepare new elements for entry
    const cards = elements.content.querySelectorAll(".page");
    cards.forEach(card => {
      card.style.opacity = "0";
      if (config.useMotion) {
        card.style.transform = "translateY(15px) scale(0.99)";
        card.style.transition = "opacity 0.5s cubic-bezier(0, 0, 0.2, 1), transform 0.5s cubic-bezier(0, 0, 0.2, 1)";
      } else {
        // Smooth fade for non-motion profiles like Kristine's
        card.style.transition = "opacity 0.4s ease-out";
      }
    });

    // Reveal the container
    elements.content.style.opacity = "1";
    if (config.useMotion) elements.content.style.transform = "translateY(0) scale(1)";

    // Execute staggered reveal of individual components
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = "1";
        if (config.useMotion) card.style.transform = "translateY(0) scale(1)";
      }, index * config.staggerDelay);
    });

    // Release transition lock after animations finish
    setTimeout(() => {
      state.isTransitioning = false;
    }, (cards.length * config.staggerDelay) + 500);
  }, 250); // Consistent delay for the "Feature Switch" feel
}

function updateActiveNavigation(page) {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.page === page);
  });

  document.querySelectorAll(".menu-item[data-page]").forEach((button) => {
    button.classList.toggle("active", button.dataset.page === page);
  });
}

function renderAboutPage() {
  const user = state.currentUser;

  return `
    <section class="profile-card page">
      <div class="profile-banner" style="background: ${user.bannerGradient}">
        <img class="profile-photo-banner" src="${user.image}" alt="${user.name}">
        <div class="profile-info">
          <h2 class="name" style="margin:0; color: ${user.bannerTextColor}">Hi, I'm ${user.name}</h2>
          <div class="location" style="color: ${user.bannerTextColor}; opacity: 0.85">${user.location}</div>
          <div class="theme-badge" style="color: ${user.themeBadgeTextColor}; border-color: ${user.themeBadgeTextColor};">
            ${user.themeBadge}
          </div>
        </div>
      </div>
    </section>
    ${renderInfoCard(user.sectionIcons?.about || "school", "Biography", user.bio)}
    ${renderInfoCard(user.sectionIcons?.about || "school", "Education", user.school)}
    <section class="info-card page">
      <h3 class="section-title"><span class="material-icons">flag</span>My Goals in Life</h3>
      <div class="goal-grid">
        ${(user.goals || defaultGoals).map(([icon, goal]) => `
          <article class="goal-card">
            <span class="material-icons goal-icon">${icon}</span>
            <h4>${goal}</h4>
          </article>
        `).join("")}
      </div>
    </section>
    <section class="info-card page">
      <h3 class="section-title"><span class="material-icons">check_circle</span>Skills</h3>
      <div class="skill-list" ${user.name.includes('Kristine') ? 'style="grid-template-columns: repeat(2, 1fr); gap: 10px;"' : ''}>
        ${user.skills.map((skill) => `
          <div class="skill-item" ${user.name.includes('Kristine') ? 'style="padding: 12px; background: #fff; border: 1px solid var(--line-soft); border-radius: 8px; box-shadow: var(--shadow-1);"' : ''}>
            <span class="material-icons" ${user.name.includes('Kristine') ? 'style="color: var(--blue); font-size: 1.1rem;"' : ''}>check_circle</span>
            <span ${user.name.includes('Kristine') ? 'style="font-size: 0.84rem; font-weight: 500;"' : ''}>${skill}</span>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function renderTravelPage() {
  const gallery = state.currentUser.gallery || []; 

  return `
    ${renderSectionIntro(state.currentUser.sectionIcons?.travel || "photo_library", "My Gallery", "Meaningful memories captured with friends and classmates.")}
    <div class="gallery-grid">
      ${gallery.map(([image, title, description]) => `
        <article class="gallery-card page">
          <img src="${image}" alt="${title}">
          <div class="gallery-body">
            <span class="gallery-label">Memory</span>
            <h3 class="item-title">${title}</h3>
            <p class="item-meta">${description}</p>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderHobbiesPage() {
  return `
    ${renderSectionIntro(state.currentUser.sectionIcons?.hobbies || "interests", "Hobbies", "Things I enjoy in daily life.")}
    <div class="item-list">
      ${state.currentUser.hobbies.map(([icon, title, description]) => renderIconItem(icon, title, description)).join("")}
    </div>
  `;
}

function renderMusicPage() {
  const user = state.currentUser;
  
  return `
    ${renderSectionIntro(user.sectionIcons?.music || "music_note", user.musicLabel || "Music", user.musicIntro || "Songs and playlists that fit the vibe.")}
    <div class="item-list">
      ${state.currentUser.music.map(([icon, title, description]) => renderIconItem(icon, title, description)).join("")}
    </div>
  `;
}

function renderContactPage() {
  return `
    ${renderSectionIntro(state.currentUser.sectionIcons?.contact || "mail", "Contact", "Ways to get in touch.")}
    <div class="item-list">
      ${state.currentUser.contact.map(([icon, title, value]) => renderContactItem(icon, title, value)).join("")}
    </div>
  `;
}

function renderInfoCard(icon, title, text) {
  return `
    <section class="info-card page">
      <h3 class="section-title"><span class="material-icons">${icon}</span>${title}</h3>
      <p class="card-text">${text}</p>
    </section>
  `;
}

function renderSectionIntro(icon, title, text) {
  return `
    <section class="section-card page">
      <h2 class="section-title"><span class="material-icons">${icon}</span>${title}</h2>
      <p class="card-text">${text}</p>
    </section>
  `;
}

function renderIconItem(icon, title, description) {
  return `
    <article class="item-card page">
      <span class="material-icons item-icon">${icon}</span>
      <div>
        <h3 class="item-title">${title}</h3>
        <p class="item-meta">${description}</p>
      </div>
    </article>
  `;
}

function renderContactItem(icon, title, value) {
  const href = getContactHref(title, value);

  if (!href) {
    return `
      <article class="item-card page">
        <span class="material-icons item-icon">${icon}</span>
        <div>
          <h3 class="item-title">${title}</h3>
          <p class="item-meta">${value}</p>
        </div>
      </article>
    `;
  }

  return `
    <a class="item-card contact-link page" href="${href}" target="${href.startsWith("http") ? "_blank" : "_self"}" rel="noopener">
      <span class="material-icons item-icon">${icon}</span>
      <div>
        <h3 class="item-title">${title}</h3>
        <p class="item-meta">${value}</p>
      </div>
      <span class="material-icons contact-arrow">open_in_new</span>
    </a>
  `;
}

function getContactHref(title, value) {
  const normalizedTitle = title.toLowerCase();
  const normalizedValue = value.trim();

  if (normalizedTitle.includes("facebook")) {
    if (normalizedValue.startsWith("facebook.com")) {
      return `https://${normalizedValue}`;
    }
    return `https://facebook.com/${normalizedValue.replace(/\s+/g, "")}`;
  }

  if (normalizedTitle.includes("instagram")) {
    return ""; // Instagram handle should not be a clickable link as per request
  }

  if (normalizedTitle.includes("email")) {
    return `mailto:${normalizedValue}`;
  }

  if (normalizedTitle.includes("phone")) {
    return `tel:${normalizedValue.replace(/\s+/g, "")}`;
  }

  if (normalizedValue.startsWith("http")) {
    return normalizedValue;
  }

  return `https://${normalizedValue}`;
}

function openSidebar() {
  elements.sidebar.classList.add("open");
  elements.sidebarOverlay.classList.add("open");
  elements.sidebar.style.zIndex = "2000";
  elements.sidebarOverlay.style.zIndex = "1999";
}

function closeSidebar() {
  elements.sidebar.classList.remove("open");
  elements.sidebarOverlay.classList.remove("open");
}

function openLogoutDialog() {
  closeSidebar();
  elements.modalOverlay.classList.add("open");
  elements.logoutDialog.classList.add("open");
}

function closeLogoutDialog() {
  elements.modalOverlay.classList.remove("open");
  elements.logoutDialog.classList.remove("open");
}

elements.showPassword.addEventListener("change", () => {
  elements.passwordInput.type = elements.showPassword.checked ? "text" : "password";
});

elements.loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = elements.usernameInput.value.trim().toLowerCase();
  const password = elements.passwordInput.value.trim();

  if (users[username]?.password === password) {
    signIn(username);
    return;
  }

  elements.loginMessage.textContent = "Invalid username or password.";
});

document.getElementById("googleBtn").addEventListener("click", () => {
  elements.loginMessage.textContent = "Google sign-in is ready for design preview.";
});

document.getElementById("forgotLink").addEventListener("click", (event) => {
  event.preventDefault();
  elements.loginMessage.textContent = "Please contact the portfolio owner to reset access.";
});

// Safe Event Listener Attachment to prevent script crashes
const safeListen = (el, event, fn) => el && el.addEventListener(event, fn);

safeListen(elements.menuBtn, "click", openSidebar);
safeListen(elements.sidebarOverlay, "click", closeSidebar);
safeListen(elements.topAvatarButton, "click", openSidebar);
safeListen(elements.modalOverlay, "click", closeLogoutDialog);
safeListen(elements.cancelLogout, "click", closeLogoutDialog);
safeListen(elements.confirmLogout, "click", signOut);
safeListen(elements.logoutBtn, "click", openLogoutDialog);

document.querySelectorAll(".nav-item, .menu-item[data-page]").forEach((button) => {
  button.addEventListener("click", () => renderPage(button.dataset.page));
});

/**
 * High-Level Sticky Navigation
 * Ensures the header is context-aware: hides on scroll down, reveals on scroll up.
 */
function initStickyHeader() {
  if (!elements.topAvatarButton) return;
  const header = elements.topAvatarButton.closest('header') || elements.topAvatarButton.parentElement;
  if (!header) return;

  const scrollContainer = elements.portfolioScreen || window;
  let lastScroll = 0;
  header.style.cssText += 'position: sticky; top: 0; z-index: 1000; transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), background 0.3s ease, backdrop-filter 0.3s ease;';

  scrollContainer.addEventListener('scroll', () => {
    const currentScroll = scrollContainer === window ? 
      Math.max(0, window.pageYOffset || document.documentElement.scrollTop) : 
      scrollContainer.scrollTop;

    if (currentScroll > 5) {
      header.style.background = 'rgba(255, 255, 255, 0.75)';
      header.style.backdropFilter = 'blur(20px) saturate(160%)';
      header.style.borderBottom = '1px solid var(--line-soft)';
    } else {
      header.style.background = '#ffffff';
      header.style.backdropFilter = 'none';
      header.style.borderBottom = '1px solid transparent';
    }

    header.style.transform = 'translateY(0)';
    lastScroll = Math.max(0, currentScroll);
  }, { passive: true });
}

function setupMobileAdaptability() {
    const updateVH = () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Optimized resize handling for mobile orientation changes
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(updateVH, 150);
    }, { passive: true });

    window.addEventListener('orientationchange', () => {
        setTimeout(updateVH, 200); // Small delay to allow browser layout to settle
    }, { passive: true });

    updateVH();

    // Enhance mobile touch feedback responsiveness
    document.addEventListener('touchstart', () => {}, { passive: true });
}

setupMobileAdaptability();
initStickyHeader();
