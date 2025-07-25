# Chess Timer - Productivity Timer App

A modern web application built with React, TypeScript, and Vite that helps users track their productive time vs. break time. Perfect for implementing time management techniques like the Pomodoro method.

## 🚀 Features

- **Dual Timer System**: Track both productive work time and break time separately
- **Real-time Clock Display**: Visual countdown with clear time formatting
- **Toggle Switch Interface**: Easy switching between "User (Productive)" and "Time Off (Lazy)" modes
- **Start/Stop/Reset Controls**: Full control over timer operations
- **Modern UI**: Built with Chakra UI for a clean, responsive design
- **TypeScript**: Fully typed for better development experience

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **UI Framework**: Chakra UI
- **Styling**: Custom components with modern design
- **Backend**: Node.js + Express + MongoDB (in development)
- **Containerization**: Docker + Docker Compose

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Docker Desktop (for backend development)

### Frontend Development
```bash
# Clone the repository
git clone <your-repo-url>
cd chess-timer

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Backend Development (Optional)
```bash
# Start backend and MongoDB with Docker
docker-compose up --build
```

The backend API will be available at `http://localhost:5000`

## 🎯 How to Use

1. **Start the Timer**: Click the "Start" button to begin tracking time
2. **Switch Modes**: Use the toggle switch to alternate between:
   - **User (Productive)**: Track your focused work time
   - **Time Off (Lazy)**: Track your break time
3. **Monitor Progress**: Watch the real-time clock display
4. **Control**: Use "Stop" to pause or "Reset" to start over

## 🔧 Development

This project uses modern development practices:

- **TypeScript** for type safety
- **ESLint** for code quality
- **Vite** for fast development and building
- **Chakra UI** for consistent, accessible components

## 📝 Future Enhancements

- [ ] Backend API integration for data persistence
- [ ] User authentication and profiles
- [ ] Statistics and analytics dashboard
- [ ] Customizable timer intervals
- [ ] Sound notifications
- [ ] Export/import functionality

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

*Built with ❤️ using React, TypeScript, and modern web technologies*
