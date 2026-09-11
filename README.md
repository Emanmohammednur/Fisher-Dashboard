# FISHER Dashboard

A modern operations dashboard for monitoring CCTV feeds, AI-driven detections, system alerts, reports, and user access from a single command center.

FISHER is a front-end dashboard concept built for fisheries and security operations teams. It simulates live monitoring workflows using mock data and interactive UI components so product stakeholders can review operational experiences, workflows, and interface behavior without requiring a backend.

## Overview

FISHER provides a centralized control surface for operators to:

- monitor live camera availability and health
- review detections by severity and status
- analyze operational trends and performance metrics
- inspect and filter reports and alerts
- manage users, permissions, and access roles
- respond quickly from a unified dashboard view

This project is designed for product demos, stakeholder review, and UI validation in an MVP or prototype stage.

## Why this project

Modern operational teams need one place to monitor activity, assess risk, and respond to incidents. FISHER brings these concerns into a cohesive dashboard experience that emphasizes clarity, speed, and high-visibility decision-making.

## Key Features

- Sidebar-based navigation across core operational modules
- Live CCTV monitoring cards and feed summaries
- Detection review workflow with severity-based prioritization
- Historical and real-time analytics views for operational insight
- Alert center with unread and overdue item tracking
- Report generation and summary panels
- User management for role and status oversight
- Theme switching with a polished dark-mode-first interface
- Responsive, modern UI built for product and demo presentation

## Tech Stack

- React 19
- TypeScript
- Vite
- CSS / custom styling
- Mock service layer for dashboard data

## Dashboard Modules

The interface is structured around the following operational areas:

- CCTV monitoring
- Detection review
- Statistics and trends
- Reports and summaries
- User management
- System alerting and notifications

## Project Structure

```bash
fisher-dashboard/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── cctv/
│   │   ├── detections/
│   │   ├── layout/
│   │   ├── reports/
│   │   ├── statistics/
│   │   └── users/
│   ├── data/
│   ├── pages/
│   ├── services/
│   ├── types/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── README.md
├── .gitignore
└── .vscode/
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Install dependencies

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

Then open the application in your browser at:

```bash
http://localhost:5173
```

### Production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Available Scripts

```bash
npm run dev      # start the Vite development server
npm run build    # compile TypeScript and create a production build
npm run preview  # serve the production build locally
npm run lint     # run ESLint checks
```

## Data and Architecture Notes

- The app uses mock data located in the `src/data` and `src/services` layers.
- This is a front-end prototype and does not currently connect to a real API or database.
- The architecture is intentionally lightweight to support rapid UI iteration and concept validation.
- Components are organized by feature area to make future expansion easier.

## Current Status

This project is in an MVP/demo stage and is best suited for:

- UI walkthroughs
- product concept validation
- stakeholder presentations
- frontend experimentation

## License

This project is intended for educational, demo, and product-design use.

## Roadmap

Planned enhancements may include:

- real backend integration
- live websocket or polling updates
- authentication and role-based access control
- richer filtering and search across detections and reports
- charts and analytics tied to actual operational data

## Contributing

This project is currently a UI-focused prototype, but contributions are welcome if you want to help expand functionality, improve UX, or connect the dashboard to real data sources.
