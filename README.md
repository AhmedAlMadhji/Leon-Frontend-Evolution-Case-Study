# Leon Frontend Evolution Case Study

> A static creative agency landing page — upgraded from a beginner HTML/CSS exercise into a **production-ready frontend case study**.

[![Live Demo](https://img.shields.io/badge/demo-live-10CAB7?style=for-the-badge&logo=githubpages&logoColor=white)](https://ahmedalmadhji.github.io/Leon-Frontend-Evolution-Case-Study/)
[![HTML5](https://img.shields.io/badge/HTML5-Semantic-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JS-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## Quick Links

| | |
|---|---|
| **Live Demo** | [ahmedalmadhji.github.io/Leon-Frontend-Evolution-Case-Study](https://ahmedalmadhji.github.io/Leon-Frontend-Evolution-Case-Study/) |
| **Source Code** | [github.com/AhmedAlMadhji/Leon-Frontend-Evolution-Case-Study](https://github.com/AhmedAlMadhji/Leon-Frontend-Evolution-Case-Study) |
| **GitHub Profile** | [github.com/AhmedAlMadhji](https://github.com/AhmedAlMadhji) |
| **Contact** | [ahmdalqhlany@gmail.com](mailto:ahmdalqhlany@gmail.com) |

---

## Overview

**Leon Frontend Evolution Case Study** is a minimal creative agency landing page that started as an [Elzero Web School](https://elzero.org/) exercise and was later upgraded into:

- A **production-ready** static frontend template
- A documented **case study** showing the shift from beginner to frontend engineer
- A **portfolio piece** suitable for recruiters and technical interviews

> The visual design **stayed the same** — all improvements were engineering-focused.

---

## What Was Improved

### Before → After

| Area | Before | After |
|------|--------|-------|
| **HTML** | Basic structure with errors | Semantic + accessible |
| **CSS** | Monolithic file | Design tokens + modular architecture |
| **JavaScript** | None | ~70 lines of vanilla JS (nav + scroll reveal) |
| **SEO** | Missing | Meta tags + Open Graph + favicon |
| **Accessibility** | Not considered | ARIA + keyboard nav + skip link |
| **UX** | Static / hover-only menu | Interactive + touch-friendly |

### In-Page Case Study Sections

1. **Evolution** — Before/After comparison + summary table
2. **Engineering Thinking** — Technical decisions (why refactor, not rewrite)
3. **What I Learned** — Developer growth from implementer to engineer

---

## Tech Stack

- **HTML5** — semantic landmarks, ARIA, lazy loading
- **CSS3** — custom properties, Grid, Flexbox, media queries, `:focus-visible`
- **JavaScript (Vanilla)** — progressive enhancement, Intersection Observer
- **Font Awesome** — icons
- **Google Fonts** — Work Sans
- **Normalize.css** — cross-browser reset

> No frameworks · No build tools · No backend

---

## Project Structure

```
Leon-Frontend-Evolution-Case-Study/
├── index.html          # Main page + case study sections
├── favicon.svg         # Site icon
├── CSS/
│   ├── Normlazi.css    # Normalize.css
│   ├── leon.css        # Main stylesheet
│   └── all.min.css     # Font Awesome
├── JS/
│   └── main.js         # Nav toggle + scroll reveal
├── images/             # Images and visual assets
└── README.md
```

---

## Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/AhmedAlMadhji/Leon-Frontend-Evolution-Case-Study.git
cd Leon-Frontend-Evolution-Case-Study
```

### 2. Open the project

**Option A — Direct open:**

```bash
# Open index.html in your browser
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
```

**Option B — Live Server (recommended):**

1. Install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code
2. Open the project folder and click **Go Live**

> No `npm install` required — this is a fully static project.

---

## Page Sections

| Section | Description |
|---------|-------------|
| Landing | Full-height hero section |
| Features | Three core value propositions |
| Services | Agency service offerings |
| Portfolio | Project showcase cards |
| About | Agency introduction |
| **Evolution** | Case study — Before/After |
| **Thinking** | Engineering decisions |
| **Learned** | Key takeaways |
| Contact | Email + social links |

---

## Author

**Ahmed Raed (Ahmed AlMadhji)**

- GitHub: [@AhmedAlMadhji](https://github.com/AhmedAlMadhji)
- Email: [ahmdalqhlany@gmail.com](mailto:ahmdalqhlany@gmail.com)
- WhatsApp: [+967 773 069 358](https://wa.me/967773069358)

---

## License

This project is open for educational use and portfolio display.  
The original design is inspired by the Leon template from Elzero Web School.

---

<p align="center">
  Built with HTML, CSS &amp; minimal JS — upgraded with engineering intent.
</p>
