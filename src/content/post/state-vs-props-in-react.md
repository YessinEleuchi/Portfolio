---
layout: ../../layouts/post.astro
title: State vs Props in React - What's the Difference?
description: A beginner-friendly guide comparing state and props in React with clear explanations and code examples.
dateFormatted: Aug 1, 2025

---

React is built on the concept of reusable components, and two of the most important concepts to understand are **state** and **props**. If you're just starting out, these two terms can feel confusing. But don’t worry — once you see how they work and what they’re used for, it’ll all make sense.

Let’s break it down in a simple way.

## 🧱 What Are Props?

**Props** (short for "properties") are **read-only inputs** passed **from parent to child components**. They allow data to flow **down the component tree**.

### 🔧 Example of Props

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Welcome name="yessin" />;
}
```

Here:
- `App` is the parent component.
- `Welcome` is the child.
- `name="Yessin"` is a prop passed from `App` to `Welcome`.

✅ Props are **immutable** — the child component cannot change them.

---

## 🔁 What Is State?

**State** is a **data structure** that holds information about the component. Unlike props, **state is managed inside the component**. It can **change over time** — usually based on user interaction.

### 🔧 Example of State

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

Here:
- `count` is part of the component’s **state**.
- Clicking the button **updates the state** with `setCount`.

✅ State is **local** and **mutable** (it can change).

---

## ⚖️ Comparison Table: State vs Props

| Feature       | Props                         | State                        |
|---------------|-------------------------------|------------------------------|
| Definition    | Data passed from parent        | Data managed by component    |
| Mutability    | Immutable (read-only)          | Mutable (using `setState`)   |
| Usage         | Communication between components | Internal data handling     |
| Ownership     | Controlled by parent           | Controlled by the component  |
| Example Use   | Pass username to a profile card | Track if modal is open      |

---

## 🧠 Key Takeaways

- Use **props** to **pass data** to child components.
- Use **state** to **store and manage** data **within a component**.
- Props help components stay **dynamic** and **reusable**.
- State helps your UI **respond to events** and **interactions**.

---

🧩 Understanding the difference between props and state is key to building powerful and maintainable React apps. Master these two, and you're well on your way!

💬 *Any questions or tips to share? Let’s talk in the comments or on [GitHub](https://github.com/YessinEleuchi)!*
