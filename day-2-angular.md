# Day 2 – Angular Fundamentals

**Date:** 22 January 2026  
**Focus:** Angular Core Concepts (UI Layer)

---

## Topics Covered

### 1. Angular Templates (Continued)
- Interpolation
- Property Binding
- Event Binding
- Template discipline (logic-light templates)

**Key Learnings:**
- Interpolation is one-way and used only for displaying data
- Property binding sends data from component to DOM
- Event binding listens to user actions
- Templates should remain logic-light for performance and maintainability

---

### 2. Angular Directives (Revision & Practice)
- Attribute Directives:
  - `ngClass`
  - `ngStyle`
  - `ngModel`
- Structural Directives:
  - `*ngIf`
  - `*ngFor`
  - `*ngSwitch`

**Key Difference:**
- Attribute directives modify existing elements
- Structural directives create or remove elements from the DOM

---

### 3. Angular Pipes
- Purpose: Format data for display without changing original data
- Pipes are used only in templates

**Built-in Pipes Learned:**
- `uppercase`
- `lowercase`
- `date`
- `currency`
- `percent`
- `number`

**Key Learnings:**
- Pipes do not modify state
- Pipes are better than methods in templates due to performance
- Pipes keep templates clean and readable

---

### 4. Angular Decorators
- Decorators provide metadata to Angular

**Decorators Learned:**
- `@Component` – defines a component
- `@Input` – parent to child data flow
- `@Output` – child to parent event communication

**Data Flow Rules:**
- `@Input`: Parent → Child
- `@Output`: Child → Parent

---

### 5. Component Communication (Conceptual)
- Components do not access each other directly
- Communication happens only via bindings
- Shared/global data should not be passed through multiple components

**Rule:**
- Parent–Child → `@Input` / `@Output`
- Multiple components → Service

---

### 6. Practical Work
- Created Angular project using Angular CLI
- Practiced interpolation in `app.html`
- Managed component state in `app.ts`
- Maintained GitHub repository for learning

---

## Topics Introduced (To Be Continued)
- Angular Services
- Dependency Injection

> These topics were introduced conceptually and will be revisited with fresh focus on Day 3.

---

## End-of-Day Reflection
- Completed Angular UI fundamentals
- Chose to pause when mental fatigue started
- Focused on understanding instead of rushing

---

**Status:** ✅ Day completed with clarity and discipline  
**Next Day Focus:** Services & Dependency Injection (from basics)
