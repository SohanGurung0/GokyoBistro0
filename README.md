# Gokyo Bistro Web Application

Welcome to the **Gokyo Bistro** web application repository. This is a luxurious, high-end web app for a Himalayan-inspired restaurant, featuring a modern React frontend and a Spring Boot Java backend.

## Tech Stack
- **Frontend**: React (Vite), Vanilla CSS (Glassmorphism design)
- **Backend**: Java 17, Spring Boot, Gradle
- **Deployment**: Docker & Docker Compose

## Project Structure
- `/frontend`: Contains the Vite React monolithic application.
- `/backend`: Contains the Java Spring Boot REST API.
- `docker-compose.yml`: For rapid containerized deployment of the entire stack.

## Features
- Dynamic menu fetching (with graceful offline fallback).
- Customer Review subsystem with dynamic visual Star Ratings.
- Interactive Feedback Submission form allowing immediate UI updates.
- Luxurious dark-themed user interface out-of-the-box using pure Vanilla CSS.

## How to Run

### Method 1: Using Docker (Recommended)
You can launch both the frontend and the backend simultaneously using Docker. Open a terminal at the root of the project and execute:
```bash
docker-compose up --build
```
The Frontend will be available at `http://localhost:80` (or `http://localhost:5173`).
The Backend API will be available at `http://localhost:8080`.

### Method 2: Manual Development

**1. Running the Frontend Server:**
```bash
cd frontend
npm install
npm run dev
```
Navigate to `http://localhost:5173` to view the UI.

**2. Running the Java Backend:**
```bash
cd backend
# On Windows
.\gradlew.bat bootRun

# On Unix/Mac
./gradlew bootRun
```
