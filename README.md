# MERN-MINDBOARD

A full-stack collaborative note-taking application built with the MERN stack (MongoDB, Express, React, Node.js). MERN-MINDBOARD allows users to create, view, and manage notes efficiently, with built-in rate limiting and a modern UI.

## Features
- Create, read, update, and delete notes
- Rate limiting to prevent abuse
- Responsive and modern UI (Tailwind CSS)
- RESTful API backend
- Modular code structure

## Tech Stack
- **Frontend:** React, Vite, Tailwind CSS, Axios
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Other:** Upstash (for rate limiting), ESLint, PostCSS

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)

### 1. Clone the Repository
```bash
git clone https://github.com/fenil321/mern-mindboard.git
cd MERN-MINDBOARD
```

### 2. Setup Backend
```bash
cd backend
npm install
```

#### Configure Environment Variables
Create a `.env` file in the `backend` directory with the following:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
# Add any Upstash or other secrets as needed
```

#### Start Backend Server
```bash
npm start
```

### 3. Setup Frontend
```bash
cd ../frontend
npm install
```

#### Start Frontend Dev Server
```bash
npm run dev
```

The frontend will typically run on [http://localhost:5173](http://localhost:5173) and the backend on [http://localhost:5000](http://localhost:5000).
