---
layout: ../../layouts/post.astro
title: Lifting State Up in React - What, When, and Why
description: "A beginner-friendly explanation of lifting state up in React — how and why to do it with examples."
dateFormatted: Aug 1, 2025
---


When building a React app, one common challenge is making components talk to each other. For example, how do you make a child component update something in a sibling or parent? That’s where **“lifting state up”** comes in.

Let’s explore what it means, when to use it, and how to apply it with simple examples.

## ✅ What Is “Lifting State Up”?

In React, **state** belongs to the component where it is defined. But sometimes, two (or more) components need to share or modify the same piece of state.

**Lifting state up** means **moving the state from a child component to the nearest common parent**, so that the state can be passed down via props and updated in one central place.

## 🕰️ When Should You Lift State Up?

You should lift state up when:
- Two or more components need access to the same state.
- One component needs to modify the state of another.
- You want to manage logic in a single place to avoid duplication or inconsistency.

## 🧩 Real-Life Analogy

Imagine two people sharing a fridge. If each person keeps a separate grocery list, things get confusing. But if they write on **one shared list on the fridge**, both can add, remove, or read from it. The **fridge** is the shared parent component. The **list** is the lifted state.

## 🛠️ Example: Temperature Converter

Let’s say we’re building a Celsius ↔ Fahrenheit converter using two components:

### 1. Child Components: `CelsiusInput` and `FahrenheitInput`

```jsx
function CelsiusInput({ value, onChange }) {
  return (
    <div>
      <label>Celsius: </label>
      <input value={value} onChange={e => onChange(e.target.value)} />
    </div>
  );
}

function FahrenheitInput({ value, onChange }) {
  return (
    <div>
      <label>Fahrenheit: </label>
      <input value={value} onChange={e => onChange(e.target.value)} />
    </div>
  );
}
```

### 2. Parent Component: `TemperatureConverter`

Here we **lift the state up** and handle all the logic in one place.

```jsx
function TemperatureConverter() {
  const [temperature, setTemperature] = React.useState('');
  const [scale, setScale] = React.useState('c');

  const toFahrenheit = c => (c * 9) / 5 + 32;
  const toCelsius = f => ((f - 32) * 5) / 9;

  const handleCelsiusChange = value => {
    setTemperature(value);
    setScale('c');
  };

  const handleFahrenheitChange = value => {
    setTemperature(value);
    setScale('f');
  };

  const celsius = scale === 'f' ? toCelsius(temperature) : temperature;
  const fahrenheit = scale === 'c' ? toFahrenheit(temperature) : temperature;

  return (
    <div>
      <CelsiusInput value={celsius} onChange={handleCelsiusChange} />
      <FahrenheitInput value={fahrenheit} onChange={handleFahrenheitChange} />
    </div>
  );
}
```

Now, both input components are **in sync**, and the logic is centralized in the parent component.

## 🎯 Why It Matters

Lifting state up:
- Keeps your app’s logic clean and centralized.
- Helps components communicate effectively.
- Prevents bugs from mismatched or duplicated state.
- Makes it easier to debug and scale your app.

## 💡 Takeaways

- Think of **lifting state up** as **creating a single source of truth**.
- Use it when multiple components rely on or update the same data.
- Your UI becomes more consistent and easier to manage.

---

💬 *Got feedback or questions about lifting state up? Let me know on [GitHub](https://github.com)!*
