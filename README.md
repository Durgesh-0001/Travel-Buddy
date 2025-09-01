# BudgetBuddy

BudgetBuddy is a full-stack application that helps you manage your finances through intuitive transaction tracking and goal-setting features. The project consists of two main parts:

- **Frontend:** A React-based application that serves as the user interface.
- **Backend:** An Express.js API that manages user data, transactions, and financial goals.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Configuration](#configuration)
- [Usage](#usage)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication:** Register, log in, update profiles, and logout.
- **Transaction Management:** Add, update, view, and delete financial transactions.
- **Goal Tracking:** Create, update, and delete financial goals.
- **Responsive Design:** Optimized for both desktop and mobile use.
- **Secure API:** JWT-based authentication with cookie management and CORS support.

## Installation

### Frontend Setup

1. Navigate to the frontend directory.
   ```sh
   cd path/to/frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the frontend root and set your API URL:
   ```
   REACT_APP_API_URL=http://localhost:5000
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

### Backend Setup

1. Navigate to the backend directory.
   ```sh
   cd path/to/backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the backend root and add the required variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173
   PORT=5000
   ```
4. Start the backend server:
   ```sh
   npm start
   ```
   or
   ```sh
   node app.js
   ```

## Configuration

- **Frontend:**  
  Set the API base URL in the `.env` file using the `REACT_APP_API_URL` key.

- **Backend:**  
  Configure the following environment variables in the `.env` file:
  - `MONGO_URI`: Your MongoDB connection string.
  - `JWT_SECRET`: Secret key for JWT authentication.
  - `ALLOWED_ORIGINS`: Comma-separated list of allowed origins.
  - `PORT`: Port on which the backend will run (default is 5000).

## Usage

1. **Run the Backend:** Start the API server as described above.
2. **Run the Frontend:** Start the development server and open the application in your browser.
3. **Interact with the App:** Sign up or log in, then manage your transactions and financial goals through the intuitive interface.

## Technologies

- **Frontend:**
  - React
  - Vite
  - React Router
  - Axios
- **Backend:**
  - Express.js
  - Mongoose
  - JWT Authentication
  - Multer (for file uploads)
  - Cloudinary (for image uploads, if applicable)
  - Dotenv, Cookie-Parser, CORS

## Project Structure

### Frontend
```
frontend/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── App.jsx
│   └── index.jsx
├── package.json
└── vite.config.js
```

### Backend
```
backend/
├── controllers/
├── models/
├── routes/
│   ├── userRoutes.js
│   ├── transactionRoutes.js
│   └── goalRoutes.js
├── middlewares/
├── db/
│   └── db.js
├── config/
├── app.js
├── package.json
└── .env
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.

## License

This project is licensed under the MIT License.
