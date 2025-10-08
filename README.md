# CampusDoor – College Booking Platform  

A modern **MERN-based college booking system** for managing college services, admissions, and reviews.  
Built with **React, Redux, Express, MongoDB (Mongoose)**, and **Firebase**, it simplifies the admission process with secure authentication, profile management, and dynamic review features.  

---

## 📖 Overview  

**CampusDoor** is a full-featured platform designed to make college admissions for students and easy to explore for visitors.  
Users can search colleges, view detailed profiles, submit admission forms, and share reviews. The project combines a **modern UI/UX** with a **robust backend** for real-world usability.  

---

### 🔗 Demo Links  
- 🔗 **Live Frontend:** [https://campus-door.vercel.app/](https://campus-door.vercel.app/)  
- 🔗 **Frontend GitHub Repository:** [campus-door-frontend](https://github.com/AbrRahman/campus-door-frontend)  
- 🔗 **Backend GitHub Repository:** [campus-door-backend](https://github.com/AbrRahman/campus-door-backend)  

---

## ⚡ Tech Stack  

- **Frontend:** React, Redux Toolkit, React Router, Tailwind CSS, daisyUI  
- **Backend:** Node.js, Express.js, MongoDB with **Mongoose ODM**, JWT Authentication  
- **Auth:** Firebase Google Auth + Custom JWT Email/Password Auth  
- **UI/UX:** Tailwind CSS, DaisyUI, Sonner (toast notifications)  
- **Utilities:** Zod, React Hook Form, Redux Persist  
- **Deployment:** Vercel (Frontend & Backend)  

---

## 🚀 Features  

### 👤 User Features  
-  **Authentication**:  
  - Google login via **Firebase**  
  - Email/Password login with **JWT**  
-  Search colleges by name  
-  View detailed college profiles with admission info, research, events, and sports  
-  Submit admission forms with full details (name, subject, email, phone, DOB, image upload)  
-  **My College** page: view submitted admissions and add reviews  
-  Add star-based reviews that show up dynamically on the homepage  
-  Profile page with editable info (name, email, university, address)  
- Responsive, mobile-friendly UI  

### 🎨 Public Features  
- Modern home page with:  
  - Featured college cards  
  - Image gallery of graduates  
  - Research paper links  
  - Latest reviews section  
- Creative 404 error page  

---

##  Installation & Setup  

### Prerequisites  
- Node.js  
- MongoDB (local or Atlas)  
- Firebase project for Google authentication  

### Clone the Repositories  

**Frontend**  
```
git clone https://github.com/AbrRahman/campus-door-frontend.git
cd campus-door-frontend
npm install
npm run dev
```
#### Set Up Environment Variables
Create a .env.local file in the root directory of project and configure it with the required environment variables.
```
# firebase env
VITE_apiKey=
VITE_authDomain=
VITE_projectId=
VITE_storageBucket=
VITE_messagingSenderId=
VITE_appId=
VITE_measurementId=

```
