```markdown
# 🎮 GameVerse

**GameVerse** is a dynamic online platform where users can explore a wide range of games, read reviews, add their own reviews, and interact with other gamers in the community. It combines entertainment with a rich, engaging user experience, making it the perfect destination for game enthusiasts.

## 🌐 Live Preview

- **Client Side:** [GameVerse Web App](https://gameverse-d7e8c.web.app/)
- **Server Side API:** [GameVerse Server](https://game-verse-server-six.vercel.app)

---

## ✨ Features

- 🎯 **Explore by Categories:** Browse games by various genres to discover new titles.
- ⭐ **Highest Rated Games:** See the most popular games based on user ratings.
- 📝 **Recent Reviews:** Stay updated with the latest reviews from other gamers.
- ✍️ **User Reviews and Ratings:** Add, update, and delete reviews to share your gaming experience.
- 📌 **Watchlist:** Save games to your watchlist to keep track of what you want to play.
- 🌗 **Dark Mode Support:** Switch between light and dark themes for a better user experience.
- 🔥 **Fast & Responsive UI:** Optimized with Vite, Tailwind CSS, and DaisyUI.
- 🔒 **User Authentication:** Secure login and registration with Firebase.

---

## 🛠 Tech Stack

### **Frontend:**
- React 18
- React Router
- Tailwind CSS & DaisyUI
- Lottie Animations
- SweetAlert2 (for interactive popups)
- React Icons & Animations

### **Backend & Database:**
- Firebase Authentication
- Firestore Database *(if used for storing data)*
- Vercel *(for API hosting)*

### **Development & Tools:**
- Vite (Fast build tool)
- ESLint (Code quality & linting)
- React Toastify (Notifications)
- LocalForage (Client-side caching)

---

## 🚀 Installation & Setup

### Prerequisites:
Make sure you have **Node.js** and **npm** installed.

### Steps to Run Locally:

1️⃣ **Clone the Repository:**
```bash
git clone https://github.com/your-username/gameverse.git
cd gameverse
```

2️⃣ **Install Dependencies:**
```bash
npm install
```

3️⃣ **Start the Development Server:**
```bash
npm run dev
```

The app should be running on **http://localhost:5173/**.

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and add the following:

```plaintext
VITE_apiKey=YOUR_FIREBASE_API_KEY
VITE_authDomain=YOUR_FIREBASE_AUTH_DOMAIN
VITE_projectId=YOUR_FIREBASE_PROJECT_ID
VITE_storageBucket=YOUR_FIREBASE_STORAGE_BUCKET
VITE_messagingSenderId=YOUR_FIREBASE_MESSAGING_SENDER_ID
VITE_appId=YOUR_FIREBASE_APP_ID
```

⚠️ **Never expose your Firebase credentials in public repositories!**

---

## 📁 Project Structure

```
gameverse/
│── src/
│   ├── components/     # Reusable components (Navbar, Footer, etc.)
│   ├── pages/          # Main pages (Home, Login, Reviews, etc.)
│   ├── providers/      # Context Providers (Auth, Theme)
│   ├── routes/         # Route Management (Public & Private Routes)
│   ├── styles/         # Global Styles & Tailwind Config
│   ├── main.jsx        # Root file with Router setup
│── public/             # Static assets
│── .env                # Environment variables
│── package.json        # Project dependencies & scripts
│── tailwind.config.js  # Tailwind Configuration
│── vite.config.js      # Vite Configuration
└── README.md           # Project documentation
```
