# Curriculum Redesign — 07-034-233 การพัฒนาเว็บแอปพลิเคชัน

**Date:** 2026-06-29  
**Status:** Approved

---

## Overview

ปรับเนื้อหาบทเรียนทั้ง 15 สัปดาห์จาก PHP + MySQL + XAMPP เป็น stack สมัยใหม่ที่ใช้งานจริงในอุตสาหกรรม  
Portal (HTML/CSS/JS) คงเดิม — เปลี่ยนเฉพาะเนื้อหาและโค้ดตัวอย่างในไฟล์ week-01.html ถึง week-15.html

---

## Tech Stack ที่สอน

| Layer | เทคโนโลยี | บทบาท |
|---|---|---|
| Build Tool | Vite | Dev server, bundling |
| Language | JavaScript (ES2022+) | ทั้ง front & back |
| Frontend Framework | React | UI components |
| Routing | TanStack Router | Client-side routing |
| Data Fetching | TanStack Query | Server state, caching, mutations |
| UI Components | Shadcn/ui + Tailwind CSS | Component library |
| Backend Framework | Hono | Lightweight API บน Edge |
| Database + Auth + Storage | Supabase | PostgreSQL, Auth, File Storage |
| Deploy | Cloudflare Workers | Edge runtime |

**เครื่องมือที่นักศึกษาต้องติดตั้ง:**
- Node.js (v20+)
- VS Code + Extensions (ESLint, Prettier, Tailwind CSS IntelliSense)
- Wrangler CLI (`npm install -g wrangler`)
- บัญชี Supabase (ฟรี)
- บัญชี Cloudflare (ฟรี)

---

## สถาปัตยกรรมระบบ

```
Browser (React + TanStack)
    │
    ├── TanStack Router  → จัดการ routes ฝั่ง client
    └── TanStack Query   → ดึง/ส่งข้อมูลผ่าน Hono API
                              │
                        Hono (Cloudflare Workers)
                        (/api/services, /api/bookings, ฯลฯ)
                              │
                        Supabase
                        ├── PostgreSQL  (ข้อมูล)
                        ├── Auth        (ผู้ใช้)
                        └── Storage     (รูปภาพ)
```

---

## Running Project — "BookEasy"

ระบบจองบริการออนไลน์ (ร้านตัดผม / นวด / สปา) ที่นักศึกษาสร้างทีละ Lab ตั้งแต่สัปดาห์ที่ 2 จนได้ระบบสมบูรณ์ใน Week 15

**ฟีเจอร์สุดท้าย:**
- หน้าแสดงรายการบริการ (ดูได้โดยไม่ต้อง Login)
- ระบบจองคิว (ต้อง Login)
- ระบบ Login / Register ด้วย Supabase Auth
- ประวัติการจองของแต่ละผู้ใช้
- Admin: เพิ่ม/แก้ไข/ลบบริการ + อัปโหลดรูป
- Deploy บน Cloudflare Workers (URL จริง)

**ตารางฐานข้อมูล:**
- `services` (id, name, description, price, duration_min, image_url)
- `bookings` (id, user_id, service_id, booking_date, booking_time, status, notes)
- `profiles` (id, full_name, phone, avatar_url) — ต่อกับ Supabase Auth users

---

## แผนการสอน 15 สัปดาห์

| สัปดาห์ | หัวข้อ | Lab | ผลลัพธ์โปรเจกต์ | CLO |
|---|---|---|---|---|
| 1 | แนะนำรายวิชา & Modern Web Stack & สถาปัตยกรรม Edge | — | — | CLO1 |
| 2 | ทบทวน HTML/CSS/JS + ES2022 (arrow fn, destructuring, async/await, modules) | Lab 1 | หน้า Landing Page static ของ BookEasy | CLO1 CLO4 |
| 3 | Vite + React: ตั้งค่าโปรเจกต์ & JSX & Component เบื้องต้น | Lab 2 | Scaffold BookEasy, Header, Footer, หน้าแรก | CLO3 |
| 4 | React State + Form + TanStack Router (routing, params, layouts) | Lab 3 | หน้า /services, /services/:id, /booking | CLO3 |
| 5 | Hono API บน Cloudflare Workers (routing, middleware, JSON response) | Lab 4 | API `/api/services` และ `/api/bookings` ส่ง mock data | CLO3 |
| 6 | Supabase: ออกแบบ DB + SQL เบื้องต้น + Supabase Client | Lab 5 | สร้างตาราง services, bookings, profiles ใน Supabase | CLO2 CLO3 |
| 7 | CRUD ครบวงจร — Hono เชื่อม Supabase (GET/POST/PUT/DELETE) | Lab 6 | จองบริการได้จริง (Create/Read), Admin เพิ่มบริการ | CLO3 |
| 8 | TanStack Query — useQuery, useMutation, invalidation, loading/error states | Lab 7 | แทนที่ fetch ด้วย TanStack Query ทั้งหมด | CLO3 |
| 9 | Supabase Auth — signUp, signIn, signOut, session, Protected Route | Lab 8 | Login/Register ใช้งานได้, ดูประวัติการจองตัวเอง | CLO3 CLO7 |
| 10 | Supabase Storage — bucket, upload, getPublicUrl, รูปภาพบริการ | Lab 9 | Admin อัปโหลดรูปบริการ แสดงในหน้า services | CLO3 |
| 11 | Shadcn/ui + Tailwind CSS — component library, theming, responsive design | Lab 10 | รีดีไซน์ UI BookEasy ทั้งหมดด้วย Shadcn | CLO4 |
| 12 | Custom Hooks + Reusability + Error Handling (`useBooking`, `useServices`) | Lab 11 | Refactor โค้ด hooks + จัดการ error อย่างเป็นระบบ | CLO3 |
| 13 | โครงงานทีม: วิเคราะห์ ออกแบบ และพัฒนาเว็บแอปพลิเคชันทางธุรกิจ | โครงงาน | เริ่มโปรเจกต์ทีม (ต่อยอดจาก BookEasy หรือระบบใหม่) | CLO1 CLO2 CLO6 |
| 14 | นำเสนอโครงงานและจัดทำเอกสารประกอบ | นำเสนอ | — | CLO5 CLO6 |
| 15 | Deploy Cloudflare Workers + Wrangler CLI + Testing + สรุปรายวิชา | สรุป | BookEasy Live บน *.workers.dev | CLO3 CLO7 |

---

## Format เนื้อหาแต่ละสัปดาห์ (week-XX.html)

```
1. สารบัญ (toc-box)
2. ทฤษฎี (theory-wrap)
   - อธิบาย concept
   - diagram architecture (ASCII)
   - callout: note / tip / warning
3. โค้ดตัวอย่าง (code-block)
   - 2–3 snippets (JavaScript / JSX / bash)
4. ปฏิบัติการ Lab [W2–W12] (lab-box)
   - หัวข้อ: "BookEasy — สัปดาห์ที่ X: [สิ่งที่ทำ]"
   - ขั้นตอน step-by-step
   - โค้ดที่ต้องเขียน
   - ผลลัพธ์ที่คาดหวัง
   - callout "🔗 ต่อยอดจาก Lab ก่อน: ..."
5. Week Navigation (prev / next)
```

**การเปลี่ยนแปลงจากเดิม:**
- Code examples: PHP → JavaScript / JSX / bash
- Prism language: `php` → `javascript`, `jsx`, `bash`
- Diagrams: XAMPP/Apache → Vite/Hono/Supabase/Cloudflare
- Lab: แยกอิสระ → Running project "BookEasy"
- เพิ่ม callout "🔗 ต่อยอดจาก Lab ก่อน" ทุก lab

---

## การประเมินผล (คงเดิม)

- ปฏิบัติการ Lab 1–11: 25%
- สอบกลางภาค: 25%
- โครงงาน (Week 13–14): 35%
- สอบปลายภาค: 15%

---

## ขอบเขตที่ไม่เปลี่ยน

- Portal HTML/CSS/JS (index.html, css/style.css, js/main.js) — คงเดิมทั้งหมด
- Design system: Navy sidebar, orange accents, green lab badges, blue theory badges
- CLO 1–7 ครบถ้วนทุกข้อ
- โครงสร้าง HTML ของแต่ละ week file — คงเดิม เปลี่ยนเฉพาะเนื้อหาข้างใน
