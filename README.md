# 📈 MERN Stock Monitoring Tool (Zerodha Clone)

A high-performance, full-stack trading platform clone built with the **MERN** stack. This project features a decoupled architecture with a public-facing landing page and a secure, JWT-protected dashboard for managing portfolio holdings and positions.

### 🚀 [Live Demo (Frontend)](https://mern-stock-monitoring-tool-frontend.vercel.app/)

---

## 🏗️ System Architecture
This project follows a **Micro-frontend inspired architecture**, where the landing page and the trading dashboard are deployed as separate services to optimize performance and separation of concerns.

* **Frontend:** React.js (Vercel) - Handles marketing, SEO, and user onboarding.
* **Dashboard:** React.js (Vercel) - Handles sensitive data visualization and order management.
* **Backend:** Node.js & Express (Render) - RESTful API with JWT middleware.
* **Database:** MongoDB Atlas - Cloud-hosted NoSQL database.

---

## ✨ Key Features
* **Full-Stack Authentication:** Secure Signup/Login flow using **JSON Web Tokens (JWT)**.
* **Portfolio Management:** Real-time visualization of Stock Holdings and Current Positions.
* **Order Execution:** Interface for placing new buy/sell orders with instant backend persistence.
* **Cross-Domain Security:** Advanced **CORS** configuration and secure token-passing between deployment environments.
* **Responsive UI:** Zerodha-inspired minimalist design using Bootstrap and custom CSS.

---

## 🛠️ Tech Stack
| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React, React Router, Bootstrap, Axios |
| **Backend** | Node.js, Express.js, JWT (JsonWebToken) |
| **Database** | MongoDB, Mongoose ODM |
| **Deployment** | Vercel (Frontend/Dashboard), Render (Backend) |

---

## 🔒 Security Implementation
To ensure professional-grade security, the application implements:
1.  **Route Protection:** A custom `Home.js` gatekeeper in the Dashboard that redirects unauthorized users to the login page.
2.  **API Shield:** Backend middleware (`protect`) that verifies the JWT signature before allowing access to MongoDB data.
3.  **Environment Safety:** All sensitive credentials (Mongo URL, JWT Secret) are managed via `.env` variables.

---

## 🏁 Getting Started (Local)

1.  **Clone the repo:**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
    ```
2.  **Install dependencies:**
    ```bash
    # For Backend
    cd backend && npm install
    
    # For Frontend
    cd ../frontend && npm install
    ```
3.  **Set up Environment Variables:** Create a `.env` file in the **backend** folder:
    ```env
    MONGO_URL=your_mongodb_uri
    JWT_SECRET=your_secret_key
    PORT=3002
    ```
4.  **Run the project:**
    ```bash
    # Run Backend
    node index.js
    
    # Run Frontend
    npm start
    ```

---

## 🎓 About the Author
Developed by a **4th-Year B.Tech Information Technology Student** at **Guru Tegh Bahadur Institute of Technology (GTBIT)**. Focused on building scalable web applications and mastering Data Structures & Algorithms.