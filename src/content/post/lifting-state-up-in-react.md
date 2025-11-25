---
layout: ../../layouts/post.astro
title: How I Use Zustand in TejFlow to Keep the UI Simple and Clean ?
description: "A small post about how Zustand helps me manage shared state inside TejFlow without overcomplicating the React codebase."
dateFormatted: July 20, 2025
---

In **TejFlow**, I try to keep the frontend as clean and lightweight as possible.  
The app has dashboards, filters, document views, client selectors, and several UI sections that need to stay in sync — and early on, I ran into a familiar React issue:

➡️ **React state + Context was getting messy way too fast.**

Filters weren’t synced across the dashboard, some components re-rendered more than they should, and the code started feeling heavier than the simplicity I wanted for TejFlow.

That’s when I switched to **Zustand**, a small state-management library that instantly made everything more predictable and much easier to maintain.

🔗 **Zustand Docs:** https://github.com/pmndrs/zustand

---

## 🐻 Why Zustand Fits TejFlow

For a project like TejFlow, I don’t need a huge state-management framework.  
What I need is something:

- simple
- predictable
- easy to maintain
- fast
- and flexible enough for dashboard behavior

Zustand does exactly that.

It gives me global state **without the boilerplate**, and it lets different parts of the dashboard stay in sync without passing props everywhere.

---

## 🧠 A Real Example From TejFlow

One example is the **certificate filters**.

Multiple components use the same filter:

- certificates table
- Excel generator
- sync history
- sidebar stats

Instead of lifting state up across three or four parent components, I just created a small Zustand store:

```ts
import { create } from "zustand";

export const useFilters = create(set => ({
  dateRange: null,
  setDateRange: (value) => set({ dateRange: value }),
}));
```
---
## 🎯 The Impact on the Project

Using Zustand inside TejFlow gave me:

- a smoother dashboard

- fewer re-renders

- clean separation of UI logic

- no giant Context files

- no prop drilling

- a codebase that’s much easier to extend

For a project like TejFlow, where the UI needs to be simple and efficient, Zustand ended up being the perfect balance between power and minimalism.