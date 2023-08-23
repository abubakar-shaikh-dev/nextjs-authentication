# Next.js 13 Authentication

![Next js Authentication](https://github.com/abubakar-shaikh-dev/nextjs-authentication/assets/64248752/fed125a3-6ddf-4339-b84f-d08e62715eab)

A demonstration of authentication using JSON Web Tokens (JWT) and MongoDB in a Next.js web application with TypeScript.

## Table of Contents

- [Project Details](#project-details)
- [Description](#description)
- [Technologies Used](#technologies-used)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Demo](#demo)
- [Repository Link](#repository-link)
- [Contact](#contact)
  
## Project Details

- **Repository Name:** Next.js Authentication
- **Bootstraped with:** Next.js version 13

## Description

This repository contains a Next.js web application with TypeScript that demonstrates authentication using JSON Web Tokens (JWT) and MongoDB. It emphasizes the importance of setting up environment variables for configuration.

## Technologies Used

- Next.js
- React.js
- JSON Web Tokens (JWT)
- MongoDB
- HTML
- CSS
- JavaScript
- Tailwind CSS
- TypeScript

## Environment Variables

Create a `.env` file in the root directory with the following environment variables:

```dotenv
# .env

MONGODB_URI=<Your MongoDB connection URI>
SECRET=<Your JWT secret key>
```

Replace `<Your MongoDB connection URI>` with the actual connection URI of your MongoDB database, and `<Your JWT secret key>` with a secure secret key for JWT token generation and verification.

*Note: The `.env.local` file should not be committed to version control as it may contain sensitive information.*

## Installation

To set up the project locally, you can choose one of the following package managers:

- **Yarn:** `yarn install`
- **npm:** `npm install`
- **pnpm (preferred):** `pnpm install`

## Running the Application

After the installation, run the Next.js application using the command:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

## Demo

Check out the live demo of the project: [Next.js Authentication Demo](https://nextjs-authentication-demo.vercel.app/)

## Repository Link

For more details, you can visit the repository on [GitHub](https://github.com/abubakar-shaikh-dev/nextjs-authentication).

## Contact

For any questions or issues, feel free to reach out to us at shaikhabubakar2380@gmail.com. We would love to hear from you!
