# BudgetBuddy Frontend

This project is a React-based frontend built with Vite. It provides a user interface for tracking transactions, managing financial goals, and adjusting settings like theme toggling. 

## Features
- User authentication (login/signup)
- Transaction management
- Goal tracking and progress updates
- Responsive navigation with sidebar and navbar
- Integrated theming (light & dark)

## Installation
1. Make sure [Node.js](https://nodejs.org/) is installed.
2. In the project root, install dependencies:
   ```sh
   npm install
   ```

## Available Scripts
- **`npm run dev`**: Runs the development server.
- **`npm run build`**: Builds the app for production.
- **`npm run preview`**: Previews the production build.

## Environment Variables
Create a `.env` file in the project root (if needed) and add:
```
REACT_APP_API_URL=http://localhost:5000
```

## File Structure
- **`index.html`**: Entry point.
- **`src/`**: Contains components, pages, context, and utilities.
- **`public/`**: Static assets.
- **`vite.config.js`**: Vite configuration.

## Technologies
- React
- Vite
- React Router
- Axios

## Contributing
Feel free to open issues or submit pull requests.

## License
MIT
