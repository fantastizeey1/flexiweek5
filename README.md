# Countdown Timer App ⏳

A **Countdown Timer** app built with React to demonstrate the use of React hooks like `useState`, `useEffect`, `useRef`, and a custom hook (`useCountdown`). The app allows users to set a countdown, start the timer, and reset it to the initial value. This project is styled with **Tailwind CSS** for a modern, responsive design.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Hooks Used](#hooks-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Styling](#styling)
- [License](#license)

## Demo

![Demo Screenshot](/flexiweek5/public/Screenshot.png)

You can set a countdown in seconds, and the timer will start automatically. There's also an option to reset the timer to the original input.

## Features

- ⏱ Set custom countdown times.
- 🕒 Automatically decrements time every second.
- 🔄 Reset functionality to start over.
- 🎨 Responsive and fun UI styled with **Tailwind CSS**.
- 🚀 Built using React functional components and hooks.

## Hooks Used

### 1. **useState**

- Tracks the countdown time and stores user input.
- Manages the state of the timer.

### 2. **useEffect**

- Controls the timer logic.
- Starts the countdown and handles cleanup when the component unmounts or the timer stops.

### 3. **useRef**

- Stores the interval reference to manage the countdown interval without triggering re-renders.

### 4. **Custom Hook (`useCountdown`)**

- Encapsulates the countdown logic in a reusable hook that can be applied to any component needing a countdown feature.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/countdown-timer-app.git
   ```

Navigate to the project directory:

bash
Copy code
cd countdown-timer-app
Install the dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Open the app in your browser at http://localhost:3000.

Usage
Enter the countdown time (in seconds) in the input field.
The timer will start automatically and display the remaining time.
Use the "Reset" button to start over with the original time you set.
Project Structure

```bash
Copy code
├── public
│ └── index.html
├── src
│ ├── components
│ │ ├── CountdownTimer.jsx # Main countdown timer component
│ │ ├── useCountdown.jsx # Custom hook to manage countdown logic
│ ├── App.jsx # Root component
│ └── index.css # Tailwind CSS setup
├── package.json
├── tailwind.config.js # Tailwind configuration file
└── README.md # You're here!
```

### Styling

The app is styled using Tailwind CSS, which provides utility classes for rapid UI development. The design incorporates:

Gradient Background: A colorful gradient background from blue to purple to pink.
Responsive Design: Ensures the app looks great on all screen sizes.
Hover Effects: Adds interactive transitions and scaling on hover.
Feel free to modify the Tailwind classes in App.jsx and CountdownTimer.jsx to tweak the design to your liking.

License
This project is licensed under the MIT License. Feel free to use and modify the code as per your needs!

Made with 💙 by [Prevail]

### Key Components of the README:

1. **Project Overview**: Explains the purpose of the app and which React hooks are demonstrated.
2. **Table of Contents**: Helps users navigate the document.
3. **Features**: Highlights the core features of the app.
4. **Hooks Explanation**: Provides a breakdown of the React hooks used and their purpose in the app.
5. **Installation**: Step-by-step instructions to get the app running locally.
6. **Usage**: Quick guide on how to use the app once it's running.
7. **Project Structure**: Visualizes the file/folder structure to help users find their way around the project.
8. **Styling**: Mentions Tailwind CSS and explains its role in the design.
9. **License**: Standard open-source licensing information.

You can adjust this file further by including a live link to your project, adding screenshots, or linking to your GitHub repository if needed!
