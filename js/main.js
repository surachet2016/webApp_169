/* main.js — Course portal: sidebar injection, copy buttons, mobile nav */

const WEEKS = [
  { n:  1, th: 'แนะนำรายวิชา & สถาปัตยกรรมเว็บ',    lab: 0 },
  { n:  2, th: 'HTML, CSS, JavaScript (ทบทวน)',       lab: 1 },
  { n:  3, th: 'PHP เบื้องต้น & ติดตั้งสภาพแวดล้อม', lab: 2 },
  { n:  4, th: 'ตัวแปร, ฟังก์ชัน & ฟอร์ม GET/POST',  lab: 3 },
  { n:  5, th: 'ออกแบบฐานข้อมูล & MySQL',             lab: 4 },
  { n:  6, th: 'CRUD Operations',                     lab: 5 },
  { n:  7, th: 'อัปโหลดไฟล์ & จัดการไฟล์',           lab: 6 },
  { n:  8, th: 'Session & Cookie',                    lab: 7 },
  { n:  9, th: 'ระบบสมาชิก & Authentication',         lab: 8 },
  { n: 10, th: 'UI/UX & Responsive Web',              lab: 9 },
  { n: 11, th: 'Code Reusability & Template',         lab: 10 },
  { n: 12, th: 'Web Services & REST API',             lab: 11 },
  { n: 13, th: 'โครงงานเว็บ (ทีม)',                    lab: 0 },
  { n: 14, th: 'นำเสนอโครงงาน & เอกสาร',              lab: 0 },
  { n: 15, th: 'Testing, Deploy & สรุปรายวิชา',       lab: 0 },
];

function getPathInfo() {
  const p = window.location.pathname;
  const m = p.match(/week-(\d+)\.html/);
  return {
    currentWeek : m ? parseInt(m[1]) : 0,
    inWeeksDir  : p.includes('/weeks/'),
    isIndex     : !m,
  };
}

function pad(n) { return String(n).padStart(2, '0'); }

/* All sidebar content comes from the hardcoded WEEKS array above (no user input).
   This escape helper is defensive in case the array is ever extended with external data. */
function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildSidebarHTML(info) {
  const base  = info.inWeeksDir ? '../' : '';
  const wpath = info.inWeeksDir ? ''    : 'weeks/';

  const items = WEEKS.map(w => {
    const active  = w.n === info.currentWeek ? 'active' : '';
    const labDot  = w.lab ? '<span class="lab-dot" title="มี Lab"></span>' : '';
    return `<li>
      <a href="${esc(wpath)}week-${pad(w.n)}.html" class="${esc(active)}">
        <span class="wk-num">${w.n}</span>
        <span class="wk-title">${esc(w.th)}</span>
        ${labDot}
      </a>
    </li>`;
  }).join('\n');

  return `
    <a href="${base}index.html" class="sidebar-brand">
      <div class="brand-code">07-034-233</div>
      <div class="brand-th">การพัฒนาเว็บแอปพลิเคชั่น</div>
      <div class="brand-en">Development of Web Application</div>
    </a>
    <div class="sidebar-label">เนื้อหารายสัปดาห์</div>
    <ul class="sidebar-nav">${items}</ul>
    <div class="sidebar-footer">
      <a href="${base}index.html">
        <span>🏠</span>
        <span>หน้าหลัก / ซิลลาบัส</span>
      </a>
    </div>
  `;
}

function initSidebar() {
  const info     = getPathInfo();
  const sidebar  = document.createElement('aside');
  sidebar.className = 'sidebar';
  sidebar.id        = 'sidebar';
  sidebar.innerHTML = buildSidebarHTML(info);
  document.body.prepend(sidebar);

  /* Scroll active item into view */
  const active = sidebar.querySelector('.active');
  if (active) active.scrollIntoView({ block: 'nearest' });

  /* Overlay */
  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  overlay.id        = 'sidebar-overlay';
  document.body.appendChild(overlay);

  /* Hamburger */
  const hamburger = document.createElement('button');
  hamburger.className     = 'hamburger';
  hamburger.id            = 'hamburger';
  hamburger.setAttribute('aria-label', 'Toggle navigation');
  hamburger.innerHTML = '<span></span><span></span><span></span>';
  document.body.appendChild(hamburger);

  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
  });

  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  });

  /* Close sidebar on link click (mobile) */
  sidebar.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
    });
  });
}

function initCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pre = btn.closest('.code-block')?.querySelector('pre');
      const text = pre ? pre.innerText : '';

      const doSuccess = () => {
        btn.textContent = 'คัดลอกแล้ว ✓';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'คัดลอก';
          btn.classList.remove('copied');
        }, 2200);
      };

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(doSuccess).catch(() => fallbackCopy(text, doSuccess));
      } else {
        fallbackCopy(text, doSuccess);
      }
    });
  });
}

function fallbackCopy(text, callback) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try { document.execCommand('copy'); callback(); } catch(e) { /* silent */ }
  document.body.removeChild(ta);
}

function initAnimations() {
  /* Stagger-in for cards on index page */
  const cards = document.querySelectorAll('.info-card, .clo-card, .assess-card');
  if (!('IntersectionObserver' in window)) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = (i * 0.05) + 's';
        entry.target.classList.add('fade-in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(c => {
    c.style.opacity = '0';
    c.style.transform = 'translateY(12px)';
    c.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    io.observe(c);
  });
}

/* Simple polyfill-free fade-in via IntersectionObserver */
function triggerCardFade(el) {
  el.style.opacity = '1';
  el.style.transform = 'translateY(0)';
}

document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  initCopyButtons();
  initAnimations();

  /* Fix: trigger fades after sidebar is injected */
  requestAnimationFrame(() => {
    document.querySelectorAll('.fade-in').forEach(triggerCardFade);
  });
});
