# Inclusive Career Platform for Differently Abled People

This project was developed as a group project. My primary contributions were the integration of various project modules and the development of the AI-powered gesture recognition system using TensorFlow, MediaPipe, OpenCV, Flask, and Firebase integration.

A web-based career guidance platform designed to help differently-abled individuals discover suitable career opportunities through personalized assessments, career recommendations, mentorship support, government scheme information, and accessibility-focused features including gesture-based interaction.

### Key Features

* Personalized career assessment and recommendations
* 15+ career domains and career pathways
* Mapping 21 disabilities
* Government schemes and employment opportunities
* Gesture-based accessibility controls
* User authentication and profiles
* Responsive and accessible design

### Tech Stack

* Frontend: HTML, CSS, JavaScript (ES6)
* Backend: Firebase Authentication & Firestore
* ML Backend: Python, Flask
* AI/ML: TensorFlow, MediaPipe, OpenCV

## Prerequisites

* Node.js (v14+)
* Python (v3.8+) *(optional for gesture recognition)*
* Firebase Project

## 1. Clone Repository

```bash
git clone <repository-url>
cd <project-folder>
```

## 2. Configure Firebase

Go to:

```text
Firebase Console → Project Settings → General → Your Apps → Web App
```

Copy the configuration values provided by Firebase and replace them in `firebase.js` and `firebase-service.js`.

## 3. Firebase Setup

* Create a Firebase project
* Enable Authentication (Email/Password)
* Enable Firestore Database

## 4. Install Dependencies

```bash
npm install
```

## 5. Run the Application

```bash
npm start
```

Open:

```text
http://localhost:8000
```

## Gesture Recognition Setup

```bash
cd src/ml
python -m venv venv

# Windows
venv\Scripts\activate

pip install -r requirements.txt
python gesture_server.py
```
