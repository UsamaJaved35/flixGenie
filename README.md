# FlixGenie

FlixGenie is a movie discovery application built with **React** that allows users to explore and browse through movies using the TMDB (The Movie Database) API. The app fetches various movie categories like "Now Playing," "Popular," and "Upcoming," and displays them with a user-friendly interface.

## Table of Contents
- [Features](#features)
- [Live Demo](#live-demo)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [API Integration](#api-integration)
- [Firebase Authentication](#firebase-authentication)

## Features
- **Explore Movies**: Browse movies by category, including Now Playing, Popular, and Upcoming.
- **Responsive Design**: The app is fully responsive and adapts to different screen sizes.
- **Custom Hooks**: Fetch movie data from TMDB using reusable hooks.
- **Memoization**: Prevents unnecessary API calls using `React.memo` and `useMemo`.
- **Mobile Sidebar**: A mobile-friendly sidebar navigation for easy access.

## Live Demo
[Live Demo](https://flixgenie.netlify.app/)


## Technologies Used
- **ReactJS**: Frontend framework for building the user interface.
- **Redux**: State management for handling application-wide data.
- **Tailwind CSS**: Utility-first CSS framework for fast and responsive styling.
- **TMDB API**: Used to fetch movie data.
- **React Router**: For routing between different pages in the application.

## Setup and Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/UsamaJaved35/flixGenie.git
    cd flixGenie
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your TMDB API key:
    ```bash
    REACT_APP_TMDB_API_KEY=your-tmdb-api-key
    REACT_APP_GROQ_API_KEY=your-groq-api-key
    REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
    REACT_APP_FIREBASE_PROJECT_ID=your-firebase-project-id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
    REACT_APP_FIREBASE_APP_ID=your-firebase-app-id
    ```

4. Start the development server:
    ```bash
    npm start
    ```

5. Open the app in your browser at `http://localhost:3000`.

## API Integration
FlixGenie uses the [TMDB API](https://www.themoviedb.org/documentation/api) to fetch movie data. You'll need an API key from TMDB to run this project.

1. Sign up for a TMDB account.
2. Go to your API settings and generate an API key.
3. Add the API key to your `.env` file as shown in the **Setup and Installation** section.

### API Endpoints Used
- **Now Playing Movies**: `/movie/now_playing`
- **Popular Movies**: `/movie/popular`
- **Upcoming Movies**: `/movie/upcoming`
- **Movie Details**: `/movie/{movie_id}`

## Firebase Authentication
FlixGenie uses Firebase Authentication to handle user sign-in and sign-up. To set up Firebase:

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project or use an existing one.
3. Navigate to the **Authentication** section and enable the sign-in methods you want to use (e.g., Email/Password).
4. Copy the Firebase configuration and add it to your `.env` file.

### Firebase Configuration
- **API Key**: `REACT_APP_FIREBASE_API_KEY`
- **Auth Domain**: `REACT_APP_FIREBASE_AUTH_DOMAIN`
- **Project ID**: `REACT_APP_FIREBASE_PROJECT_ID`
- **Storage Bucket**: `REACT_APP_FIREBASE_STORAGE_BUCKET`
- **Messaging Sender ID**: `REACT_APP_FIREBASE_MESSAGING_SENDER_ID`
- **App ID**: `REACT_APP_FIREBASE_APP_ID`
