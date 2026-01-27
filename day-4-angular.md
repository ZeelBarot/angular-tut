# Day 4 — Angular Dashboard (Material, Forms & Debugging)

📅 Date: 26 Jan 2026  
🎯 Focus: Advanced Users Page + Debugging Standalone Angular

---

## ✅ What I Worked On

### 1️⃣ Users Dashboard Enhancement
- Integrated Angular Material components:
  - Toolbar
  - Cards
  - Input fields
  - Buttons
  - Pagination
  - Loading spinner
- Implemented clean UI for Users listing

---

### 2️⃣ Search & Pagination
- Added search functionality using input event
- Implemented pagination using `MatPaginator`
- Maintained separate states:
  - `users` → original API data
  - `filteredUsers` → search results
  - `paginatedUsers` → displayed users

---

### 3️⃣ Reactive Forms (Create User)
- Implemented Reactive Form with:
  - FormBuilder
  - Validators
- Learned:
  - Forms are data-driven
  - Logic stays in component
  - Template remains logic-light

---

### 4️⃣ Standalone Component Rules (Important Learning)
- `imports[]` only accepts:
  - NgModules
  - Standalone components
  - Directives / Pipes
- Services like `FormBuilder` must be injected via constructor
- Fixed error caused by placing services in `imports[]`

---

### 5️⃣ Debugging Experience
- Resolved Angular compiler errors:
  - NG2012 (invalid imports)
  - TS2729 (service used before initialization)
- Learned correct lifecycle usage:
  - Constructor → Dependency Injection
  - ngOnInit → Initialization logic

---

## 🧠 Key Takeaways
- Standalone Angular requires strict structure
- Separation of concerns is critical
- One small mistake can cause multiple Angular errors
- Understanding lifecycle prevents most bugs

---

## 🚀 Status
✔️ Users dashboard working  
✔️ Search & pagination functional  
✔️ Reactive form implemented  
✔️ Angular Material integrated  

---

Next Steps:
- Connect Create User form to API (POST)
- Add Snackbar notifications
- Improve UI/UX
