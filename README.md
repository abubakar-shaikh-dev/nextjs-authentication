# Next.js 13 Authentication

![Next js Authentication](https://github.com/abubakar-shaikh-dev/nextjs-authentication/assets/64248752/fed125a3-6ddf-4339-b84f-d08e62715eab)

This repository contains a demonstration of authentication using JSON Web Tokens (JWT) and MongoDB in a Next.js web application with TypeScript.

## Table of Contents

- [Project Details](#project-details)
- [Description](#description)
- [Technologies Used](#technologies-used)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Demo](#demo)
- [Contact](#contact)

## Project Details

- **Repository Name:** Next.js Authentication
- **Bootstraped with:** Next.js version 13

## Description

This Next.js web application with TypeScript demonstrates authentication using JSON Web Tokens (JWT) and MongoDB. It emphasizes the importance of configuring environment variables.

## Technologies Used

- Next.js
- React.js
- Tailwind CSS
- TypeScript
- JSON Web Tokens (JWT)
- MongoDB

## Environment Variables

Create a `.env` file in the root directory with the following environment variables:

```dotenv
MONGODB_URI=<Your MongoDB connection URI>
SECRET=<Your JWT secret key>
```

Replace `<Your MongoDB connection URI>` with your MongoDB database's connection URI and `<Your JWT secret key>` with a secure key for JWT token operations.

*Note: The `.env` file should not be committed to version control as it may contain sensitive information.*

## Installation

To set up the project locally, you can use one of the following package managers:

- **Yarn:** `yarn install`
- **npm:** `npm install`
- **pnpm (preferred):** `pnpm install`

## Running the Application

After installation, run the Next.js application using this command:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

## Demo

Explore the live demo of the project: [Next.js Authentication Demo](https://nextjs-authentication-demo.vercel.app/)

## Contact

For inquiries or issues, feel free to contact us at shaikhabubakar2380@gmail.com. We'd love to hear from you!
