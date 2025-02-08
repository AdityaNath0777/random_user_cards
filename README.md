# Random User Card Generator

## Overview

This project is a React-based profile card list that fetches user data from an API and displays it in a responsive grid layout. Each profile card presents key user details such as name, gender, and contact information. The application ensures smooth user experience with proper loading states, error handling, and interactive UI elements.

## Features

- Fetches user data dynamically from an API.
- Displays user profiles in a structured grid format.
- Implements loading and error handling for better user experience.
- Fully responsive design using Tailwind CSS.
- Smooth hover effects and basic animations.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/AdityaNath0777/random_user_cards.git
   cd profile-card-list
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

## Components

### `ProfileCardList.jsx`
- Fetches and manages user data using a custom `useUsers()` hook.
- Displays profile cards in a responsive grid.
- Handles loading and error states effectively.

### `ProfileCard.jsx`
- Presents individual user details in a visually appealing format.
- Includes hover effects for better interaction.
- Ensures accessibility and handles missing data gracefully.

### `ProfileCardSection.jsx`
- Contains pagination controls, including "Next" and "Previous" buttons.
- Allows users to adjust the number of cards displayed per page.
- Renders ProfileCardList component

## Demo Screenshots

### Home and Profile Card Hover Effect
![Profile Card List](demo/screenshots/01_home%20and%20card%20hover.png)  
_Home page displaying random user profile cards with hover effects._

### Loading Effect
![Loading](demo/screenshots/02_Loading.png)  
_A loader appears while fetching the next batch of users._

### Changing Cards per Page
![Card per page](demo/screenshots/03_change%20card%20count.png)  
_Option to modify the number of profile cards displayed per page._

### Error Boundary and Fallback UI
![Error Boundary](demo/screenshots/04_Error%20Boundary.png)  
_Error boundary with fallback UI in case of API failures._

## Technologies Used

- React.js
- Tailwind CSS
- randomuser.me API
- CRA for boilerplate
