Milestone 1 Overview

Introduction to the MERN stack (MongoDB, Express.js, React, Node.js) and explanation of why it's favored for its JavaScript-only approach, which streamlines development and is newbie-friendly.

Understanding REST API (Representational State Transfer) as an architectural style for building web services and building various API endpoints for:

-User Authentication: Register and log in users.

-Product Management: Add, update, and retrieve product data.

-Order Handling: Manage customer orders.

-Interaction with the database to serve data in a structured format (typically JSON).

Defining the structure and relationships of data in MongoDB Verifying user identity before allowing access to specific resources.


Milestone 2 Overview


We Started working on the frontend by making a login page with the help of React and styling the login page using tailwind css.


Milestone 3: Backend Setup


Backend Structure:

Created a clean folder hierarchy for the backend project (routes, controllers, models, middleware).
Set up a Node.js server with Express to handle API requests.
MongoDB Integration:

Integrated MongoDB to store data efficiently, and tested the connection for CRUD operations.
Error Handling:

Implemented basic error handling for better debugging and user feedback.

Milestone 5: React Signup Page

Features:

User Input Fields: Captured user data such as Full Name, Email, and Password.
Password Visibility Toggle: Provided users with an option to toggle password visibility.
Avatar Upload: Enabled users to upload an avatar image.
Form Submission: Form handles multipart/form-data for file uploads and integrates with the backend (via Axios).
Tech Stack:

React
React Icons
Axios for API requests
Tailwind CSS for styling
Setup:

Install the necessary dependencies:
npm install react-icons axios
Milestone 6: Password Encryption
Why Encrypting Passwords?

Protect User Data: Password encryption prevents exposure in case of a security breach.
Privacy: Ensures passwords are not visible to unauthorized individuals.
Compliance: Meets security standards like GDPR and PCI-DSS.
Stops Password Theft: Encrypted passwords are harder to steal or guess.
Tasks Completed:

Milestone 6: Password Encryption:

Implemented bcrypt to hash passwords during signup.
Ensured hashed passwords are stored in the database instead of plain text.
Storing Complete User Data:

Saved user information, including name, email, and other details, while keeping the password secure.
