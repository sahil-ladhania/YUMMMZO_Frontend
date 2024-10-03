# YUMMMZO - Food Delivery App

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction
YUMMMZO is a food delivery application that allows users to order food online while providing personalized recommendations based on user behavior, preferences, dietary restrictions, time of day, and local weather. The app is designed for three main user roles: **Users**, **Restaurant Owners**, and **Delivery Partners**, each with their own dedicated dashboards.

## Features
### Common Features
- User, Restaurant Owner, and Delivery Partner authentication and authorization.
- Notifications for the latest offers.

### Features for Restaurant Owners
- Restaurant and Menu Management (create, update, delete).
- Order Management (view and update received orders).

### Features for Users
- Browse and filter restaurants and menus.
- Cart management, checkout process, and order tracking.
- Rate and review restaurants and menu items.
- AI-powered food recommendations.

### Features for Delivery Partners
- Delivery management (check available orders, accept/reject orders).
- Update delivery status and view delivery history.

## Technologies Used
- **Frontend:** ReactJS, Redux , Tailwind CSS, Shadcn
- **Backend:** NodeJS, ExpressJS
- **Database:** MySQL
- **ORM:** Prisma

## Folder Structure
```plaintext
/src
  /assets               # Static files (icons, images, etc.)
  /components           # Components for different dashboards
  /layouts              # Layout components
  /pages                # Main page components
  /redux                # State management
  /hooks                # Custom hooks
  /utils                # Utility functions
  /styles               # Global and component-level styles
  /services             # API calls and integrations
```
## Installation
To get started with the project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/yummmzo.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd yummmzo
   ```

3. **Install the dependencies:**
   ```bash
   npm install 
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser and go to http://localhost:5173 to view the application.**
