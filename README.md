# TaskFlow - Employee Management

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 🛠️ Technologies Used

- **React.js** – Frontend framework
- **JavaScript (ES6+)** – Application logic
- **Tailwind CSS** – Styling and responsive UI
- **Vite** – Development and build tool
- **LocalStorage** – Persistent data storage
- **React Context API** – State management
- **HTML5 & CSS3** – Structure and styling

## 📂 Project Structure

```text
src/
├── components/
│   ├── Auth/
│   │   └── Login.jsx
│   │
│   ├── Dashboard/
│   │   ├── AdminDashboard.jsx
│   │   └── EmployeeDashboard.jsx
│   │
│   ├── TaskList/
│   │   ├── NewTask.jsx
│   │   ├── AcceptTask.jsx
│   │   ├── CompleteTask.jsx
│   │   ├── FailedTask.jsx
│   │   └── TaskList.jsx
│   │
│   ├── other/
│   │   ├── CreateTask.jsx
│   │   ├── Header.jsx
│   │   └── AllTask.jsx
│   │
│   ├── context/
│   │   └── AuthProvider.jsx
│   │
│   └── utils/
│       └── localStorage.js
│
├── App.jsx
├── App.css
└── main.jsx
