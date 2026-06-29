> **Project Status:** In active development.
>
> **Current Milestone:** Backend API complete with authentication, image uploads, and community features. React Native mobile application in development.

# Pothole Tracker 🚧

Pothole Tracker is a full-stack mobile application that enables users to report, locate, and verify potholes using GPS, photos, and community confirmation. The goal of the project is to help drivers identify hazardous road conditions while providing municipalities with accurate, community-driven road maintenance data.

---

# Features

## Current Features

### Backend

* REST API built with Node.js and Express
* PostgreSQL database
* MVC (Model-View-Controller) architecture
* JWT-based authentication
* User registration and login
* Password hashing with bcrypt
* Protected API routes

### Pothole Reporting

* Create new pothole reports
* Upload pothole images
* Retrieve all pothole reports
* Retrieve individual pothole reports
* Associate potholes with registered users

### Community Features

* Community confirmation (like/unlike) system
* Live confirmation count for each pothole
* Comment system for pothole reports
* User ownership of reports

### Development

* API tested using Postman
* Git version control
* GitHub repository with milestone-based commits

---

## Planned Features

* React Native mobile application
* Login and registration screens
* Interactive Google Maps integration
* Automatic GPS location detection
* Camera integration for taking photos
* User profiles
* Search and filtering
* Severity indicators based on community confirmations
* Push notifications
* Deployment to a cloud platform

---

# Tech Stack

## Backend

* Node.js
* Express.js
* PostgreSQL
* JWT Authentication
* bcrypt
* Multer (image uploads)

## Mobile

* React Native
* Expo
* Google Maps API (planned)
* React Navigation (planned)

## Development Tools

* Visual Studio Code
* Git
* GitHub
* Postman
* Expo Go

---

# Project Structure

```text
pothole-tracker/
│
├── README.md
├── .gitignore
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── db.js
│   │   └── server.js
│   │
│   ├── uploads/
│   ├── package.json
│   ├── package-lock.json
│   └── .env (not committed)
│
└── mobile/
    ├── app/
    ├── assets/
    ├── components/
    └── ...
```

---

# Current API Endpoints

## Users

| Method | Endpoint              | Description         |
| ------ | --------------------- | ------------------- |
| POST   | `/api/users/register` | Register a new user |
| POST   | `/api/users/login`    | Authenticate a user |

## Potholes

| Method | Endpoint                 | Description                  |
| ------ | ------------------------ | ---------------------------- |
| GET    | `/api/potholes`          | Retrieve all pothole reports |
| GET    | `/api/potholes/:id`      | Retrieve a single pothole    |
| POST   | `/api/potholes`          | Create a pothole report      |
| POST   | `/api/potholes/:id/like` | Confirm a pothole            |
| DELETE | `/api/potholes/:id/like` | Remove a confirmation        |

## Comments

| Method | Endpoint                     | Description       |
| ------ | ---------------------------- | ----------------- |
| GET    | `/api/potholes/:id/comments` | Retrieve comments |
| POST   | `/api/potholes/:id/comments` | Add a comment     |

---

# Database

Current tables:

* `users`
* `potholes`
* `pothole_likes`
* `comments`

The database stores:

* User accounts
* GPS coordinates
* Pothole descriptions
* Uploaded image paths
* Creation dates
* Community confirmations
* User comments

---

# Future Development

Current development focuses on the React Native mobile application.

Upcoming milestones include:

* Mobile authentication
* Display potholes on an interactive map
* GPS-based reporting
* Camera integration
* User profile pages
* Search and filtering
* Push notifications
* Cloud deployment

---

# Author

**Joshua Indig**

Concordia University

Bachelor of Engineering in Software Engineering


