# AI-Portfolio-Generator

A **workshop kit** for building and deploying a personal portfolio website using an AI coding assistant — no coding experience required. Students follow prompts and paste context into tools like **GitHub Copilot**, **Cursor**, **ChatGPT**, or **Claude**; the AI writes all the HTML, CSS, and JavaScript. By the end, the portfolio is live on **GitHub Pages**.

---

## What This Is

- **For students:** Step-by-step guides and prompts to build a modern, dark-mode portfolio (hero, about, work, skills, contact, footer) with scroll animations, responsive layout, and optional extras (theme toggle, modals, typing effect).
- **For instructors:** Timing, troubleshooting, pedagogy notes, and assessment ideas for running a 2–3 hour workshop (or shorter session).

The site is **plain HTML, CSS, and vanilla JavaScript** — no React, npm, or build tools. It runs by opening `index.html` in a browser and deploys to GitHub Pages.

---

## What’s in This Repo

| File | Purpose |
|------|--------|
| **chatGPT-prompt-v2.md** | **Start here.** Context/super-prompt to paste into your AI assistant first. Sets design tokens, file structure, tech rules, and placeholder content. |
| **PROMPTS.md** | Ordered prompts (Phase 1–9 + bonus) to copy, customize, and paste into the AI. Each phase targets a section or feature. |
| **WORKSHOP-GUIDE.md** | Student-facing walkthrough: setup, file structure, how to set context in different AI tools, preview, deploy to GitHub Pages, and personalization. |
| **chatGPT-prompt-v1.yaml** | Earlier YAML version of the AI context; optional alternative to `chatGPT-prompt-v2.md`. | Earlier YAML version of the AI context; optional alternative to `chatGPT-prompt-v2.md`. |

---

## Quick Start (Students)

1. **Create a repo** (e.g. `my-portfolio`) on GitHub and clone it locally.
2. **Create the folder structure** (see WORKSHOP-GUIDE.md):
   - `index.html`, `css/styles.css`, `js/main.js`, `assets/images/`
3. **Set AI context:** Paste the full contents of **chatGPT-prompt-v2.md** into your AI assistant (Copilot Chat, Cursor Composer, ChatGPT, Claude, etc.).
4. **Build step by step:** Open **PROMPTS.md** and follow the prompts in order (Phase 1 → 7, then personalization and deployment).
5. **Preview:** Open `index.html` in a browser (or use Live Server).
6. **Deploy:** Push to GitHub and enable **Pages** (Source: branch `main`, root). Your site will be at `https://YOUR-USERNAME.github.io/my-portfolio/`.

---

## Prerequisites

- **Git** and a **GitHub account**
- A **code editor with AI** (e.g. VS Code + Copilot, Cursor, or VS Code + ChatGPT/Claude in a browser)
- A web browser for preview

---

## Tech Stack & Constraints

- **HTML** (semantic: `header`, `main`, `section`, `footer`)
- **CSS** (variables, Grid, Flexbox, responsive, design tokens from the prompt)
- **Vanilla JavaScript** (Intersection Observer for scroll animations, smooth scroll, optional nav highlight)
- **No** React, Vue, npm, TypeScript, or external JS libraries
- **Deployment:** GitHub Pages (static site only)

---

## Design Overview

- **Style:** Modern, minimal, professional, dark mode
- **Sections:** Hero (full-height, CTA), About (photo + bio), Work (project cards grid), Skills (badges/tags), Contact (social links), Footer
- **Effects:** Scroll-triggered fade-ins, hover on cards/buttons, optional cursor glow, glassmorphism nav, mobile hamburger menu

Placeholder content (name, tagline, bio, projects, skills) is defined in **chatGPT-prompt-v2.md**; students replace it in Phase 8 or via the personalization prompt in PROMPTS.md.

---

## Workshop Duration

- **Full:** 2–3 hours (intro, build phases 1–7, break, deployment, personalization, wrap-up)
- **Short:** ~90 minutes (Phases 1–7 + deployment; personalization as homework)

---

## License & Use

Use this kit for workshops, courses, or self-study. Adjust prompts and guides to fit your audience (e.g. design students, bootcamp grads).
