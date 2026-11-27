
# FISHER Dashboard

**An AI-powered security operations command center for intelligent monitoring, detection review, and incident management.**

FISHER is a responsive security operations dashboard designed to bring CCTV monitoring, AI detection review, security alerts, operational analytics, reporting, and user access management into a unified interface.

The project is currently a **frontend MVP** developed for product demonstrations, stakeholder walkthroughs, and interaction design validation. It uses realistic mock data and local UI state. It does not yet connect to a production API or database.

## Product Overview

FISHER is structured around the operational workflows of a centralized security monitoring environment.

### Core Modules

| Module | Description |
|---|---|
| Dashboard | High-level overview of camera availability, operational metrics, and security alerts. |
| Live CCTV | Camera availability cards with online/offline states and expandable feed views. |
| Alert Center | Centralized alert management with unread, new, acknowledged, critical, and resolved states. |
| Detection Results | Filterable detection records with severity indicators and status management. |
| Statistics | Operational metrics, severity distribution, percentages, and detection details. |
| Reports | Report summaries with status tracking and detailed views. |
| User Management | User creation, role management, account status controls, and user details. |

The sidebar follows an operational navigation sequence:

`Dashboard → Live CCTV → Alert Center → Detection Results → Statistics → Reports → User Management`

Navigation uses URL hash targets to keep sections linkable and browser navigation predictable.

## Alert Management

The Alert Center provides the prototype's primary interactive incident-management workflow.

Operators can:

- Filter alerts by all, new, acknowledged, or critical status.
- Mark individual alerts or all alerts as read.
- Acknowledge and resolve alerts.
- Open detailed investigation modals.
- Select SMS and Telegram notification channels.
- View notification states: ready, sending, sent, or failed.

The notification interface is designed to communicate delivery status through the `/api/alerts/:id/notify` endpoint. Actual notification delivery requires a connected backend service. The interface represents request failures gracefully.

## Interface & Design System

The dashboard follows a responsive security operations interface designed for clarity, accessibility, and efficient information scanning.

- Responsive fixed sidebar with independent navigation scrolling.
- Desktop and mobile layouts.
- Persistent light and dark themes using `localStorage`.
- Ethiopian-inspired green, yellow, and red status accents.
- Accessible focus states and semantic buttons and links.
- Consistent card surfaces, status indicators, empty states, and detail modals.
- Compact mobile typography for narrow dashboard layouts.

## Technology Stack

| Technology | Purpose |
|---|---|
| React 19 | Component-based user interface |
| TypeScript | Static typing and maintainable application code |
| Vite | Development server and production build tooling |
| Custom CSS | Responsive styling and design system |
| Mock Service Layer | Local dashboard data access |
| Oxlint | Code quality and static analysis |

## Project Structure

```text
fisher-dashboard/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── alerts/
│   │   ├── cctv/
│   │   ├── common/
│   │   ├── detections/
│   │   ├── layout/
│   │   ├── reports/
│   │   ├── statistics/
│   │   └── users/
│   ├── data/
│   ├── pages/
│   ├── services/
│   ├── types/
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/Emanmohammednur/Fisher-Dashboard.git
```

Navigate to the project directory:

```bash
cd Fisher-Dashboard
```

Install dependencies:

```bash
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

Open the local URL provided by Vite, usually `http://localhost:5173`.

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Code Quality

```bash
npm run lint
```

## Data Architecture

The prototype uses a lightweight mock-data architecture:

- `src/data/dashboardData.ts` contains mock domain data.
- `src/services/dashboardService.ts` provides the data access layer.
- `src/types/dashboard.ts` defines shared TypeScript contracts.

This separation allows the mock service layer to be replaced with production API integrations while maintaining the existing component structure and dashboard workflows.

## Current Status & Future Development

FISHER is currently a frontend MVP focused on demonstrating security operations workflows and validating the dashboard experience.

Potential next development stages include:

- Real-time CCTV stream integration.
- AI-powered object and activity detection.
- Backend API and database integration.
- Real-time security alerts and notification delivery.
- Authentication and role-based access control.
- Expanded analytics and reporting.
- Automated component and browser testing.

## Quality & Validation

The current project supports the following validation commands:

```bash
npm run lint
npm run build
```

These commands provide static code analysis and production build verification.

Additional automated testing can be introduced as the application evolves.

## License

This project is intended for educational, demonstration, and product-design purposes.
