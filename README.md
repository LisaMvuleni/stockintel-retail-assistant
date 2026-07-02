<div align="center">

# 📦 StockIntel

### AI-Powered Retail Employee Assistant

An enterprise retail management platform that combines **Artificial Intelligence** with modern software engineering to streamline inventory management, sales tracking, and employee assistance.

---

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![ASP.NET](https://img.shields.io/badge/ASP.NET_Core-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![C#](https://img.shields.io/badge/C%23-68217A?style=for-the-badge&logo=csharp&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![RabbitMQ](https://img.shields.io/badge/RabbitMQ-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Gemini](https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

</div>

---

# 📖 Overview

**StockIntel** is an AI-powered internal retail management system designed to improve operational efficiency within retail stores.

Rather than navigating through multiple systems, employees can interact with an intelligent AI assistant using natural language to retrieve inventory information, sales reports, and product details.

The application combines traditional enterprise software development with modern AI technologies to provide fast, reliable, and intelligent retail operations.

---

# ✨ Features

- 🔐 JWT Authentication
- 👥 Role-Based Access Control
- 📦 Product Management
- 📊 Inventory Management
- 💰 Sales Management
- 🤖 AI Employee Assistant
- 📈 Dashboard Analytics
- 💬 AI Chat History
- ⚡ RabbitMQ Background Processing
- 🐳 Dockerized Deployment

---

# 🛠 Technology Stack

## Frontend

- ⚛️ React
- 📘 TypeScript

## Backend

- 💜 ASP.NET Core Web API (.NET 9)
- C#
- Entity Framework Core

## Database

- 🐘 PostgreSQL

## AI

- ✨ Google Gemini API
- Function Calling
- Prompt Engineering

## Messaging

- 🐇 RabbitMQ

## DevOps

- 🐳 Docker
- Docker Compose

## Authentication

- 🔐 JWT Authentication

## Version Control

- Git
- GitHub

---

# 🏗 System Architecture

```text
                    React Frontend
                           │
                           ▼
                    REST API (HTTPS)
                           │
                           ▼
             ASP.NET Core Web API
                           │
      ┌──────────────┬──────────────┬──────────────┐
      │              │              │
      ▼              ▼              ▼
 PostgreSQL      RabbitMQ      Gemini API
  Database     Message Queue   AI Services
      │
      ▼
 Background Workers
```

---

# 🤖 AI Workflow

1. Employee submits a question.
2. The backend sends the request to Google Gemini.
3. Gemini identifies the user's intent.
4. ASP.NET Core retrieves verified data from PostgreSQL.
5. Gemini formats the response into natural language.
6. RabbitMQ processes background tasks such as logging and notifications.

> **Note:** The AI never accesses the database directly. All business data is retrieved securely through backend services.

---

# 📂 Project Structure

```text
StockIntel
│
├── frontend/
├── backend/
├── database/
│   ├── migrations/
│   ├── seed/
│   └── scripts/
│
├── docker/
├── docs/
│   ├── BRD/
│   ├── SRS/
│   ├── ERD/
│   ├── API/
│   └── Images/
│
├── .github/
│   └── workflows/
│
├── README.md
├── LICENSE
└── docker-compose.yml
```

---

# 🚀 Future Enhancements

- 🎤 Voice-enabled AI Assistant
- 📷 Barcode Scanning
- 📱 Mobile Application
- 📊 Predictive Stock Forecasting
- 🧠 AI Sales Insights
- 🏪 Multi-Store Support
- 📄 PDF & Excel Report Export
- 🔔 Real-Time Notifications

---

# 👨‍💻 Development Team

| Name | Role |
|------|------|
| **Lisa Mvuleni** | Software Developer |
| **Yanda Kiviet** | Quality Engineer |

---

# 📄 License

This project is licensed under the **MIT License**.

---

<div align="center">

### ⭐ If you found this project interesting, consider giving it a star!

Made with ❤️ using React, ASP.NET Core, PostgreSQL, RabbitMQ, Docker & Google Gemini.

</div>
