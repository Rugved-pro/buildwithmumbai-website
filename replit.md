# BuildWithMumbai - Civic Infrastructure Reporting Platform

## Overview

BuildWithMumbai is a student-led initiative from Group 36 at SPIT, designed as a **fully frontend-only** civic engagement platform that enables Mumbai citizens to report infrastructure issues. The application is built with React, TypeScript, and Tailwind CSS, featuring a modern UI with shadcn/ui components and a complete complaint reporting system that integrates with external email services. The application includes a minimal Express server for development that serves the React frontend via Vite.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: React Hook Form for form handling with client-side validation
- **Build Tool**: Vite for fast development and optimized production builds

### Deployment Architecture
- **Static Site**: Pure frontend deployment with no backend components
- **Development Server**: Vite for local development and hot reload
- **Build Output**: Static HTML, CSS, and JavaScript files
- **Hosting**: Can be deployed on any static hosting service (Netlify, Vercel, GitHub Pages, etc.)

## Key Components

### Core Pages
- **Home Page**: Hero section with animated elements, intro section, and navigation
- **About Page**: Mission statement and feature highlights with animated cards
- **Report Issues Page**: Comprehensive complaint form with file upload capabilities
- **Contact Page**: Team contact information and communication channels
- **Thank You Page**: Post-submission confirmation with next steps

### UI Components
- **Navigation**: Fixed header with mobile-responsive menu and smooth hover animations
- **Hero Section**: Full-screen landing with animated floating elements and feature cards
- **Form Components**: Validated forms using react-hook-form and zod schemas
- **Interactive Elements**: Page transition animations, hover effects, and responsive design patterns
- **Page Transitions**: Custom CSS animations for smooth page switching with fade-in and slide-up effects

### Form System
- **Validation**: Zod schemas for type-safe form validation
- **File Upload**: Image attachment support for complaint reports
- **Email Integration**: FormSubmit.co service for frontend-only email delivery
- **User Experience**: Multi-step validation with real-time feedback

## Data Flow

### Frontend Data Flow
1. **User Interaction**: Users navigate through static pages and interact with the complaint form
2. **Form Validation**: Client-side validation using react-hook-form and zod schemas
3. **Data Submission**: Form data sent directly to FormSubmit.co via POST request
4. **Email Delivery**: External service handles email delivery to buildwithmumbai@gmail.com
5. **User Feedback**: Success confirmation page with next steps information

### Development Data Flow
1. **Database Schema**: Drizzle ORM manages PostgreSQL schema with user tables
2. **Session Management**: Express sessions stored in PostgreSQL
3. **API Routes**: Minimal Express routes for potential future backend integration
4. **Storage Interface**: Abstract storage layer with in-memory implementation for development

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form, TanStack Query
- **UI Framework**: Radix UI primitives, Lucide React icons, shadcn/ui components
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Validation**: Zod for schema validation and type safety
- **Styling**: Tailwind CSS, class-variance-authority, clsx for utility classes

### Development Tools
- **Build System**: Vite with TypeScript support and React plugin
- **Code Quality**: TypeScript for type checking, ESModules for modern JS
- **Development Server**: Express with Vite middleware for hot reload
- **Replit Integration**: Custom plugins for development environment

### External Services
- **Email Service**: FormSubmit.co for handling form submissions without backend
- **Database Hosting**: Neon Database for PostgreSQL hosting
- **Font Loading**: Google Fonts (Inter) for typography
- **Development Platform**: Replit for cloud-based development

## Deployment Strategy

### Build Configuration
- **Frontend Build**: Vite builds React app to `dist/public` directory
- **Backend Build**: esbuild compiles Express server to `dist/index.js`
- **Asset Optimization**: Vite handles code splitting, tree shaking, and asset optimization
- **Environment Variables**: DATABASE_URL required for production deployment

### Development Workflow
- **Local Development**: `npm run dev` starts development server with hot reload
- **Type Checking**: `npm run check` validates TypeScript across the entire codebase
- **Database Management**: `npm run db:push` applies schema changes to database
- **Production Build**: `npm run build` creates optimized production assets

### Production Deployment
- **Static Assets**: Frontend served from `dist/public` directory
- **Server Process**: Node.js Express server serves static files and handles API routes
- **Database Connection**: PostgreSQL connection via environment variable
- **Session Storage**: PostgreSQL-backed session management for scalability

The architecture prioritizes simplicity and frontend-first development while maintaining the flexibility to add backend functionality in the future. The complaint form works entirely through external services, making the application deployable as a static site while still providing full functionality for civic engagement and infrastructure reporting.