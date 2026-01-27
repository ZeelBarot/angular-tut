# Day 5 – Angular Learning Log

## 📅 Date

27-01-2026

---

## 🎯 Goal of the Day

* Strengthen Angular fundamentals
* Understand how Angular concepts connect with real project structure
* Apply clean coding practices suggested by senior

---

## 🧠 Concepts Covered (Understanding)

### 1️⃣ Angular Project Structure

* `app/` → root application folder
* `components/` → UI blocks
* `services/` → business logic & API calls
* `models/` → data structures
* `pages/` → feature-based components

👉 **Why it matters:** Clean structure makes debugging and scaling easier.

---

### 2️⃣ Components

* Handle UI logic
* Should be lightweight
* Should delegate heavy logic to services

Key files:

* `.ts` → logic
* `.html` → template
* `.css` → styles

---

### 3️⃣ Services

* Used for:

  * API calls
  * Shared logic
  * Reusability

* Injected using Dependency Injection

---

### 4️⃣ Directives

#### Attribute Directives

* `ngModel`
* `ngClass`
* `ngStyle`

#### Structural Directives

* `*ngIf`
* `*ngFor`
* `*ngSwitch`

👉 Control DOM behavior efficiently

---

### 5️⃣ Pipes

* Used for transforming data in templates

Common pipes:

* `date`
* `currency`
* `decimal`
* `uppercase`

Example:

```
{{ price | currency:'INR' }}
```

---

### 6️⃣ Decorators

* `@Component`
* `@Input`
* `@Output`
* `@Injectable`

👉 Define metadata and behavior of classes

---

### 7️⃣ Data Binding

| Type          | Syntax        |
| ------------- | ------------- |
| Interpolation | `{{ value }}` |
| Property      | `[value]`     |
| Event         | `(click)`     |
| Two-way       | `[(ngModel)]` |

---

### 8️⃣ Forms

#### Template Driven Forms

* Simple
* Less control

#### Reactive Forms

* Scalable
* Strong validation
* Preferred for enterprise apps

---

### 9️⃣ HTTP Requests

* `HttpClient`
* GET / POST
* Error handling using `subscribe`

---

## 🧪 Practical Work Done

* Users list page
* Pagination
* Filtering users
* Add User toggle form
* UI improvements with Angular Material

---

## ✅ Key Learnings

* Keep logic out of templates
* Avoid heavy code in constructor / ngOnInit
* Use services for API interaction
* Follow proper naming conventions

---

## 📌 Pending Topics

* Async / Await in Angular
* Promises vs Observables
* Routing deep dive

---

## 🧠 Reflection

Angular feels much clearer when structure and responsibility are respected. Focus should always be readability and scalability.
