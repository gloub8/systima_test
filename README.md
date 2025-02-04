# User Management App

## Overview

This project is a responsive User Management App built using Vue 3, TypeScript, and Vuetify. The application fetches user data from the JSONPlaceholder API and displays it in a structured format. Users can view a list of users and navigate to a detailed view for each user.

## Technologies Used

- **Vue 3** (Composition API for component-based architecture)
- **TypeScript** (for type safety and better maintainability)
- **Vuetify** (for consistent and responsive UI components)
- **Vue Router** (for navigation between pages)
- **Axios** (for API requests)

## Features

### User List Page

- Fetches user data from `https://jsonplaceholder.typicode.com/users`.
- Displays the data in a Vuetify `v-data-table`
- Enables row-click navigation to a detailed user view.

### User Detail Page

- Fetches user details dynamically from `https://jsonplaceholder.typicode.com/users/<userId>`.
- Displays detailed information
- Uses a Vuetify `v-card` for styling and layout.

### Responsiveness

- Fully responsive for desktop, tablet, and mobile views.
- Utilizes Vuetify’s grid system and responsive utilities.

### Bonus Features (Optional Enhancements)

- Added a search bar to filter users by name or email.

## Implementation Decisions

1. **Vue 3 with Composition API**: Chosen for better reusability and maintainability.
2. **Vuetify for UI**: Ensures a professional look with built-in responsiveness.
3. **TypeScript**: Improves type safety and helps catch potential errors early.
4. **Vue Router**: Manages navigation between the User List and User Detail pages efficiently.
5. **Axios for API Calls**: Provides better error handling and response interception compared to fetch.

## Setup Instructions

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd systima_test
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```
5. Open `http://localhost:5173/` (or as specified in the terminal) to view the app.
