# Curriculum Rewrite — Modern Web Stack Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** เขียน week-01.html ถึง week-15.html ใหม่ทั้งหมดให้สอน Vite + React + Hono + Supabase + Shadcn + TanStack + Cloudflare Workers แทน PHP + MySQL + XAMPP โดยใช้ running project "BookEasy" (ระบบจองบริการ)

**Architecture:** Portal (index.html, css/style.css, js/main.js) คงเดิมทั้งหมด — เปลี่ยนเฉพาะเนื้อหา HTML ภายใน week files แต่ละสัปดาห์ HTML structure เดิมยังคงใช้อยู่ (breadcrumb, week-hero, toc-box, theory-wrap, code-block, lab-container, week-nav) แค่เนื้อหาข้างในเปลี่ยนใหม่

**Tech Stack:** JavaScript ES2022+, Vite, React, TanStack Router, TanStack Query, Hono, Supabase, Shadcn/ui, Tailwind CSS, Cloudflare Workers

## Global Constraints

- ภาษาเนื้อหา: ภาษาไทย (เหมือนเดิม)
- ภาษาโค้ด: JavaScript (ไม่ใช้ TypeScript)
- Running project: BookEasy — ระบบจองบริการ (ร้านตัดผม/นวด/สปา)
- HTML structure: คงโครงสร้าง HTML เดิมทั้งหมด เปลี่ยนแค่ text/content ข้างใน
- Prism languages ที่ใช้: `javascript`, `jsx` (ใช้ `language-javascript` แทน), `bash`, `sql`
- Portal files ห้ามแตะ: `index.html`, `css/style.css`, `js/main.js`
- ทุกไฟล์ต้องมี Prism script tags สำหรับ javascript และ bash (ไม่ต้องมี php)
- lab-task แต่ละ task มี `task-accept` (เกณฑ์การผ่าน) และ `task-hint` (คำแนะนำ) เสมอ
- ทุก lab ที่ Week 3+ ต้องมี callout `note` ระบุว่า "ต่อยอดจาก Lab ก่อน: ..."

---

## File Map

### ไฟล์ที่แก้ไข
- `index.html` — อัปเดต: (1) week titles ในตาราง (2) หัวข้อ "เทคโนโลยีที่ใช้" ใน section ข้อมูลรายวิชา

### ไฟล์ที่เขียนใหม่ทั้งหมด (เนื้อหา)
- `weeks/week-01.html` — แนะนำรายวิชา & Modern Web Stack
- `weeks/week-02.html` — ทบทวน HTML/CSS/JS + ES2022
- `weeks/week-03.html` — Vite + React: Component เบื้องต้น
- `weeks/week-04.html` — React State + Form + TanStack Router
- `weeks/week-05.html` — Hono API บน Cloudflare Workers
- `weeks/week-06.html` — Supabase: ออกแบบ DB + SQL เบื้องต้น
- `weeks/week-07.html` — CRUD ครบวงจร — Hono + Supabase
- `weeks/week-08.html` — TanStack Query
- `weeks/week-09.html` — Supabase Auth
- `weeks/week-10.html` — Supabase Storage
- `weeks/week-11.html` — Shadcn/ui + Tailwind CSS
- `weeks/week-12.html` — Custom Hooks + Reusability + Error Handling
- `weeks/week-13.html` — โครงงานทีม
- `weeks/week-14.html` — นำเสนอโครงงาน
- `weeks/week-15.html` — Deploy + Testing + สรุปรายวิชา

---

## HTML Template สำหรับทุก Week File

ทุก week file ใช้ structure นี้ (คัดลอกจาก week-01.html เดิมแล้วแทนที่เนื้อหา):

```html
<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>สัปดาห์ที่ N — [หัวข้อ] — 07-034-233</title>
  <link rel="stylesheet" href="../css/style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css"
        integrity="sha512-vswe+cgvic/XBoF1OcM/TeJ2FW0OofqAVdCZiEYkd6dwGXthvkSFWOoGGJgS2CW70VK5dQM5Oh+7ne47s74VTg=="
        crossorigin="anonymous">
</head>
<body>
<!-- Sidebar injected by js/main.js -->
<div class="main">

  <nav class="breadcrumb">
    <a href="../index.html">หน้าหลัก</a>
    <span class="sep">›</span>
    <span>สัปดาห์ที่ N</span>
    <span class="sep">›</span>
    <span>[หัวข้อ]</span>
  </nav>

  <div class="week-hero">
    <div class="wh-eyebrow">สัปดาห์ที่ N</div>
    <h1 class="wh-title">[หัวข้อ]</h1>
    <div class="wh-clos">
      <span class="wh-clo">CLOx</span>
    </div>
  </div>

  <div class="content">

    <div class="toc-box">
      <div class="toc-title">📑 สารบัญ</div>
      <ul class="toc-list">
        <li><a href="#theory">ทฤษฎี</a></li>
        <li><a href="#code">โค้ดตัวอย่าง</a></li>
        <!-- เพิ่ม <li><a href="#lab">ปฏิบัติการ Lab N</a></li> ถ้ามี Lab -->
      </ul>
    </div>

    <div id="theory">
      <span class="sec-badge theory">📖 ทฤษฎี</span>
      <div class="theory-wrap">
        <!-- เนื้อหาทฤษฎี -->
      </div>
    </div>

    <div id="code">
      <span class="sec-badge code">💻 โค้ดตัวอย่าง</span>
      <!-- code-block elements -->
    </div>

    <!-- ถ้ามี Lab: -->
    <div class="lab-container" id="lab">
      <div class="lab-header">
        <h2>🧪 ปฏิบัติการ Lab N — [หัวข้อ Lab]</h2>
        <p>[คำอธิบาย Lab]</p>
      </div>
      <div class="lab-body">
        <!-- lab-task elements -->
      </div>
    </div>

    <div class="week-nav">
      <a href="week-[N-1].html" class="wn-btn"> <!-- หรือ href="#" class="wn-btn disabled" ถ้าไม่มี -->
        <div class="wn-sub">← สัปดาห์ก่อน</div>
        <div class="wn-name">[หัวข้อสัปดาห์ก่อน]</div>
      </a>
      <a href="week-[N+1].html" class="wn-btn wn-next"> <!-- หรือ href="#" class="wn-btn disabled wn-next" -->
        <div class="wn-sub">สัปดาห์ถัดไป →</div>
        <div class="wn-name">[หัวข้อสัปดาห์ถัดไป]</div>
      </a>
    </div>

  </div>
</div>

<script src="../js/main.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"
        integrity="sha512-7Z9J3l1+EYfeaPKcGXu3MS/7T+w19WtKQY/n+xzmw4hZhJ9tyYmcUS+4QqAlzhicE5LAfMQSF3iFTK9bQdTxXg=="
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-javascript.min.js"
        integrity="sha512-jwrwRWZWW9J6bjmBOJxPcbRvEBSQeY4Ad0NEXSfP0vwYi/Yu9x5VhDBl3wz6Pnxs8Rx/t1P8r9/OHCRciHcT7Q=="
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-bash.min.js"
        integrity="sha512-whYhDwtTmlC/NpZlCr6PSsAaLOrfjVg/iXAnC4H/dtiHawpShhT2SlIMbpIhT/IL/NrpdMm+Hq2C13+VKpHTYw=="
        crossorigin="anonymous"></script>
<!-- เพิ่ม prism-jsx ถ้าสัปดาห์นั้นมี JSX (W3–W12) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-jsx.min.js"
        integrity="sha512-m3JYEI6gx5fh9jF10FjGoMzVKcV2N6nchcDcqPCdI1L3R2WQV7br2XVNR8iTLb2daOMRl3zldbcfT40xU2ntVw=="
        crossorigin="anonymous"></script>
<!-- เพิ่ม prism-sql ถ้าสัปดาห์นั้นมี SQL (W6–W7) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-sql.min.js"
        integrity="sha512-sijCOJblSCXYYmXdwvqV0tak8QJW5iy2yLB1wAbbLc3OOIueqymizRFWUS/mwKctnzPKpNdPJV3aK1zlDMJmXQ=="
        crossorigin="anonymous"></script>
</body>
</html>
```

### code-block template:
```html
<div class="code-block">
  <div class="code-head">
    <div class="code-dots">
      <span class="dot-r"></span><span class="dot-y"></span><span class="dot-g"></span>
    </div>
    <span class="code-filename">filename.js</span>
    <span class="code-lang">JavaScript</span>
    <button class="copy-btn">คัดลอก</button>
  </div>
  <pre><code class="language-javascript">
// โค้ด
  </code></pre>
</div>
```

### lab-task template:
```html
<div class="lab-task">
  <div class="task-head">
    <div class="task-num">1</div>
    <div class="task-title">[ชื่อ task]</div>
  </div>
  <div class="task-body">
    <p>[คำอธิบาย]</p>
    <ul>
      <li>ขั้นตอน 1...</li>
    </ul>
    <div class="task-accept">
      <div class="ta-title">เกณฑ์การผ่าน</div>
      <p>[เกณฑ์]</p>
    </div>
    <div class="task-hint">
      <div class="th-title">คำแนะนำ</div>
      <p>[hint]</p>
    </div>
  </div>
</div>
```

---

## Task 0: อัปเดต index.html

**Files:**
- Modify: `index.html`

- [ ] **Step 1: อัปเดตตาราง week titles ใน index.html**

แทนที่ `<td class="td-topic">` ทั้ง 15 แถวด้วย:

```html
<!-- Week 1 -->
<td class="td-topic"><a href="weeks/week-01.html">แนะนำรายวิชา & Modern Web Stack (Vite, React, Hono, Supabase)</a></td>
<!-- Week 2 -->
<td class="td-topic"><a href="weeks/week-02.html">ทบทวน HTML, CSS, JavaScript & ES2022 (Arrow Fn, Async/Await, Modules)</a></td>
<!-- Week 3 -->
<td class="td-topic"><a href="weeks/week-03.html">Vite + React: ตั้งค่าโปรเจกต์, JSX & Component เบื้องต้น</a></td>
<!-- Week 4 -->
<td class="td-topic"><a href="weeks/week-04.html">React State + Form + TanStack Router (Routing & Navigation)</a></td>
<!-- Week 5 -->
<td class="td-topic"><a href="weeks/week-05.html">Hono API บน Cloudflare Workers (Routing, Middleware, JSON)</a></td>
<!-- Week 6 -->
<td class="td-topic"><a href="weeks/week-06.html">Supabase: ออกแบบฐานข้อมูล PostgreSQL & SQL เบื้องต้น</a></td>
<!-- Week 7 -->
<td class="td-topic"><a href="weeks/week-07.html">CRUD ครบวงจร — Hono เชื่อมต่อ Supabase (GET/POST/PUT/DELETE)</a></td>
<!-- Week 8 -->
<td class="td-topic"><a href="weeks/week-08.html">TanStack Query: useQuery, useMutation & Server State Management</a></td>
<!-- Week 9 -->
<td class="td-topic"><a href="weeks/week-09.html">Supabase Auth: Login, Register, Session & Protected Routes</a></td>
<!-- Week 10 -->
<td class="td-topic"><a href="weeks/week-10.html">Supabase Storage: อัปโหลดไฟล์และจัดการรูปภาพ</a></td>
<!-- Week 11 -->
<td class="td-topic"><a href="weeks/week-11.html">Shadcn/ui + Tailwind CSS: ออกแบบ UI ที่สวยงามและ Responsive</a></td>
<!-- Week 12 -->
<td class="td-topic"><a href="weeks/week-12.html">Custom Hooks, Reusability & Error Handling</a></td>
<!-- Week 13 -->
<td class="td-topic"><a href="weeks/week-13.html">โครงงานเว็บแอปพลิเคชันทางธุรกิจ: วิเคราะห์ ออกแบบ และพัฒนา (ทีม)</a></td>
<!-- Week 14 -->
<td class="td-topic"><a href="weeks/week-14.html">นำเสนอโครงงานเว็บและจัดทำเอกสารประกอบ</a></td>
<!-- Week 15 -->
<td class="td-topic"><a href="weeks/week-15.html">Deploy บน Cloudflare Workers, Testing & สรุปรายวิชา</a></td>
```

- [ ] **Step 2: Verify — เปิด index.html ในเบราว์เซอร์ ตรวจว่าตาราง 15 สัปดาห์แสดงหัวข้อใหม่ครบ**

- [ ] **Step 3: Commit**
```bash
git add index.html
git commit -m "feat: update week titles to modern stack curriculum"
```

---

## Task 1: week-01.html — แนะนำรายวิชา & Modern Web Stack

**Files:** Modify: `weeks/week-01.html`

**Theory topics:**
1. ภาพรวมการพัฒนาเว็บแอปพลิเคชัน (ความแตกต่างเดิม vs modern)
2. Edge Computing & Cloudflare Workers คืออะไร
3. เทคโนโลยีที่ใช้ในรายวิชา (ตาราง stack ทั้งหมด)
4. สถาปัตยกรรม Browser → Hono API → Supabase
5. เครื่องมือที่ต้องติดตั้ง (Node.js, VS Code, Wrangler, บัญชี Supabase/Cloudflare)

**Code examples (3 snippets):**

```bash
# snippet 1: ตรวจสอบ Node.js และ npm
node --version   # v20.x.x
npm --version    # 10.x.x
npx wrangler --version   # wrangler x.x.x
```

```bash
# snippet 2: สร้าง Vite project ครั้งแรก (preview เท่านั้น สัปดาห์ 3 จะทำจริง)
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
# เปิดเบราว์เซอร์ที่ http://localhost:5173
```

```bash
# snippet 3: สร้าง Hono Worker ครั้งแรก (preview เท่านั้น สัปดาห์ 5 จะทำจริง)
npm create hono@latest my-api -- --template cloudflare-workers
cd my-api
npm install
npx wrangler dev
# เปิดเบราว์เซอร์ที่ http://localhost:8787
```

**No Lab (สัปดาห์นี้ไม่มี Lab)**

**callout note:** นักศึกษาควรติดตั้ง Node.js v20+, VS Code, และสมัครบัญชี Supabase + Cloudflare ก่อนสัปดาห์ที่ 2

**Week nav:** prev=disabled, next=week-02 "ทบทวน HTML/CSS/JS + ES2022"

- [ ] **Step 1: เขียน week-01.html ใหม่ตาม spec ด้านบน** (ใช้ HTML Template จาก Global Constraints, CLO: CLO1)
- [ ] **Step 2: เปิดในเบราว์เซอร์ ตรวจว่า breadcrumb, theory, code blocks, week-nav แสดงถูกต้อง**
- [ ] **Step 3: Commit**
```bash
git add weeks/week-01.html
git commit -m "feat: rewrite week-01 - modern web stack intro"
```

---

## Task 2: week-02.html — ทบทวน HTML/CSS/JS + ES2022

**Files:** Modify: `weeks/week-02.html`

**Theory topics:**
1. ทบทวน HTML Semantic Elements (header, main, section, article, footer)
2. ทบทวน CSS Flexbox & Grid เบื้องต้น
3. ES2022 ที่ใช้บ่อยใน stack นี้: Arrow Functions, Destructuring, Spread/Rest
4. `async`/`await` และ `fetch` API
5. ES Modules: `import` / `export`

**Code examples (3 snippets):**

```javascript
// snippet 1: ES2022 Modern JavaScript
// Arrow functions
const add = (a, b) => a + b;

// Destructuring
const { name, price } = service;
const [first, ...rest] = services;

// Spread operator
const updated = { ...service, price: 500 };

// Optional chaining & nullish coalescing
const phone = user?.profile?.phone ?? 'ไม่ระบุ';

// Template literals
const msg = `บริการ ${name} ราคา ${price} บาท`;
```

```javascript
// snippet 2: Async/Await + Fetch API
async function fetchServices() {
  try {
    const response = await fetch('/api/services');
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('โหลดข้อมูลล้มเหลว:', error);
    return [];
  }
}
```

```javascript
// snippet 3: ES Modules
// services.js — export
export const BASE_URL = 'http://localhost:8787';

export async function getServices() {
  const res = await fetch(`${BASE_URL}/api/services`);
  return res.json();
}

// main.js — import
import { getServices, BASE_URL } from './services.js';

const services = await getServices();
console.log(services);
```

**Lab 1 — BookEasy: หน้า Landing Page (Static)**

Lab นี้: สร้างหน้า Landing Page ของ BookEasy ด้วย HTML/CSS บริสุทธิ์ ยังไม่มี JavaScript หรือ React

Task 1: สร้าง project folder และไฟล์ HTML
- สร้าง folder `bookeasy-static/`
- สร้าง `bookeasy-static/index.html` — มี header, hero section, services section (3 card dummy), footer
- สร้าง `bookeasy-static/style.css` — CSS สำหรับ layout (Flexbox/Grid)

Task 2: เพิ่ม JavaScript เบื้องต้น
- สร้าง `bookeasy-static/main.js`
- เพิ่มฟังก์ชัน async/await แสดง mock services บนหน้าจอ (ใช้ hardcode array แทน fetch)
- ใช้ `document.querySelector` / `innerHTML` เพิ่ม card ลงใน DOM

Task 3: ทดสอบ ES Modules
- เพิ่ม `type="module"` ใน script tag
- แยกไฟล์ `services.js` สำหรับ mock data
- import เข้า main.js และแสดงผล

**callout note:** ยังไม่ใช้ Vite ในสัปดาห์นี้ ใช้ `python3 -m http.server 8080` เพื่อรัน ES Modules

**Week nav:** prev=week-01, next=week-03 "Vite + React + Component"

- [ ] **Step 1: เขียน week-02.html ใหม่ตาม spec** (CLO: CLO1, CLO4)
- [ ] **Step 2: ตรวจ code blocks ทั้ง 3 snippets แสดง syntax highlight ถูกต้อง**
- [ ] **Step 3: Commit**
```bash
git add weeks/week-02.html
git commit -m "feat: rewrite week-02 - HTML/CSS/JS review + ES2022"
```

---

## Task 3: week-03.html — Vite + React: ตั้งค่าโปรเจกต์ & Component

**Files:** Modify: `weeks/week-03.html`

**Theory topics:**
1. Vite คืออะไร — HMR, build tool, เร็วกว่า Create React App อย่างไร
2. JSX คืออะไร — JavaScript + XML ทำงานอย่างไร
3. React Component — Function Component, Props
4. โครงสร้าง project Vite + React (src/, public/, vite.config.js)
5. npm scripts: `dev`, `build`, `preview`

**Code examples (3 snippets):**

```bash
# snippet 1: ตั้งค่าโปรเจกต์ BookEasy
npm create vite@latest bookeasy -- --template react
cd bookeasy
npm install
npm run dev
# เปิด http://localhost:5173
```

```jsx
// snippet 2: React Component เบื้องต้น — ServiceCard.jsx
function ServiceCard({ name, description, price, duration }) {
  return (
    <div className="service-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="service-info">
        <span>ราคา: {price} บาท</span>
        <span>เวลา: {duration} นาที</span>
      </div>
      <button>จองบริการนี้</button>
    </div>
  );
}

export default ServiceCard;
```

```jsx
// snippet 3: ใช้ Component ใน App.jsx
import ServiceCard from './components/ServiceCard';

const MOCK_SERVICES = [
  { id: 1, name: 'ตัดผมชาย', description: 'ตัดผมสไตล์เกาหลี/ยุโรป', price: 150, duration: 45 },
  { id: 2, name: 'นวดแผนไทย', description: 'นวดผ่อนคลาย 60 นาที', price: 400, duration: 60 },
  { id: 3, name: 'สปาหน้า', description: 'บำรุงผิวหน้า ลดรอยแดง', price: 600, duration: 90 },
];

function App() {
  return (
    <main>
      <h1>BookEasy — จองบริการออนไลน์</h1>
      <div className="services-grid">
        {MOCK_SERVICES.map(service => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </main>
  );
}

export default App;
```

**Lab 2 — BookEasy: Scaffold โปรเจกต์ React**

callout note ต่อยอดจาก Lab 1: "เราสร้าง HTML/CSS static ไปแล้ว ตอนนี้จะ rebuild ด้วย React + Vite"

Task 1: สร้าง Vite + React project
- รัน `npm create vite@latest bookeasy -- --template react`
- ลบไฟล์ที่ Vite สร้างให้ (App.css, assets/react.svg) ที่ไม่ต้องการ
- ตรวจ `npm run dev` เปิดได้ที่ localhost:5173

Task 2: สร้าง Component โครงสร้าง
- สร้าง `src/components/Header.jsx` — Logo + nav links
- สร้าง `src/components/Footer.jsx` — copyright
- สร้าง `src/components/ServiceCard.jsx` — รับ props: name, description, price, duration
- แก้ `src/App.jsx` ใช้ Header, Footer, ServiceCard พร้อม MOCK_SERVICES array

Task 3: ตรวจ render
- หน้าแสดง Header, 3 ServiceCard จาก mock data, Footer
- ถ่ายภาพหน้าจอหรือ `npm run build` แล้วตรวจไม่มี error

**Week nav:** prev=week-02, next=week-04 "React State + TanStack Router"

- [ ] **Step 1: เขียน week-03.html ใหม่ตาม spec** (CLO: CLO3)
- [ ] **Step 2: ตรวจ JSX code blocks แสดง highlight ถูกต้อง (ใช้ language-jsx)**
- [ ] **Step 3: Commit**
```bash
git add weeks/week-03.html
git commit -m "feat: rewrite week-03 - Vite + React components"
```

---

## Task 4: week-04.html — React State + Form + TanStack Router

**Files:** Modify: `weeks/week-04.html`

**Theory topics:**
1. `useState` — state คืออะไร ทำไมต้อง re-render
2. `useEffect` — side effects, dependency array
3. Controlled Form ใน React (onChange, onSubmit, preventDefault)
4. TanStack Router — ทำไมใช้แทน React Router, type-safe routes
5. `<Link>`, `useParams`, `createRoute`

**Code examples (3 snippets):**

```jsx
// snippet 1: useState + useEffect
import { useState, useEffect } from 'react';

function ServiceList() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // จำลองการโหลดข้อมูล
    setTimeout(() => {
      setServices([
        { id: 1, name: 'ตัดผมชาย', price: 150 },
        { id: 2, name: 'นวดแผนไทย', price: 400 },
      ]);
      setLoading(false);
    }, 1000);
  }, []); // [] = รันแค่ครั้งเดียวตอน mount

  if (loading) return <p>กำลังโหลด...</p>;
  return (
    <ul>
      {services.map(s => <li key={s.id}>{s.name} — {s.price} บาท</li>)}
    </ul>
  );
}
```

```javascript
// snippet 2: ตั้งค่า TanStack Router
// src/router.js
import { createRouter, createRoute, createRootRoute } from '@tanstack/react-router';

const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: ServicesPage,
});

const serviceDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services/$serviceId',
  component: ServiceDetailPage,
});

export const router = createRouter({
  routeTree: rootRoute.addChildren([indexRoute, servicesRoute, serviceDetailRoute]),
});
```

```jsx
// snippet 3: Controlled Form — Booking Form
import { useState } from 'react';

function BookingForm({ serviceId }) {
  const [form, setForm] = useState({ date: '', time: '', notes: '' });

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log('ส่งข้อมูลจอง:', { serviceId, ...form });
    // จะเชื่อม API จริงใน Week 7
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" name="date" value={form.date} onChange={handleChange} required />
      <select name="time" value={form.time} onChange={handleChange} required>
        <option value="">-- เลือกเวลา --</option>
        <option value="09:00">09:00</option>
        <option value="10:00">10:00</option>
        <option value="11:00">11:00</option>
      </select>
      <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="หมายเหตุ" />
      <button type="submit">ยืนยันการจอง</button>
    </form>
  );
}
```

**Lab 3 — BookEasy: Routing & Booking Form**

callout ต่อยอดจาก Lab 2: "ต่อยอดจาก Lab 2 — เพิ่ม routing และ booking form เข้าไปในโปรเจกต์ bookeasy"

Task 1: ติดตั้งและตั้งค่า TanStack Router
- `npm install @tanstack/react-router`
- สร้าง `src/router.js` พร้อม routes: `/`, `/services`, `/services/$serviceId`, `/booking`
- แก้ `src/main.jsx` ใส่ `<RouterProvider router={router} />`

Task 2: สร้าง Pages
- สร้าง `src/pages/HomePage.jsx` — hero + ปุ่ม "ดูบริการทั้งหมด" (Link ไป /services)
- สร้าง `src/pages/ServicesPage.jsx` — แสดง ServiceCard จาก mock data พร้อม Link ไป /services/:id
- สร้าง `src/pages/ServiceDetailPage.jsx` — ใช้ `useParams` ดึง serviceId แสดงรายละเอียด + BookingForm

Task 3: ทดสอบ navigation
- คลิก Link ต่างๆ ใน dev server ตรวจว่า URL เปลี่ยนและ component render ถูก
- กดปุ่ม Back ของเบราว์เซอร์ต้องกลับหน้าก่อนหน้าได้

**Week nav:** prev=week-03, next=week-05 "Hono API บน Cloudflare Workers"

- [ ] **Step 1: เขียน week-04.html** (CLO: CLO3)
- [ ] **Step 2: ตรวจ code blocks**
- [ ] **Step 3: Commit**
```bash
git add weeks/week-04.html
git commit -m "feat: rewrite week-04 - React state + TanStack Router"
```

---

## Task 5: week-05.html — Hono API บน Cloudflare Workers

**Files:** Modify: `weeks/week-05.html`

**Theory topics:**
1. Cloudflare Workers คืออะไร — Edge runtime, V8 isolates, ทำงานที่ edge node ใกล้ผู้ใช้
2. Hono framework — ทำไมเลือก Hono (เบา, fast, Web Standards API)
3. Routing ใน Hono: `app.get()`, `app.post()`, `app.put()`, `app.delete()`
4. Middleware: CORS, Logger, bearerAuth
5. Wrangler CLI: `wrangler dev`, `wrangler deploy`

**Code examples (3 snippets):**

```bash
# snippet 1: สร้าง Hono Worker
npm create hono@latest bookeasy-api -- --template cloudflare-workers
cd bookeasy-api
npm install
npx wrangler dev
# เปิด http://localhost:8787
```

```javascript
// snippet 2: Hono routes พื้นฐาน — src/index.js
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';

const app = new Hono();

// Middleware
app.use('*', logger());
app.use('/api/*', cors({ origin: 'http://localhost:5173' }));

// Mock data
const SERVICES = [
  { id: 1, name: 'ตัดผมชาย', description: 'ตัดผมสไตล์เกาหลี', price: 150, duration_min: 45 },
  { id: 2, name: 'นวดแผนไทย', description: 'นวดผ่อนคลาย', price: 400, duration_min: 60 },
];

// Routes
app.get('/api/services', (c) => {
  return c.json({ success: true, data: SERVICES });
});

app.get('/api/services/:id', (c) => {
  const id = Number(c.req.param('id'));
  const service = SERVICES.find(s => s.id === id);
  if (!service) return c.json({ error: 'ไม่พบบริการ' }, 404);
  return c.json({ success: true, data: service });
});

app.post('/api/bookings', async (c) => {
  const body = await c.req.json();
  const booking = { id: Date.now(), ...body, status: 'pending' };
  return c.json({ success: true, data: booking }, 201);
});

export default app;
```

```bash
# snippet 3: ทดสอบ API ด้วย curl
# GET ทุก services
curl http://localhost:8787/api/services

# GET service เดี่ยว
curl http://localhost:8787/api/services/1

# POST จอง
curl -X POST http://localhost:8787/api/bookings \
  -H "Content-Type: application/json" \
  -d '{"service_id":1,"booking_date":"2026-07-10","booking_time":"09:00"}'
```

**Lab 4 — BookEasy: สร้าง Hono API**

callout ต่อยอดจาก Lab 3: "ต่อยอดจาก Lab 3 — สร้าง backend API ที่ frontend จะเรียกใช้ใน Week 7"

Task 1: ตั้งค่า bookeasy-api project
- สร้าง Hono project ใน folder แยก `bookeasy-api/`
- ติดตั้ง hono, wrangler
- ตรวจ `npx wrangler dev` ได้ที่ localhost:8787

Task 2: สร้าง routes ครบ
- `GET /api/services` — คืน array ของ services (mock data)
- `GET /api/services/:id` — คืน service เดียว หรือ 404
- `POST /api/bookings` — รับ body JSON, คืน booking object
- เพิ่ม CORS middleware ให้รับ request จาก localhost:5173

Task 3: ทดสอบด้วย curl
- รัน `npx wrangler dev` แล้วทดสอบทุก route ด้วย curl ตามตัวอย่างในโค้ด
- บันทึก response JSON ของแต่ละ route ส่งงาน

**Week nav:** prev=week-04, next=week-06 "Supabase: ออกแบบ DB"

- [ ] **Step 1: เขียน week-05.html** (CLO: CLO3)
- [ ] **Step 2: ตรวจ code blocks**
- [ ] **Step 3: Commit**
```bash
git add weeks/week-05.html
git commit -m "feat: rewrite week-05 - Hono API on Cloudflare Workers"
```

---

## Task 6: week-06.html — Supabase: ออกแบบ DB + SQL เบื้องต้น

**Files:** Modify: `weeks/week-06.html`

**Theory topics:**
1. Supabase คืออะไร — PostgreSQL + Auth + Storage + Realtime ใน platform เดียว
2. การสร้างโปรเจกต์ใน Supabase Dashboard
3. PostgreSQL พื้นฐาน — ความแตกต่างจาก MySQL
4. ออกแบบตาราง BookEasy: services, bookings, profiles
5. Row Level Security (RLS) — แนวคิดพื้นฐาน

**Code examples (3 snippets):**

```sql
-- snippet 1: สร้างตาราง BookEasy ใน Supabase SQL Editor

-- ตารางบริการ
CREATE TABLE services (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name       TEXT NOT NULL,
  description TEXT,
  price      NUMERIC(10,2) NOT NULL,
  duration_min INT NOT NULL,
  image_url  TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ตารางการจอง
CREATE TABLE bookings (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  service_id   UUID REFERENCES services(id) ON DELETE CASCADE,
  booking_date DATE NOT NULL,
  booking_time TIME NOT NULL,
  status       TEXT DEFAULT 'pending' CHECK (status IN ('pending','confirmed','cancelled')),
  notes        TEXT,
  created_at   TIMESTAMPTZ DEFAULT NOW()
);

-- ตารางโปรไฟล์ผู้ใช้
CREATE TABLE profiles (
  id         UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name  TEXT,
  phone      TEXT,
  avatar_url TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

```sql
-- snippet 2: เพิ่มข้อมูลทดสอบ
INSERT INTO services (name, description, price, duration_min) VALUES
  ('ตัดผมชาย', 'ตัดผมสไตล์เกาหลี/ยุโรป พร้อมล้างและเป่า', 150, 45),
  ('ตัดผมหญิง', 'ตัดและจัดทรงผมสำหรับผู้หญิง', 250, 60),
  ('นวดแผนไทย', 'นวดผ่อนคลายกล้ามเนื้อด้วยภูมิปัญญาไทย', 400, 60),
  ('นวดหน้า', 'บำรุงผิวหน้า ลดรอยแดง เพิ่มความชุ่มชื้น', 350, 45),
  ('สปาหน้า', 'โปรแกรมดูแลผิวหน้าครบวงจร', 600, 90);

-- ดูข้อมูล
SELECT id, name, price, duration_min FROM services ORDER BY price;
```

```javascript
// snippet 3: เชื่อมต่อ Supabase ใน JavaScript
// ติดตั้ง: npm install @supabase/supabase-js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xxxx.supabase.co';      // จาก Supabase Dashboard
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI...'; // anon key

export const supabase = createClient(supabaseUrl, supabaseKey);

// ทดสอบดึงข้อมูล
const { data, error } = await supabase
  .from('services')
  .select('*')
  .order('price', { ascending: true });

console.log(data, error);
```

**Lab 5 — BookEasy: สร้างฐานข้อมูลใน Supabase**

callout ต่อยอดจาก Lab 4: "ต่อยอดจาก Lab 4 — สร้าง database จริงใน Supabase เพื่อใช้แทน mock data ใน Week 7"

Task 1: สร้างโปรเจกต์ Supabase
- ไปที่ supabase.com → New Project → ตั้งชื่อ "bookeasy"
- บันทึก Project URL และ anon key จาก Settings → API

Task 2: สร้างตาราง
- ไปที่ SQL Editor ใน Supabase Dashboard
- รัน SQL จาก snippet 1 เพื่อสร้าง tables ทั้ง 3 (services, bookings, profiles)
- ตรวจ Table Editor แสดง 3 ตารางครบ

Task 3: เพิ่มข้อมูลทดสอบ
- รัน SQL จาก snippet 2 เพื่อ INSERT บริการ 5 รายการ
- รัน `SELECT * FROM services;` ตรวจว่าแสดง 5 แถว

Task 4: ทดสอบ Supabase Client ใน project
- ติดตั้ง `npm install @supabase/supabase-js` ใน bookeasy-api
- สร้าง `src/lib/supabase.js` ตาม snippet 3 (ใส่ URL และ key ของตัวเอง)
- รัน node script ทดสอบดึงข้อมูลจาก services table

**Week nav:** prev=week-05, next=week-07 "CRUD ครบวงจร"

- [ ] **Step 1: เขียน week-06.html** (CLO: CLO2, CLO3)
- [ ] **Step 2: ตรวจ SQL + JavaScript code blocks**
- [ ] **Step 3: Commit**
```bash
git add weeks/week-06.html
git commit -m "feat: rewrite week-06 - Supabase DB design + SQL"
```

---

## Task 7: week-07.html — CRUD ครบวงจร — Hono + Supabase

**Files:** Modify: `weeks/week-07.html`

**Theory topics:**
1. ทบทวน REST API verbs กับ CRUD operations
2. Supabase JS Client: `.select()`, `.insert()`, `.update()`, `.delete()`
3. เชื่อม Hono routes กับ Supabase queries
4. Environment Variables ใน Wrangler (wrangler.toml)
5. Error handling ใน API layer

**Code examples (3 snippets):**

```javascript
// snippet 1: Supabase CRUD operations
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// READ - ดึงทุก services
const { data: services } = await supabase
  .from('services').select('*').order('price');

// READ - ดึง service เดียว
const { data: service } = await supabase
  .from('services').select('*').eq('id', id).single();

// CREATE - เพิ่ม booking
const { data: booking } = await supabase
  .from('bookings')
  .insert({ user_id, service_id, booking_date, booking_time, notes })
  .select().single();

// UPDATE - เปลี่ยน status
const { data } = await supabase
  .from('bookings').update({ status: 'confirmed' }).eq('id', bookingId);

// DELETE - ลบ service
const { error } = await supabase
  .from('services').delete().eq('id', serviceId);
```

```javascript
// snippet 2: Hono routes เชื่อม Supabase — src/index.js
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { createClient } from '@supabase/supabase-js';

const app = new Hono();
app.use('/api/*', cors({ origin: '*' }));

// GET /api/services
app.get('/api/services', async (c) => {
  const supabase = createClient(c.env.SUPABASE_URL, c.env.SUPABASE_KEY);
  const { data, error } = await supabase.from('services').select('*');
  if (error) return c.json({ error: error.message }, 500);
  return c.json({ success: true, data });
});

// POST /api/bookings
app.post('/api/bookings', async (c) => {
  const supabase = createClient(c.env.SUPABASE_URL, c.env.SUPABASE_KEY);
  const body = await c.req.json();
  const { data, error } = await supabase
    .from('bookings').insert(body).select().single();
  if (error) return c.json({ error: error.message }, 400);
  return c.json({ success: true, data }, 201);
});

// DELETE /api/services/:id
app.delete('/api/services/:id', async (c) => {
  const supabase = createClient(c.env.SUPABASE_URL, c.env.SUPABASE_KEY);
  const { error } = await supabase
    .from('services').delete().eq('id', c.req.param('id'));
  if (error) return c.json({ error: error.message }, 400);
  return c.json({ success: true });
});

export default app;
```

```toml
# snippet 3: wrangler.toml — environment variables
name = "bookeasy-api"
main = "src/index.js"
compatibility_date = "2024-01-01"

[vars]
SUPABASE_URL = "https://xxxx.supabase.co"

# สำหรับ secret (key ที่ไม่ควรเขียนใน file):
# npx wrangler secret put SUPABASE_KEY
```

**Lab 6 — BookEasy: เชื่อม Hono กับ Supabase**

callout ต่อยอดจาก Lab 5: "ต่อยอดจาก Lab 5 — นำ Supabase ที่ตั้งค่าไว้มาเชื่อมกับ Hono API แทน mock data"

Task 1: เพิ่ม Supabase ใน bookeasy-api
- ติดตั้ง `@supabase/supabase-js` ใน bookeasy-api
- เพิ่ม SUPABASE_URL ใน wrangler.toml
- รัน `npx wrangler secret put SUPABASE_KEY` ใส่ anon key

Task 2: แทนที่ mock data ด้วย Supabase queries
- แก้ `GET /api/services` ดึงจาก Supabase จริง
- แก้ `GET /api/services/:id` ดึง service เดียวจาก Supabase
- เพิ่ม `POST /api/bookings` บันทึกการจองจริงลง DB

Task 3: ทดสอบ CRUD ครบ
- curl GET services → ต้องได้ data 5 รายการจาก Supabase
- curl POST booking → ตรวจใน Supabase Table Editor ว่ามี row ใหม่
- ทดสอบ error case: ส่ง id ที่ไม่มี → ต้องได้ 404

**Week nav:** prev=week-06, next=week-08 "TanStack Query"

- [ ] **Step 1: เขียน week-07.html** (CLO: CLO3)
- [ ] **Step 2: ตรวจ code blocks**
- [ ] **Step 3: Commit**
```bash
git add weeks/week-07.html
git commit -m "feat: rewrite week-07 - CRUD with Hono + Supabase"
```

---

## Task 8: week-08.html — TanStack Query

**Files:** Modify: `weeks/week-08.html`

**Theory topics:**
1. Server State vs Client State — ความแตกต่างและทำไมต้องแยก
2. TanStack Query คืออะไร — caching, background refetch, staleTime
3. `QueryClient` และ `QueryClientProvider`
4. `useQuery` — queryKey, queryFn, data/isLoading/error
5. `useMutation` — mutationFn, onSuccess, invalidateQueries

**Code examples (3 snippets):**

```jsx
// snippet 1: ตั้งค่า QueryClient ใน main.jsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // cache 5 นาที
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
```

```jsx
// snippet 2: useQuery ดึง services
import { useQuery } from '@tanstack/react-query';

async function fetchServices() {
  const res = await fetch('http://localhost:8787/api/services');
  if (!res.ok) throw new Error('โหลดข้อมูลล้มเหลว');
  const json = await res.json();
  return json.data;
}

function ServicesPage() {
  const { data: services, isLoading, error } = useQuery({
    queryKey: ['services'],
    queryFn: fetchServices,
  });

  if (isLoading) return <p>กำลังโหลด...</p>;
  if (error) return <p>เกิดข้อผิดพลาด: {error.message}</p>;

  return (
    <div>
      {services.map(s => <ServiceCard key={s.id} {...s} />)}
    </div>
  );
}
```

```jsx
// snippet 3: useMutation สร้าง booking
import { useMutation, useQueryClient } from '@tanstack/react-query';

function BookingForm({ serviceId }) {
  const queryClient = useQueryClient();
  const [form, setForm] = useState({ date: '', time: '' });

  const mutation = useMutation({
    mutationFn: async (booking) => {
      const res = await fetch('http://localhost:8787/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(booking),
      });
      if (!res.ok) throw new Error('จองไม่สำเร็จ');
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
      alert('จองสำเร็จ!');
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    mutation.mutate({ service_id: serviceId, booking_date: form.date, booking_time: form.time });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" value={form.date} onChange={e => setForm(p=>({...p,date:e.target.value}))} />
      <button disabled={mutation.isPending}>
        {mutation.isPending ? 'กำลังจอง...' : 'ยืนยันการจอง'}
      </button>
      {mutation.isError && <p className="error">{mutation.error.message}</p>}
    </form>
  );
}
```

**Lab 7 — BookEasy: แทนที่ fetch ด้วย TanStack Query**

callout ต่อยอดจาก Lab 6: "ต่อยอดจาก Lab 6 — แทนที่ `fetch` แบบ manual ด้วย TanStack Query เพื่อ caching อัตโนมัติ"

Task 1: ติดตั้งและตั้งค่า TanStack Query
- `npm install @tanstack/react-query` ใน bookeasy
- ห่อ App ด้วย `QueryClientProvider` ใน main.jsx

Task 2: แปลง ServicesPage
- เปลี่ยน `useEffect + fetch` เป็น `useQuery({ queryKey: ['services'], queryFn: fetchServices })`
- แสดง loading spinner และ error message

Task 3: แปลง BookingForm
- เปลี่ยน handleSubmit เป็น `useMutation` พร้อม `onSuccess: invalidateQueries`
- ปุ่ม disabled ระหว่าง `isPending`

**Week nav:** prev=week-07, next=week-09 "Supabase Auth"

- [ ] **Step 1: เขียน week-08.html** (CLO: CLO3)
- [ ] **Step 2: ตรวจ code blocks**
- [ ] **Step 3: Commit**
```bash
git add weeks/week-08.html
git commit -m "feat: rewrite week-08 - TanStack Query"
```

---

## Task 9: week-09.html — Supabase Auth

**Files:** Modify: `weeks/week-09.html`

**Theory topics:**
1. Authentication vs Authorization
2. Supabase Auth — email/password, magic link, OAuth
3. JWT tokens และ session management
4. `supabase.auth.signUp()`, `signInWithPassword()`, `signOut()`, `getSession()`
5. Protected Route pattern ใน TanStack Router
6. Row Level Security (RLS) policies

**Code examples (3 snippets):**

```javascript
// snippet 1: Supabase Auth operations
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// สมัครสมาชิก
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'password123',
  options: { data: { full_name: 'สมชาย ใจดี' } },
});

// เข้าสู่ระบบ
const { data: { user, session }, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password123',
});

// ออกจากระบบ
await supabase.auth.signOut();

// ดู session ปัจจุบัน
const { data: { session } } = await supabase.auth.getSession();
console.log(session?.user?.email);

// ฟัง auth state changes
supabase.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_IN') console.log('เข้าสู่ระบบแล้ว:', session.user.email);
  if (event === 'SIGNED_OUT') console.log('ออกจากระบบแล้ว');
});
```

```jsx
// snippet 2: Auth Context + useAuth hook
import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_, session) => setUser(session?.user ?? null)
    );
    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
```

```jsx
// snippet 3: Protected Route + Login Form
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from '@tanstack/react-router';

// Protected Route wrapper
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) return <p>กำลังตรวจสอบ...</p>;
  if (!user) {
    navigate({ to: '/login' });
    return null;
  }
  return children;
}

// Login Form
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) { setError(error.message); return; }
    navigate({ to: '/' });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="อีเมล" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="รหัสผ่าน" required />
      {error && <p className="error">{error}</p>}
      <button type="submit">เข้าสู่ระบบ</button>
    </form>
  );
}
```

**Lab 8 — BookEasy: ระบบ Login/Register**

callout ต่อยอดจาก Lab 7: "ต่อยอดจาก Lab 7 — เพิ่ม Authentication เพื่อให้ผู้ใช้ต้อง Login ก่อนจอง"

Task 1: สร้าง AuthContext และ Supabase client ฝั่ง frontend
- สร้าง `src/lib/supabase.js` ใน bookeasy (frontend) ด้วย public Supabase URL + anon key
- สร้าง `src/contexts/AuthContext.jsx` ตาม snippet 2
- ห่อ App ด้วย `<AuthProvider>`

Task 2: สร้างหน้า Login และ Register
- สร้าง `src/pages/LoginPage.jsx` — form email + password + ปุ่ม Login
- สร้าง `src/pages/RegisterPage.jsx` — form email + password + full_name
- เพิ่ม routes `/login` และ `/register` ใน router.js

Task 3: ปกป้อง route /booking
- ห่อ BookingForm ด้วย ProtectedRoute — ถ้าไม่ได้ Login ให้ redirect ไป /login
- ใน Header เพิ่มปุ่ม "เข้าสู่ระบบ" หรือ "ออกจากระบบ + ชื่อผู้ใช้" ขึ้นอยู่กับ auth state

Task 4: ตรวจ RLS ใน Supabase
- เปิด RLS บน bookings table ใน Supabase Dashboard
- เพิ่ม policy: `SELECT` ให้เห็นเฉพาะ bookings ของตัวเอง (`auth.uid() = user_id`)

**Week nav:** prev=week-08, next=week-10 "Supabase Storage"

- [ ] **Step 1: เขียน week-09.html** (CLO: CLO3, CLO7)
- [ ] **Step 2: ตรวจ code blocks**
- [ ] **Step 3: Commit**
```bash
git add weeks/week-09.html
git commit -m "feat: rewrite week-09 - Supabase Auth"
```

---

## Task 10: week-10.html — Supabase Storage

**Files:** Modify: `weeks/week-10.html`

**Theory topics:**
1. Supabase Storage — buckets, objects, policies
2. Upload file จาก browser
3. `supabase.storage.from(bucket).upload(path, file)`
4. `getPublicUrl()` — URL สำหรับแสดงรูป
5. Storage RLS policies

**Code examples (3 snippets):**

```javascript
// snippet 1: สร้าง bucket และ upload ไฟล์
import { supabase } from '../lib/supabase';

// upload รูปภาพบริการ
async function uploadServiceImage(file, serviceId) {
  const ext = file.name.split('.').pop();
  const path = `services/${serviceId}.${ext}`;

  const { data, error } = await supabase.storage
    .from('service-images')  // ชื่อ bucket
    .upload(path, file, {
      upsert: true,          // ทับไฟล์เดิมถ้ามี
      contentType: file.type,
    });

  if (error) throw error;
  return data.path;
}

// ดึง public URL
function getImageUrl(path) {
  const { data } = supabase.storage
    .from('service-images')
    .getPublicUrl(path);
  return data.publicUrl;
}
```

```jsx
// snippet 2: Image Upload Component
import { useState } from 'react';
import { uploadServiceImage, getImageUrl } from '../lib/storage';

function ImageUpload({ serviceId, onUploaded }) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(null);

  async function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    // แสดง preview ก่อน upload
    setPreview(URL.createObjectURL(file));
    setUploading(true);

    try {
      const path = await uploadServiceImage(file, serviceId);
      const url = getImageUrl(path);
      onUploaded(url);
    } catch (err) {
      alert('อัปโหลดล้มเหลว: ' + err.message);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      {preview && <img src={preview} alt="preview" style={{ width: 200 }} />}
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {uploading && <p>กำลังอัปโหลด...</p>}
    </div>
  );
}
```

```javascript
// snippet 3: อัปเดต image_url ใน services table หลัง upload
async function updateServiceImage(serviceId, imageUrl) {
  const { error } = await supabase
    .from('services')
    .update({ image_url: imageUrl })
    .eq('id', serviceId);

  if (error) throw error;
  return true;
}

// ใช้ใน Admin page
async function handleImageUploaded(url) {
  await updateServiceImage(currentServiceId, url);
  queryClient.invalidateQueries({ queryKey: ['services'] });
}
```

**Lab 9 — BookEasy: อัปโหลดรูปภาพบริการ**

callout ต่อยอดจาก Lab 8: "ต่อยอดจาก Lab 8 — เพิ่มฟีเจอร์ Admin อัปโหลดรูปภาพให้แต่ละบริการ"

Task 1: ตั้งค่า Storage bucket
- ใน Supabase Dashboard → Storage → New bucket ชื่อ "service-images" → Public
- เพิ่ม Storage Policy: ให้ authenticated users upload ได้

Task 2: สร้าง Admin page
- สร้าง `src/pages/AdminPage.jsx` — แสดงรายการ services ทุกรายการ
- เพิ่ม route `/admin` ที่ protected (เฉพาะ admin — ตรวจ email เป็น admin@bookeasy.com)

Task 3: เพิ่ม ImageUpload Component
- สร้าง `src/components/ImageUpload.jsx` ตาม snippet 2
- ใน AdminPage ทุก service มีปุ่มเปลี่ยนรูป → เปิด ImageUpload
- หลัง upload สำเร็จ อัปเดต image_url ใน DB และ invalidate query

Task 4: แสดงรูปใน ServiceCard
- แก้ `ServiceCard.jsx` เพิ่ม `<img src={image_url} />` (ถ้า image_url มีค่า)
- ถ้าไม่มีรูป แสดง placeholder สี

**Week nav:** prev=week-09, next=week-11 "Shadcn/ui + Tailwind"

- [ ] **Step 1: เขียน week-10.html** (CLO: CLO3)
- [ ] **Step 2: ตรวจ code blocks**
- [ ] **Step 3: Commit**
```bash
git add weeks/week-10.html
git commit -m "feat: rewrite week-10 - Supabase Storage"
```

---

## Task 11: week-11.html — Shadcn/ui + Tailwind CSS

**Files:** Modify: `weeks/week-11.html`

**Theory topics:**
1. Component Libraries คืออะไร — Shadcn vs MUI vs Chakra
2. Tailwind CSS — utility-first, class names
3. Shadcn/ui setup กับ Vite + React
4. Components ที่ใช้บ่อย: Button, Card, Input, Dialog, Badge, Table
5. Theming และ CSS Variables ใน Shadcn

**Code examples (3 snippets):**

```bash
# snippet 1: ติดตั้ง Tailwind + Shadcn ใน Vite project
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# ติดตั้ง Shadcn
npx shadcn@latest init
# เลือก: Style=Default, Color=Slate, CSS variables=yes

# เพิ่ม components ที่ต้องการ
npx shadcn@latest add button card input dialog badge
```

```jsx
// snippet 2: ใช้ Shadcn components ใน ServiceCard
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from '@tanstack/react-router';

function ServiceCard({ id, name, description, price, duration_min, image_url }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      {image_url && (
        <img src={image_url} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
      )}
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <Badge variant="secondary">{duration_min} นาที</Badge>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-xl font-bold text-primary">{price} ฿</span>
        <Button asChild>
          <Link to="/services/$serviceId" params={{ serviceId: id }}>จองเลย</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
```

```jsx
// snippet 3: Dialog สำหรับ Booking Form
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function BookingDialog({ service }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>จองบริการ: {service.name}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>จอง {service.name}</DialogTitle>
        </DialogHeader>
        <form className="space-y-4">
          <Input type="date" name="date" required />
          <select className="w-full border rounded px-3 py-2">
            <option>09:00</option>
            <option>10:00</option>
            <option>11:00</option>
          </select>
          <Button type="submit" className="w-full">ยืนยันการจอง</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
```

**Lab 10 — BookEasy: รีดีไซน์ UI ด้วย Shadcn**

callout ต่อยอดจาก Lab 9: "ต่อยอดจาก Lab 9 — รีดีไซน์ UI ทั้งหมดของ BookEasy ให้สวยงามด้วย Shadcn/ui + Tailwind"

Task 1: ติดตั้ง Tailwind + Shadcn
- ติดตั้ง tailwindcss, shadcn@latest ตาม snippet 1
- เพิ่ม components: button, card, input, dialog, badge, table, avatar

Task 2: รีดีไซน์ ServiceCard
- แทนที่ HTML div ธรรมดาด้วย `<Card>` ของ Shadcn
- ใช้ `<Badge>` แสดงระยะเวลา ใช้ `<Button>` สำหรับปุ่มจอง

Task 3: รีดีไซน์ BookingForm เป็น Dialog
- แทน form ธรรมดาด้วย `<Dialog>` + `<Input>` ของ Shadcn

Task 4: รีดีไซน์ Header และ Navigation
- ใช้ Tailwind classes สำหรับ responsive navbar
- ใช้ `<Avatar>` แสดงรูปโปรไฟล์ผู้ใช้ใน Header

**Week nav:** prev=week-10, next=week-12 "Custom Hooks + Reusability"

- [ ] **Step 1: เขียน week-11.html** (CLO: CLO4)
- [ ] **Step 2: ตรวจ bash + JSX code blocks**
- [ ] **Step 3: Commit**
```bash
git add weeks/week-11.html
git commit -m "feat: rewrite week-11 - Shadcn/ui + Tailwind CSS"
```

---

## Task 12: week-12.html — Custom Hooks + Reusability + Error Handling

**Files:** Modify: `weeks/week-12.html`

**Theory topics:**
1. Custom Hook คืออะไร — pattern, naming convention (`use` prefix)
2. DRY principle ในบริบท React
3. Error Boundary ใน React
4. Global error handling pattern
5. Loading states และ Skeleton UI

**Code examples (3 snippets):**

```javascript
// snippet 1: Custom Hook — useServices
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const API_URL = import.meta.env.VITE_API_URL;

export function useServices() {
  return useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/api/services`);
      if (!res.ok) throw new Error('โหลดบริการล้มเหลว');
      const json = await res.json();
      return json.data;
    },
  });
}

export function useService(id) {
  return useQuery({
    queryKey: ['services', id],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/api/services/${id}`);
      if (!res.ok) throw new Error('ไม่พบบริการ');
      const json = await res.json();
      return json.data;
    },
    enabled: Boolean(id),
  });
}
```

```javascript
// snippet 2: Custom Hook — useBooking
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '../contexts/AuthContext';

const API_URL = import.meta.env.VITE_API_URL;

export function useBookings() {
  const { user } = useAuth();
  return useQuery({
    queryKey: ['bookings', user?.id],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/api/bookings/my`, {
        headers: { Authorization: `Bearer ${user?.access_token}` },
      });
      if (!res.ok) throw new Error('โหลดประวัติล้มเหลว');
      return (await res.json()).data;
    },
    enabled: Boolean(user),
  });
}

export function useCreateBooking() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (booking) => {
      const res = await fetch(`${API_URL}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(booking),
      });
      if (!res.ok) throw new Error((await res.json()).error);
      return res.json();
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['bookings'] }),
  });
}
```

```jsx
// snippet 3: Skeleton Loading + Error Boundary
import { Skeleton } from '@/components/ui/skeleton';

// Skeleton สำหรับ ServiceCard
function ServiceCardSkeleton() {
  return (
    <div className="border rounded-lg p-4 space-y-3">
      <Skeleton className="h-48 w-full rounded" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-10 w-24" />
    </div>
  );
}

// ใช้ใน ServicesPage
function ServicesPage() {
  const { data: services, isLoading, error } = useServices();

  if (isLoading) {
    return (
      <div className="grid grid-cols-3 gap-4">
        {Array(3).fill(0).map((_, i) => <ServiceCardSkeleton key={i} />)}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-destructive">{error.message}</p>
        <Button variant="outline" onClick={() => window.location.reload()}>ลองใหม่</Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {services.map(s => <ServiceCard key={s.id} {...s} />)}
    </div>
  );
}
```

**Lab 11 — BookEasy: Refactor เป็น Custom Hooks**

callout ต่อยอดจาก Lab 10: "ต่อยอดจาก Lab 10 — Refactor โค้ด data fetching ทั้งหมดเป็น custom hooks เพื่อ reusability"

Task 1: สร้าง hooks ไฟล์
- สร้าง `src/hooks/useServices.js` ตาม snippet 1 (useServices, useService)
- สร้าง `src/hooks/useBookings.js` ตาม snippet 2 (useBookings, useCreateBooking)

Task 2: Refactor pages ให้ใช้ custom hooks
- แก้ ServicesPage ใช้ `useServices()` แทน useQuery โดยตรง
- แก้ ServiceDetailPage ใช้ `useService(id)` แทน useQuery โดยตรง
- แก้ BookingForm ใช้ `useCreateBooking()` แทน useMutation โดยตรง

Task 3: เพิ่ม Skeleton loading
- ติดตั้ง `npx shadcn@latest add skeleton`
- สร้าง ServiceCardSkeleton component
- แสดง skeleton ตอน isLoading แทน text "กำลังโหลด..."

**Week nav:** prev=week-11, next=week-13 "โครงงานทีม"

- [ ] **Step 1: เขียน week-12.html** (CLO: CLO3)
- [ ] **Step 2: ตรวจ code blocks**
- [ ] **Step 3: Commit**
```bash
git add weeks/week-12.html
git commit -m "feat: rewrite week-12 - custom hooks + reusability"
```

---

## Task 13: week-13.html — โครงงานทีม

**Files:** Modify: `weeks/week-13.html`

**Theory topics:**
1. การวิเคราะห์ความต้องการ (Requirements Analysis) — User Stories format
2. การออกแบบ Database สำหรับระบบจริง
3. การออกแบบ API (REST API design best practices)
4. โครงสร้าง project สำหรับทีม (monorepo หรือ 2 repos)
5. Git collaboration: branches, PR, code review

**Code examples (2 snippets):**

```markdown
# snippet 1: ตัวอย่าง User Stories สำหรับโครงงาน
## ระบบจัดการสต็อกสินค้า

**As a** ผู้ดูแลระบบ (Admin)
**I want to** เพิ่ม/แก้ไข/ลบสินค้าได้
**So that** ข้อมูลสินค้าในระบบถูกต้องและทันสมัย

**As a** พนักงาน
**I want to** บันทึกการรับ-จ่ายสินค้าได้
**So that** ติดตาม stock ได้แบบ real-time

**Acceptance Criteria:**
- [ ] Admin login ด้วย email/password
- [ ] เพิ่มสินค้าพร้อมรูปภาพและราคาได้
- [ ] ระบบแจ้งเตือนเมื่อ stock ต่ำกว่า 10 ชิ้น
- [ ] Export รายงานสต็อกเป็น CSV ได้
```

```bash
# snippet 2: โครงสร้าง project ทีม
my-project/
├── frontend/          # Vite + React
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── contexts/
│   │   └── lib/
│   └── package.json
├── backend/           # Hono + Cloudflare Workers
│   ├── src/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── lib/
│   └── package.json
└── README.md

# Git workflow ทีม
git checkout -b feature/add-product-crud
# ... ทำงาน ...
git push origin feature/add-product-crud
# เปิด Pull Request → ขอ code review จากเพื่อนในทีม
```

**No Lab (สัปดาห์โครงงาน — นักศึกษาเริ่มงานทีม)**

callout note: ทีมนำเสนอ idea + ERD + wireframe ให้อาจารย์ approve ก่อนเขียนโค้ด

**Week nav:** prev=week-12, next=week-14 "นำเสนอโครงงาน"

- [ ] **Step 1: เขียน week-13.html** (CLO: CLO1, CLO2, CLO6)
- [ ] **Step 2: ตรวจ code blocks (markdown + bash)**
- [ ] **Step 3: Commit**
```bash
git add weeks/week-13.html
git commit -m "feat: rewrite week-13 - team project intro"
```

---

## Task 14: week-14.html — นำเสนอโครงงานและจัดทำเอกสาร

**Files:** Modify: `weeks/week-14.html`

**Theory topics:**
1. การนำเสนอโปรเจกต์เทคนิค (demo-driven presentation)
2. การเขียน README.md ที่ดี
3. Technical documentation: API docs, DB schema diagram
4. Deployment checklist ก่อน demo
5. Retrospective: สิ่งที่ทำได้ดี / สิ่งที่จะพัฒนาต่อ

**Code examples (2 snippets):**

```markdown
# snippet 1: โครงสร้าง README.md ที่ดี
# ชื่อโปรเจกต์

> คำอธิบายสั้น 1-2 ประโยค

## Demo
[ลิงก์เว็บไซต์ที่ deploy แล้ว](https://my-project.workers.dev)

## ฟีเจอร์หลัก
- [ ] ฟีเจอร์ 1
- [ ] ฟีเจอร์ 2

## Tech Stack
- Frontend: Vite + React + TanStack Router/Query + Shadcn/ui
- Backend: Hono บน Cloudflare Workers
- Database: Supabase (PostgreSQL)

## วิธีรันในเครื่อง
\`\`\`bash
# Frontend
cd frontend && npm install && npm run dev

# Backend
cd backend && npm install && npx wrangler dev
\`\`\`

## สมาชิกทีม
| ชื่อ | รหัสนักศึกษา | หน้าที่ |
|------|-------------|--------|
| สมชาย | 6601001 | Frontend |
| สมหญิง | 6601002 | Backend |
```

```markdown
# snippet 2: API Documentation อย่างง่าย
## BookEasy API

Base URL: `https://bookeasy-api.workers.dev`

### GET /api/services
ดึงรายการบริการทั้งหมด

**Response 200:**
\`\`\`json
{
  "success": true,
  "data": [
    { "id": "uuid", "name": "ตัดผมชาย", "price": 150, "duration_min": 45 }
  ]
}
\`\`\`

### POST /api/bookings
สร้างการจองใหม่ (ต้องมี Authorization header)

**Request Body:**
\`\`\`json
{ "service_id": "uuid", "booking_date": "2026-07-10", "booking_time": "09:00" }
\`\`\`
```

**No Lab (สัปดาห์นำเสนอ)**

**Week nav:** prev=week-13, next=week-15 "Deploy + Testing + สรุป"

- [ ] **Step 1: เขียน week-14.html** (CLO: CLO5, CLO6)
- [ ] **Step 2: ตรวจ code blocks**
- [ ] **Step 3: Commit**
```bash
git add weeks/week-14.html
git commit -m "feat: rewrite week-14 - presentation + documentation"
```

---

## Task 15: week-15.html — Deploy บน Cloudflare Workers + Testing + สรุป

**Files:** Modify: `weeks/week-15.html`

**Theory topics:**
1. Cloudflare Workers deployment — `wrangler deploy`
2. Environment variables บน Production (Wrangler secrets)
3. Vite build + deploy frontend (Cloudflare Pages)
4. Testing เบื้องต้นใน JavaScript — Vitest
5. สรุปรายวิชาและ next steps (TypeScript, testing, CI/CD)

**Code examples (3 snippets):**

```bash
# snippet 1: Deploy ครบวงจร
# --- Deploy Backend (Hono API) ---
cd bookeasy-api
# ตั้งค่า secrets บน production
npx wrangler secret put SUPABASE_URL
npx wrangler secret put SUPABASE_KEY

# Deploy
npx wrangler deploy
# ✅ Deployed to: https://bookeasy-api.your-name.workers.dev

# --- Deploy Frontend (Vite → Cloudflare Pages) ---
cd bookeasy
# แก้ .env.production
echo "VITE_API_URL=https://bookeasy-api.your-name.workers.dev" > .env.production

npm run build
# dist/ folder พร้อม deploy

npx wrangler pages deploy dist --project-name bookeasy
# ✅ Deployed to: https://bookeasy.pages.dev
```

```javascript
// snippet 2: Vitest — unit test เบื้องต้น
// src/utils/formatPrice.js
export function formatPrice(price) {
  return new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',
  }).format(price);
}

// src/utils/formatPrice.test.js
import { describe, it, expect } from 'vitest';
import { formatPrice } from './formatPrice';

describe('formatPrice', () => {
  it('formats Thai baht correctly', () => {
    expect(formatPrice(150)).toBe('฿150.00');
  });

  it('handles zero', () => {
    expect(formatPrice(0)).toBe('฿0.00');
  });

  it('handles large numbers', () => {
    expect(formatPrice(1500)).toBe('฿1,500.00');
  });
});
```

```bash
# snippet 3: รัน tests และ build check
# ติดตั้ง Vitest
npm install -D vitest

# เพิ่มใน package.json
# "test": "vitest run"

# รัน tests
npm test
# ✅ 3 tests passed

# ตรวจ build ก่อน deploy จริง
npm run build
# ✅ dist/index.html  xx kB
# ✅ dist/assets/index-xxx.js  xx kB

# Preview build ในเครื่อง
npm run preview
# เปิด http://localhost:4173
```

**Lab สุดท้าย — BookEasy LIVE: Deploy จริง**

callout ต่อยอดจาก Lab 11: "ต่อยอดจากทุก Lab — นำ BookEasy ที่สร้างมาทั้งหมด Deploy ขึ้น Cloudflare จริง"

Task 1: เตรียม production environment
- แก้ CORS ใน Hono API ให้ยอมรับ URL จาก Cloudflare Pages จริง (ไม่ใช่ localhost)
- สร้าง `.env.production` ใน frontend ใส่ VITE_API_URL ชี้ไป Workers URL

Task 2: Deploy Backend
- รัน `npx wrangler secret put` สำหรับ SUPABASE_URL และ SUPABASE_KEY
- รัน `npx wrangler deploy`
- ทดสอบ curl ไปยัง URL จริงบน workers.dev

Task 3: Deploy Frontend
- รัน `npm run build` ตรวจไม่มี error
- รัน `npx wrangler pages deploy dist`
- เปิด URL จริงในเบราว์เซอร์ ทดสอบ Login, ดูบริการ, จองบริการ

Task 4: เขียน test 1 ชุด
- เพิ่ม Vitest ในโปรเจกต์
- เขียน test สำหรับ utility function อย่างน้อย 3 test cases
- รัน `npm test` ผ่านครบ

**Week nav:** prev=week-14, next=disabled (จบรายวิชา)

- [ ] **Step 1: เขียน week-15.html** (CLO: CLO3, CLO7)
- [ ] **Step 2: ตรวจ code blocks ทั้งหมด**
- [ ] **Step 3: Commit สุดท้าย**
```bash
git add weeks/week-15.html
git commit -m "feat: rewrite week-15 - deploy + testing + course wrap-up"
```

---

## Self-Review

**Spec coverage:**
- ✅ Stack: Vite, React, TanStack Router (W4), TanStack Query (W8), Hono (W5), Supabase DB (W6), Supabase Auth (W9), Supabase Storage (W10), Shadcn/ui (W11), Cloudflare Workers (W5, W15)
- ✅ JavaScript (ไม่มี TypeScript ในโค้ดตัวอย่างใดเลย)
- ✅ Running project BookEasy ครบทุก Lab W2–W15
- ✅ "ต่อยอดจาก Lab ก่อน" ทุก Lab ตั้งแต่ W3
- ✅ CLO ครบ CLO1–CLO7
- ✅ Portal files (index.html, css/, js/) ไม่มีใน task ไหนเลย ยกเว้น Task 0

**Placeholder scan:** ไม่มี TBD หรือ TODO

**Function name consistency:**
- `useServices` → ใช้ชื่อเดียวกันใน W8, W12
- `useBookings` / `useCreateBooking` → ใช้ชื่อเดียวกันใน W9, W12
- `supabase` (export from lib/supabase.js) → อ้างอิงชื่อเดียวกันตลอด W6–W12
- `fetchServices` / API_URL → ใช้ consistent ใน W8, W12
