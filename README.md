# Leon — Frontend Evolution Case Study

> قالب وكالة إبداعية ثابت — من تمرين HTML/CSS مبتدئ إلى **case study** جاهز للإنتاج.

[![Live Demo](https://img.shields.io/badge/demo-live-10CAB7?style=for-the-badge&logo=githubpages&logoColor=white)](https://AhmedAlMadhji.github.io/Template-One/)
[![HTML5](https://img.shields.io/badge/HTML5-Semantic-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JS-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🔗 روابط سريعة

| | |
|---|---|
| **Live Demo** | [AhmedAlMadhji.github.io/Template-One](https://AhmedAlMadhji.github.io/Template-One/) |
| **Source Code** | [github.com/AhmedAlMadhji/Template-One](https://github.com/AhmedAlMadhji/Template-One) |
| **GitHub Profile** | [github.com/AhmedAlMadhji](https://github.com/AhmedAlMadhji) |
| **Contact** | [ahmdalqhlany@gmail.com](mailto:ahmdalqhlany@gmail.com) |

---

## 📌 نظرة عامة

**Leon Template One** هو landing page لوكالة إبداعية بسيطة، بدأ كمشروع تعليمي من [Elzero Web School](https://elzero.org/)، ثم تم تطويره ليصبح:

- قالباً **جاهزاً للإنتاج** (production-ready)
- **case study** موثّق يُظهر التحول من مبتدئ إلى مهندس frontend
- مناسباً للعرض في **portfolio** أمام recruiters

> التصميم البصري **لم يتغيّر** — التحسينات كانت هندسية بالكامل.

---

## ✨ ما تم تحسينه

### Before → After

| المجال | قبل | بعد |
|--------|-----|-----|
| **HTML** | بنية أساسية + أخطاء | Semantic + accessible |
| **CSS** | ملف monolithic | Tokens + modular architecture |
| **JavaScript** | لا يوجد | ~70 سطر vanilla (nav + scroll reveal) |
| **SEO** | غير موجود | Meta + Open Graph + favicon |
| **Accessibility** | غير مدروسة | ARIA + keyboard + skip link |
| **UX** | Static / hover-only | Interactive + touch-friendly |

### أقسام Case Study داخل الصفحة

1. **Evolution** — مقارنة Before/After + جدول ملخّص
2. **Engineering Thinking** — قرارات تقنية (لماذا refactor وليس rewrite)
3. **What I Learned** — نمو المطوّر من implementer إلى engineer

---

## 🛠️ التقنيات

- **HTML5** — semantic landmarks, ARIA, lazy loading
- **CSS3** — custom properties, Grid, Flexbox, media queries, `:focus-visible`
- **JavaScript (Vanilla)** — progressive enhancement, Intersection Observer
- **Font Awesome** — icons
- **Google Fonts** — Work Sans
- **Normalize.css** — cross-browser reset

> بدون frameworks · بدون build tools · بدون backend

---

## 📁 هيكل المشروع

```
Template-One/
├── index.html          # الصفحة الرئيسية + case study
├── favicon.svg         # أيقونة الموقع
├── CSS/
│   ├── Normlazi.css    # Normalize.css
│   ├── leon.css        # الأنماط الرئيسية
│   └── all.min.css     # Font Awesome
├── JS/
│   └── main.js         # Nav toggle + scroll reveal
├── images/             # الصور والأصول البصرية
└── README.md
```

---

## 🚀 التشغيل محلياً

### 1. Clone

```bash
git clone https://github.com/AhmedAlMadhji/Template-One.git
cd Template-One
```

### 2. فتح المشروع

**الطريقة الأولى — مباشرة:**

```bash
# افتح index.html في المتصفح
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
```

**الطريقة الثانية — Live Server (موصى بها):**

1. ثبّت [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) في VS Code
2. افتح المجلد واضغط **Go Live**

> لا حاجة لـ `npm install` — المشروع static بالكامل.

---

## 🎯 أقسام الصفحة

| القسم | الوصف |
|-------|--------|
| Landing | Hero section مع خلفية كاملة |
| Features | 3 ميزات رئيسية |
| Services | خدمات الوكالة |
| Portfolio | بطاقات مشاريع |
| About | نبذة عن الوكالة |
| **Evolution** | Case study — Before/After |
| **Thinking** | قرارات هندسية |
| **Learned** | ماذا تعلّمت |
| Contact | بريد + روابط تواصل |

---

## 👤 المطوّر

**Ahmed Raed (Ahmed AlMadhji)**

- GitHub: [@AhmedAlMadhji](https://github.com/AhmedAlMadhji)
- Email: [ahmdalqhlany@gmail.com](mailto:ahmdalqhlany@gmail.com)
- WhatsApp: [+967 773 069 358](https://wa.me/967773069358)

---

## 📄 الترخيص

هذا المشروع مفتوح للاستخدام التعليمي والعرض في portfolio.  
التصميم الأصلي مستوحى من قالب Leon في Elzero Web School.

---

<p align="center">
  Built with HTML, CSS &amp; minimal JS — upgraded with engineering intent.
</p>
