# EmployWise User Management Application

## Project Overview

This is a React-based User Management Application that integrates with the Reqres API to provide authentication, user listing, editing, and deletion functionalities.

## Features

- User Authentication
- Paginated User List
- User Edit and Delete Functionality
- Responsive Design using Material-UI
- Error Handling
- Token-based Authentication

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

## Technologies Used

- React
- Material-UI
- Axios
- React Router
- Local Storage for Authentication

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aabidraina6/EmployWise-Assignment.git
   ```

2. Navigate to the project directory:
   ```bash
   cd EmployWise-Assignment
   ```

3. Install dependencies:
   ```bash
   npm install
   ```



## Running the Application

Start the development server:
```bash
npm start
```

The application will run on `http://localhost:3000`

## Login Credentials

- Email: eve.holt@reqres.in
- Password: cityslicka

## Project Structure

```
src/
│
├── pages/
│   ├── Login/
│   ├── UserList/
│   └── EditUser/
└── App.js
```

## Key Features Implemented

- [x] Authentication Screen
- [x] Paginated User List
- [x] User Edit Functionality
- [x] User Delete Functionality
- [x] Responsive Design
- [x] Error Handling

## Assumptions and Considerations

1. Authentication token is stored in local storage
2. Redirect to login page if token is missing or expired
3. Material-UI used for consistent and responsive design
4. Axios used for API requests
5. React Router used for navigation

## Error Handling

- Graceful error messages for failed API calls
- Form validation on login and edit screens
- Unauthorized access redirects to login page

## Bonus Features

- Deployed the application to Render. 
- React Router for navigation

## Deployment
- The project is deployed on Render. [EmployWise User Management App](https://employwise-assignment-yang.onrender.com/)

## Future Improvements

- Add more robust authentication
- Implement refresh token mechanism
- Enhanced error handling
- More comprehensive form validations

## Troubleshooting

- Ensure all dependencies are installed correctly
- Check browser console for any error messages
