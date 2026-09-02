/* =============================================================
   MAIN — navbar, reveal, particles, skills, projects, contact
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {
  // ---- Footer year ----
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  // ---- Mobile nav ----
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
  }

  // ---- Navbar hide on scroll down / show on up ----
  const navbar = document.getElementById('navbar');
  let lastY = window.scrollY;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (!navbar) return;
    if (y > lastY && y > 120) navbar.classList.add('hidden');
    else navbar.classList.remove('hidden');
    lastY = y;
  }, { passive: true });

  // ---- Reveal on scroll ----
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(r => io.observe(r));

  // ---- Skills (Home) ----
  const skillContainer = document.getElementById('skillPills');
  if (skillContainer) {
    const skills = [
      'Microsoft Office', 'Hardware Troubleshooting', 'Basic Networking',
      'Java', 'C#', 'PHP', 'MySQL', 'MongoDB Atlas',
      'MERN Stack', 'Unity Engine', 'Cybersecurity Basics'
    ];
    skillContainer.innerHTML = skills.map(s => `<span class="pill">${s}</span>`).join('');
  }

  // ---- Projects (Portfolio) ----
  const grid = document.getElementById('projectGrid');
  if (grid) {
    const projects = [
      {
        title: 'Campus Attendance Management System (2025)',
        desc: 'Real-time scanning with modal overlays, automatic offline sync, intelligent caching, and comprehensive user/log management across Student, Faculty, and Support Personnel roles.',
        stack: 'Electron · Express.js · REST API · MongoDB Atlas · HTML/CSS/JS',
        image: './works/ndgm-cams/image.png',
        sourcecode: 'https://github.com/rafaeldp7/NDGM-CAMS'
      },
      {
        title: 'Traffic Slight (2025)',
        desc: 'A GPS-Based Mobile Application for Navigation and Fuel Consumption Tracking for Motorcycle Riders',
        stack: 'Express.js · Node.js · MongoDB Atlas · React · React Native',
        image: './works/trafficslight/trafficslight.jpg',
        sourcecode: 'https://github.com/rafaeldp7/trafficSlight_APP'
      },
      {
        title: 'Citizen Registry (2024)',
        desc: 'A citizen registration app that works like National ID registration in our GUI, and then it will be saved through Microsoft SQL Database.',
        stack: 'C# · Microsoft SQL Server',
        image: './works/citizenregistry/citizenRegistry.png',
        sourcecode: 'https://github.com/rafaeldp7/citizen-registry'
      },
      {
        title: 'Travel IT (2023)',
        desc: 'an educational board game designed to enhance players\' knowledge about various locations around the world. The game aims to combine fun and interactive gameplay with an educational aspect, making it an engaging way to learn about different countries, landmarks, cultures, and more.',
        stack: 'JAVA',
        image: './works/travelit/travelit_logo.png',
        sourcecode: 'https://github.com/rafaeldp7/travel-it'
      }

    ];
    grid.innerHTML = projects.map(p => `
      <article class="card reveal">
        <div class="placeholder-img">
          ${p.image ? `<img src="${p.image}" alt="${p.title}" />` : `<i class="fa-solid ${p.icon}"></i>`}
        </div>
        <h3 class="card-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <p class="project-stack">${p.stack}</p>
        <div class="project-actions">
          
          <a href=${p.sourcecode} class="btn btn-outline btn-sm">Source Code</a>
        </div>
      </article>
    `).join('');
    // re-observe newly added reveals
    grid.querySelectorAll('.reveal').forEach(r => io.observe(r));
  }

  // ---- Particles (Hero) ----
  const canvas = document.getElementById('particles');
  if (canvas) initParticles(canvas);

  // ---- Contact form ----
  const form = document.getElementById('contactForm');
  if (form) initContactForm(form);
});

/* ---------- Particles ---------- */
function initParticles(canvas) {
  const ctx = canvas.getContext('2d');
  let w, h, particles;
  function resize() {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
    const count = Math.min(80, Math.floor((w * h) / 18000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.6 + 0.4
    }));
  }
  function accentColor() {
    return getComputedStyle(document.body).getPropertyValue('--color-accent').trim() || '#64FFDA';
  }
  function tick() {
    ctx.clearRect(0, 0, w, h);
    const color = accentColor();
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.globalAlpha = 0.6;
      ctx.fill();
    });
    // connecting lines
    ctx.globalAlpha = 0.15;
    ctx.strokeStyle = color;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 110) {
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(tick);
  }
  window.addEventListener('resize', resize);
  resize(); tick();
}

/* ---------- Contact form ---------- */
function initContactForm(form) {
    const toast = document.getElementById('toast');
    const submitBtn = document.getElementById('cf-submit');
    const label = submitBtn.querySelector('.btn-label');

    function showToast(msg) {
        if (!toast) return;

        toast.textContent = msg;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 3500);
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!name || !email || !message) {
            showToast('Please fill in all fields.');
            return;
        }

        if (!emailOk) {
            showToast('Please enter a valid email address.');
            return;
        }

        submitBtn.disabled = true;
        label.innerHTML = '<span class="spinner"></span>';

        try {
            const response = await fetch(
                'https://formspree.io/f/xvkorzqk',
                {
                    method: 'POST',
                    body: new FormData(form),
                    headers: {
                        Accept: 'application/json'
                    }
                }
            );

            if (response.ok) {
                showToast('Message sent! Rafael will get back to you soon.');
                form.reset();
            } else {
                showToast('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error(error);
            showToast('Unable to send message. Please try again.');
        }

        submitBtn.disabled = false;
        label.textContent = 'Send Message';
    });
}