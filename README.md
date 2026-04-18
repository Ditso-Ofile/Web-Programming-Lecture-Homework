# Web Programming-1 Lecture Homework 🍕

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

## 📌 About The Project

This repository contains the final group homework project for the **Web Programming-1** course. It is a comprehensive, multi-page web application designed to demonstrate proficiency across a modern web development stack. 

The application serves as a dynamic Pizza Management and Ordering System, showcasing multiple distinct methods for implementing CRUD (Create, Read, Update, Delete) operations and asynchronous data fetching.

### 👨‍💻 Creators
* **Ditso Ofile Mogajane** (Neptun: HH0DUU)
* **Aws Bader** (Neptun: ZUKGOB)

---

## 🚀 Key Features & Modules

The project is divided into several modules, accessible via the main navigation menu, each demonstrating a specific technological approach:

1. **JavaScript CRUD:** Demonstrates local DOM manipulation and array state management using Vanilla JavaScript (Procedural approach).
2. **React CRUD:** A component-based CRUD interface utilizing React hooks (`useState`, `useEffect`) and conditional rendering for a seamless user experience without page reloads.
3. **React Single Page Application (SPA):** Features a functional To-Do list with immutable state management and a randomized Quote Generator, demonstrating dynamic React component lifecycles.
4. **Fetch API CRUD:** Connects a Vanilla JS frontend to a PHP/MySQL backend using native `fetch()` requests and promises for persistent database operations.
5. **Axios CRUD:** Utilizes the Axios library for streamlined asynchronous server-side communication, demonstrating clean RESTful API integration.
6. **Object-Oriented JavaScript (OOJS):** Demonstrates class inheritance (`PizzaDisplay` -> `PizzaOrder`), encapsulation, and dynamic DOM injection to render a visual pizza ordering interface.

---

## 🛠️ Technical Implementation

### Frontend
* **HTML5/CSS3:** Semantic markup with a responsive, consistent layout and global navigation.
* **JavaScript (ES6+):** Utilized for DOM manipulation, event handling, class structures, and Fetch API calls.
* **React:** Implemented with modular architecture, lifting state to parent components (`App.jsx`), and utilizing controlled inputs.
* **Axios:** For robust, promise-based HTTP requests.

### Backend & Database
* **PHP (8.x):** RESTful API endpoints (`api.php`) handling `GET`, `POST`, `PUT`, and `DELETE` requests.
* **PDO (PHP Data Objects):** Secure database connection (`db.php`) utilizing prepared statements to prevent SQL injection.
* **MySQL:** Relational database (`databaselesson.sql`) managing interconnected tables for `categories`, `orders`, `pizzas`, and `users`.

### Deployment
* Hosted on a live **InfinityFree** Apache/Linux server.
* API endpoints configured with relative paths to resolve CORS policies and ensure environment portability.

---

## ⚙️ Local Setup Instructions

To run this project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Ditso-Ofile/Web-Programming-Lecture-Homework.git](https://github.com/Ditso-Ofile/Web-Programming-Lecture-Homework.git)
   ## 📂 Project Structure

## File structure
Web-Programming-Lecture-Homework/
│
├── assets/                  # Shared images and static assets
├── axios/                   
│   └── api.php              # PHP backend specifically for Axios requests
├── database/                
│   └── databaselesson.sql   # MySQL database export file
├── fetchapi/                
│   ├── api.php              # PHP backend for Fetch API requests
│   └── db.php               # PDO Database connection credentials
├── js/                      
│   ├── fetchapi.js          # Frontend logic for Fetch API CRUD
│   └── oojs.js              # Object-Oriented JS logic for pizza rendering
├── my-react-app/            # React environment for standard CRUD
├── spa-react-app/           # React environment for SPA features
│
├── axios.html               # Axios CRUD UI
├── fetchapi.html            # Fetch API CRUD UI
├── index.html               # Main landing page
├── javascript.html          # Vanilla JS procedural CRUD UI
├── oojs.html                # Object-Oriented JS rendering UI
├── react.html               # React standard CRUD UI
├── spa.html                 # React SPA UI (To-Do list & Quotes)
├── style.css                # Global stylesheet
├── pizza.jpg                # Base image for OOJS canvas rendering
└── README.md                # Project documentation