# Day 3 — Angular Hands-on (HTTP & Standalone Components)

📅 **Date:** 24 Jan 2026  
🎯 **Goal:** Start real Angular hands-on practice and set up a professional project structure

---

## ✅ What I Did Today

### 1️⃣ Angular Project Setup
- Used Angular CLI to create project: `angular-tut`
- Understood that the project uses **Standalone Components** (no AppModule)
- Learned that global configuration is handled via `app.config.ts`

---

### 2️⃣ Understanding `app.config.ts`
- Learned how Angular 16+ uses **providers instead of modules**
- Enabled HTTP globally using:

```
provideHttpClient()
```
- Key takeaways:
- Modern Angular apps don’t rely on `HttpClientModule`
- Providers configure application-wide features

---

### 3️⃣ Created Proper Folder Structure
```
src/app/
├── components/
│ └── users/
│ ├── users.component.ts
│ ├── users.html
│ └── users.css
├── services/
│ └── user.service.ts
```


- Learned importance of **separation of concerns**
  - Components → UI + interaction
  - Services → business logic & API calls

---

### 4️⃣ Service Creation (HTTP Logic)
- Created `UserService`
- Implemented HTTP GET request using `HttpClient`
- API used:
  - https://jsonplaceholder.typicode.com/users

**Key learning:**
- Services should be named with `Service` suffix
- Services should not subscribe to Observables
- Components decide when and how to subscribe

---

### 5️⃣ Standalone Component Setup
- Created `UsersComponent`
- Used:
  - `standalone: true`
  - `CommonModule` for `*ngFor`
- Injected `UserService` using Dependency Injection
- Subscribed to API data inside `ngOnInit`

---

### 6️⃣ Displaying API Data
- Rendered users list using `*ngFor`
- Displayed:
  - User name
  - User email

**Key understanding:**
- Templates stay logic-light
- Data flows from component → template

---

## 🧠 Core Concepts Learned
- Standalone Angular architecture
- Providers vs Modules
- Dependency Injection
- HTTP Client usage
- Observables & `subscribe`
- Proper Angular project structuring

---

## 🚀 Status
✔️ Project runs successfully  
✔️ Users data fetched from API  
✔️ Ready to add:
- Routing
- Angular Material
- More hands-on features

---

## 📝 Next Plan
- Add routing (Home / Users)
- Improve UI using Angular Material
- Update README with screenshots

---

💪 **Confidence Level:** Increasing  
📌 **Approach:** Learn fundamentals first, then scale
