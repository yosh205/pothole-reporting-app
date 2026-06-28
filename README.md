> **Project Status:** In active development.
>
> Current milestone: Backend API complete (CRUD foundation, PostgreSQL integration, MVC architecture).

# Pothole Tracker 🚧

Pothole Tracker is a full-stack mobile application that enables users to report, locate, and verify potholes using GPS, photos, and community confirmation. The goal of the project is to help drivers identify hazardous road conditions while providing municipalities with accurate, community-driven road maintenance data.

---

# Features

## Current Features

* REST API built with Node.js and Express
* PostgreSQL database
* MVC (Model-View-Controller) architecture
* Create new pothole reports
* Retrieve all pothole reports
* Community confirmation system for potholes
* Community confirmation count for each pothole
* API tested using Postman

## Planned Features

* User registration and authentication
* JWT-based login system
* Upload photos directly from mobile devices
* Interactive map using Google Maps
* GPS location detection
* Comments on pothole reports
* User profiles
* Search and filtering
* Severity indicators based on community confirmations
* Push notifications

---

# Tech Stack

## Backend

* Node.js
* Express.js
* PostgreSQL

## Mobile (Planned)

* React Native
* Google Maps API
* React Navigation

## Development Tools

* Visual Studio Code
* Git
* GitHub
* Postman

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
│   │   ├── models/
│   │   ├── routes/
│   │   ├── db.js
│   │   └── server.js
│   │
│   ├── package.json
│   ├── package-lock.json
│   └── .env (not committed)
│
└── mobile/ (coming soon)
```

---

# Current API Endpoints

## Potholes

| Method | Endpoint                 | Description                  |
| ------ | ------------------------ | ---------------------------- |
| GET    | `/api/potholes`          | Retrieve all pothole reports |
| POST   | `/api/potholes`          | Create a new pothole report  |
| POST   | `/api/potholes/:id/like` | Confirm a pothole report     |

---

# Database

Current tables:

* `potholes`
* `pothole_likes`

The database stores:

* GPS coordinates
* Description
* Image URL
* Creation date
* Community confirmation count

---

# Future Development

Pothole Tracker is currently under active development.

Planned milestones include:

* User authentication
* React Native mobile application
* Real-time GPS integration
* Photo uploads
* Interactive map
* Comments
* Additional road hazard categories
* Improved UI/UX
* Deployment to a cloud platform

---

# Author

**Joshua Indig**

Concordia University

Bachelor of Engineering in Software Engineering

