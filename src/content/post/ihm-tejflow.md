---
layout: ../../layouts/post.astro
title: How HCI Standards Helped Me Build a Safer, Cleaner UI in TejFlow
description: "A small, experience-based post about how ergonomic and HCI standards (AFNOR, ISO 9241-12) shaped the way I designed TejFlow’s interface."
dateFormatted: December 6, 2025
---

When I started building **TejFlow**, I focused almost entirely on automation:  
Playwright flows, token management, PDF parsing, Excel generation… all the backend “magic”.

But once real users (accountants) began touching the app, I realised something important:

➡️ **If the interface is confusing, the smartest backend in the world won’t save the product.**

That’s when I went back to my **IHM (HCI) course notes** – especially the ergonomic standards from **AFNOR Z67-133-1** and **ISO 9241-12** about how to present information clearly and design interfaces around human limits.

Those standards ended up guiding many of the UI decisions inside TejFlow.

---

## 🎯 TejFlow’s Reality: High Risk, High Friction

TejFlow is not a toy app:

- it touches **official TEJ certificates**
- it manages **multiple clients and tokens**
- it can **trigger heavy automated actions** (downloads, classifications, Excel exports)

If the UI is not clear enough, users can:

- launch actions on the wrong client
- misinterpret a status
- think something is “stuck” while the automation is still running

So I started treating **ergonomics as a core feature**, not as polish.

---

## 🧩 AFNOR Criteria in Practice

The AFNOR standard defines several ergonomic criteria. I didn’t apply them as theory — I used them as a checklist each time I touched the UI.

### 1. Compatibility – Speak the User’s Language

Accountants don’t think in terms of “jobs”, “workers” or “process IDs”.  
They think in:

- **Client**
- **Period**
- **Certificate type**
- **Status**

So in TejFlow I redesigned the screens to organise everything around these concepts. Internal IDs still exist, but they stay in the background.

---

### 2. Homogeneity – Don’t Surprise the User

Homogeneity is about consistency:

- same button style for the same type of action
- same wording for similar features
- same layout for similar pages

In TejFlow, the **client dashboard**, **documents list**, and **Excel exports** now share the same patterns: same filter zone at the top, same table style, same status badges.

After that change, new features felt “familiar” even before users had seen them.

---

### 3. Guidage – Gently Showing the Way

Guidage is all about **helping the user understand where they are and what they can do next**.

Concretely, I added:

- **breadcrumbs** (`Client > Documents > Generated`)
- **clear empty states** (“No documents yet for this period. Try changing the filters.”)
- **explicit labels** on dangerous actions (“Download all certificates for this client”)

This reduced the fear of “breaking something” and made the app feel more predictable.

---

### 4. Error Management – Don’t Blame the User

TejFlow runs background flows with Playwright. Things can fail:  
network, TEJ downtime, invalid tokens…

Instead of showing a generic error, I now display:

- what went wrong
- on which **client/token**
- what the user can do next (retry, update token, contact support)

That’s pure **“gestion des erreurs”** from the AFNOR criteria, and it transformed frustration into understanding.

---

## 📊 ISO 9241-12: Cleaning Up the Information

The ISO 9241-12 principles focus on **how information is displayed**.  
For TejFlow, I paid special attention to:

- **Clarity & Discriminability**
  - Each document type has its own icon and colour.
  - Statuses (success, pending, failed) are visually distinct.

- **Concision**
  - Only essential columns are visible by default.
  - Advanced data is available, but hidden behind details or tooltips.

- **Lisibility (Readability)**
  - I increased spacing, used proper headings, and aligned numeric columns properly.
  - Long technical messages were rewritten into short, human explanations.

Small layout changes, but a big impact on how “light” the app feels.

---

## 🌐 Web Ergonomics for TejFlow

From the Web ergonomics part of the course, I applied a few simple rules inside TejFlow:

- **No overloaded pages** → one main action per screen.
- **Limited colour palette** → 3–4 main colours across the entire app.
- **Recognisable icons** → search, help, home, language switch always look and behave the same.
- **Responsive layout** → works nicely on laptop resolutions used in offices.

These details make the app feel **professional and trustworthy**, which matters a lot when you’re working with financial documents.

---

## ✅ What I Gained by Respecting HCI Standards

After integrating these HCI principles, TejFlow became:

- **easier to learn** – new users understand the structure faster
- **safer** – fewer mistakes with clients/tokens
- **less tiring** – better readability during long work sessions
- **more coherent** – every new feature fits naturally into the existing UI

In short:

> **HCI standards turned UI design from “intuition and taste” into something systematic and reliable.**

For me as a developer, that’s the real value:  
I don’t “guess” what a good interface is — I **design it on purpose**, using principles that are actually grounded in human capabilities.
