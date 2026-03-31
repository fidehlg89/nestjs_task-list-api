# 📝 Task List API

A modern, fast REST API built with [NestJS](https://nestjs.com/), [Prisma ORM](https://www.prisma.io/), and MySQL.

## 🚀 Features

- **NestJS** structure (Controllers, Services, Modules)
- **Prisma** for strongly-typed database access
- Automatic database schema synchronization and seeding
- TypeScript configuration tailored for modern environments

## 🛠 Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/en/) (v16 or higher recommended)
- [MySQL](https://www.mysql.com/) database server running locally or remotely.

## ⚙️ Environment Setup

Create a `.env` file in the root directory (or update the existing one) with your MySQL connection string.

```bash
DATABASE_URL="mysql://root:1234@localhost:3306/tasks"
```
> Change `root:1234` to your actual database credentials and `tasks` to your preferred database name.

## 📦 Installation

```bash
npm install
```

## 🏗 Running the App

The project comes with a convenient development script that automatically resets the database, applies migrations, and runs the application in watch mode.

```bash
# Starts the app and resets/syncs the database models
# (Note: Reset is forced automatically to prevent the script from hanging)
npm run start:dev

# Standard run mode
npm run start

# Production build mode
npm run start:prod
```

## 🧪 Testing

```bash
# Unit tests
npm run test

# e2e tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## 📄 License

This project is licensed under the MIT License.
