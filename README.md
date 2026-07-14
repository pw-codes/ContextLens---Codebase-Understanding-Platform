# 🚀 ContextLens — AI Codebase Understanding Platform

<div align="center">

### **Understand Any Codebase in Minutes, Not Weeks.**

**ContextLens** is an AI-powered developer intelligence platform that analyzes an entire software repository, understands its architecture, and explains it like a senior software engineer.

Upload a project (or connect a GitHub repository), and ContextLens automatically generates architecture diagrams, dependency graphs, project documentation, and allows developers to ask natural-language questions about the codebase.

> **"Don't just generate code. Understand it."**

---

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6)
![Python](https://img.shields.io/badge/FastAPI-009688)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E)
![Gemini AI](https://img.shields.io/badge/Gemini-AI-blue)
![MIT License](https://img.shields.io/badge/License-MIT-green)

</div>

---

# 📌 Problem Statement

Modern software projects are becoming increasingly complex.

A new developer joining an existing project often spends **days or even weeks** trying to understand:

* Project architecture
* Folder structure
* Authentication flow
* API communication
* Database design
* Business logic
* Dependencies between modules

Documentation is frequently outdated or missing altogether, making onboarding slow and frustrating.

Current AI coding assistants primarily focus on **writing code**, but very few help developers **understand existing codebases**.

---

# 💡 Our Solution

ContextLens acts like a **Senior Software Architect** for any repository.

Simply upload a project, and the platform automatically:

* Analyzes the repository
* Detects the technology stack
* Generates dependency graphs
* Creates architecture diagrams
* Produces technical documentation
* Answers developer questions using AI
* Explains how different modules interact

Instead of reading hundreds of files manually, developers can simply ask:

> **"How does authentication work?"**

or

> **"Where are API calls handled?"**

and receive accurate, contextual answers.

---

# 🎯 Vision

To become the **AI-powered knowledge layer** for software engineering teams.

Future vision includes:

* AI-powered onboarding
* Architecture intelligence
* Repository health scoring
* Code ownership analysis
* Technical debt detection
* Pull Request impact analysis
* Enterprise developer knowledge platform

---

# ✨ Features

## 📂 Repository Upload

* Upload ZIP files
* GitHub Repository Integration *(Planned)*
* Automatic repository indexing

---

## 🧠 AI Repository Understanding

* Project summary
* Folder summaries
* File summaries
* Module explanations
* Architecture overview
* Business logic explanation

---

## 💬 AI Repository Chat

Ask questions like:

* How does authentication work?
* Explain project architecture.
* Where is JWT implemented?
* Which files handle API requests?
* Explain database flow.
* How does user login work?

---

## 📊 Dependency Graph

Visual representation of

* Components
* Services
* API Calls
* Modules
* Imports
* Relationships

---

## 🏗 Architecture Generator

Automatically creates

* High-Level Architecture
* Module Relationships
* Service Flow
* Request Flow
* Data Flow

---

## 📖 Documentation Generator

Automatically generates

* README
* Installation Guide
* Folder Documentation
* API Documentation
* Project Summary
* Technology Stack Documentation

---

## 🔍 Smart Search

Search by

* File
* Function
* Class
* API Route
* Component

---

## 📈 Dashboard

Displays

* Repository Statistics
* Programming Languages
* Framework Detection
* Component Count
* Dependency Count
* Complexity Score

---

# 🏛 System Architecture

```text
                User
                  │
                  ▼
        Next.js Frontend
                  │
                  ▼
          FastAPI Backend
                  │
      ┌───────────┼────────────┐
      ▼           ▼            ▼
 Repository    AI Engine    Database
   Parser      (Gemini)    (Supabase)
      │           │            │
      └──────┬────┴──────┬─────┘
             ▼           ▼
      Repository Analysis
             │
             ▼
     Dependency Graph
             │
             ▼
   Documentation Generator
             │
             ▼
       AI Repository Chat
```

---

# 🛠 Tech Stack

## Frontend

* Next.js 15
* TypeScript
* Tailwind CSS
* shadcn/ui
* React Flow

---

## Backend

* FastAPI
* Python

---

## Database

* PostgreSQL
* Supabase

---

## AI

* Google Gemini API

---

## Parsing Engine

* Tree-sitter
* AST Analysis

---

## Visualization

* Mermaid
* React Flow

---

## Deployment

* Vercel
* Render

---

## Version Control

* Git
* GitHub

---

# 📁 Project Structure

```text
contextlens/

├── frontend/
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── services/
│   ├── styles/
│   ├── types/
│   └── lib/
│
├── backend/
│   ├── api/
│   ├── ai/
│   ├── parser/
│   ├── graph/
│   ├── repository/
│   ├── database/
│   ├── services/
│   ├── models/
│   ├── utils/
│   └── main.py
│
├── docs/
├── shared/
├── tests/
├── scripts/
├── docker/
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/contextlens.git
```

```bash
cd contextlens
```

---

## Frontend

```bash
cd frontend
```

```bash
npm install
```

```bash
npm run dev
```

---

## Backend

```bash
cd backend
```

```bash
pip install -r requirements.txt
```

```bash
uvicorn main:app --reload
```

---

# 🚀 Workflow

```
Upload Repository

↓

Repository Parsing

↓

Framework Detection

↓

Dependency Extraction

↓

AI Repository Analysis

↓

Architecture Generation

↓

Documentation Generation

↓

Developer Chat Interface
```

---

# 🧪 Future Roadmap

* GitHub OAuth Integration
* Pull Request Analysis
* Multi-language Repository Support
* VS Code Extension
* JetBrains Plugin
* Slack Integration
* Team Collaboration
* Repository Version Comparison
* Architecture Drift Detection
* Technical Debt Scoring
* Security Hotspot Detection
* AI Code Review
* Code Ownership Analysis
* Multi-Repository Search
* Enterprise Dashboard

---

# 🎯 Hackathon Value Proposition

## Problem

Developers spend significant time understanding unfamiliar codebases.

---

## Solution

ContextLens enables developers to understand software systems through AI-powered repository analysis, automated documentation, architecture visualization, and natural-language interaction.

---

## Impact

* Faster developer onboarding
* Reduced documentation effort
* Improved knowledge sharing
* Easier maintenance of large projects
* Better collaboration across engineering teams

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Authors

**Palash Wagh**

Instrumentation Engineering Student | Software Developer | AI & Full-Stack Enthusiast

---

<div align="center">

### ⭐ If you found this project interesting, consider giving it a Star!

**Built with ❤️ to help developers understand code, faster.**

</div>
