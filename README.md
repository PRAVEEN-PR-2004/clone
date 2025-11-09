# 🌴 GT Holidays

GT Holidays is a modern travel platform to explore tour packages, submit trip inquiries, and manage bookings. It provides a smooth experience with a React frontend, a Node/Express API backed by MongoDB, and a Python microservice for chatbot/AI features.

---

## 🚀 Features

- **Packages API**
Browse packages, view details, and manage packages via REST endpoints.

- **Inquiry/Form Submission**
Validated form submission for trip inquiries with server-side checks.

- **Submissions Management**
Endpoints to list and manage customer submissions.

- **Admin Endpoints**
Admin-focused routes for secured management flows.

- **Responsive Frontend (React)**
Built with React (CRA), Bootstrap, and modern UI libraries.

- **Python Microservice (Chatbot)**
Separate Python server powering chatbot/AI features.

---

## Live Link

 [Live Website - GT Holidays](https://gtholidays.netlify.app/) 

---

## Repositories

- **Frontend (clone)**: https://github.com/PRAVEEN-PR-2004/clone
- **Backend (server)**: https://github.com/PRAVEEN-PR-2004/gtholidays_server
- **Python Microservice (chatbot)**: https://github.com/PRAVEEN-PR-2004/gt_holidays_chatbot

---

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm
- Python 3
- (Optional) Virtual Environment for Python
- MongoDB Atlas (or a MongoDB URI)

---

## Installation

Clone the repository and set up each service.

1. Clone the repository

```bash
git clone https://github.com/PRAVEEN-PR-2004/clone
git clone https://github.com/PRAVEEN-PR-2004/gtholidays_server
git clone https://github.com/PRAVEEN-PR-2004/gt_holidays_chatbot
```

1. Frontend (clone)

```bash
cd clone
npm install
npm start
```

2. Backend (server)

```bash
cd server
npm install
npm run dev   # for development
# or
npm start     # production start
```

2. Python Microservice (pythonserver)

```bash
cd pythonserver
python -m venv venv
# Windows
venv\Scripts\activate
# macOS/Linux
source venv/bin/activate

pip install -r requirements.txt
python app.py
```

---


## 🧩 API Overview (Backend)

Base URL: `/` and `/api/*`

- **Packages**: `/api/packages`
  - `GET /` — List all packages
  - `GET /:id` — Get a package by ID
  - `POST /` — Create a package
  - `PUT /:id` — Update a package
  - `DELETE /:id` — Delete a package

- **Form**: `/submitData`
  - `POST /submitData` — Submit an inquiry (validated fields: name, email, phone, destination, dateOfTravel, people)

- **Submissions**: `/api/submissions`
  - Endpoints for handling customer submissions

- **Admin**: `/api/admin`
  - Admin-specific endpoints

---

## 🖥️ Project Structure

```bash
gtholiday
│
├── clone                 # Frontend (React CRA)
│   ├── public
│   ├── src
│   └── package.json
│
├── server                # Backend (Node.js + Express + MongoDB)
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── dp.js            # MongoDB connection (uses MONGODB_URI)
│   ├── index.js         # Express app (CORS, JSON, routes)
│   └── package.json
│
└── pythonserver          # Python Microservice (Chatbot/AI)
    ├── app.py
    └── requirements.txt
```

---

## 📜 Scripts

- **Frontend (clone/package.json)**
  - `npm start` — Start React dev server
  - `npm run build` — Build for production

- **Backend (server/package.json)**
  - `npm run dev` — Start with nodemon
  - `npm start` — Start Node server

- **Python (pythonserver)**
  - `python app.py` — Start the microservice

---

## 🧪 Notes

- Ensure MongoDB URI is valid and accessible from your server.
- If hosting, update all frontend env URLs to the deployed backends.
- CORS must allow your frontend origin when running across domains.

---

## 📞 Contact

- **Name**: Praveen
- **Email**: praveen2004ttp@gmail.com
- **GitHub**: https://github.com/PRAVEEN-PR-2004
- **Portfolio**: https://praveen-pr-protfolio.netlify.app/

---

## 🔥 Conclusion

GT Holidays offers a seamless way for users to discover travel packages, submit inquiries, and interact with AI-powered assistance—backed by a robust Node/Express API and a dedicated Python microservice.

