# Overview

This is a personal portfolio website for Harshit Aggarwal, an AI-powered email marketing expert and PGDM student. The application showcases Harshit's expertise in creating AI-driven email campaigns, featuring his professional experience, skills, case studies, and campaign results. The site includes interactive elements like animated counters, email template previews, and a contact form to demonstrate his marketing capabilities and attract potential employers or clients.

# User Preferences

Preferred communication style: Simple, everyday language.

# Migration Progress

**Status**: ✅ COMPLETED - Full migration and development finished
**Date**: August 12, 2025
**Actions taken**: 
- ✅ Migrated from Replit Agent to Replit environment
- ✅ Built complete AI email marketing portfolio website
- ✅ Implemented comprehensive database with PostgreSQL
- ✅ Added live email preview system like requested
- ✅ Created full customization capabilities throughout the website

# System Architecture

## Frontend Architecture
The application uses a modern React-based single-page application (SPA) architecture with TypeScript. The frontend is built with Vite as the build tool and bundler, providing fast development experience and optimized production builds. The application follows a component-based architecture with clear separation of concerns:

- **UI Framework**: React 18 with TypeScript for type safety
- **Styling**: Tailwind CSS with custom design system using CSS variables for theming
- **Component Library**: Radix UI primitives with shadcn/ui components for consistent, accessible UI elements
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management and data fetching
- **Animation**: Custom CSS animations and intersection observer-based counter animations

## Backend Architecture
The backend uses Express.js with TypeScript in a lightweight REST API structure. The application follows a modular architecture pattern:

- **Server Framework**: Express.js with TypeScript for type safety
- **Development Setup**: Vite middleware integration for hot module replacement in development
- **Storage Layer**: Abstracted storage interface with in-memory implementation (MemStorage) for development
- **Route Structure**: Centralized route registration with API prefix convention
- **Error Handling**: Global error handling middleware with structured error responses

## Data Storage Solutions
The application uses a comprehensive PostgreSQL database with full optimization and customization:

- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Database**: PostgreSQL with Neon serverless integration
- **Tables**: Complete email marketing schema including:
  - Users table with authentication and profiles
  - Email templates with categories (welcome, promotional, newsletter)
  - Email campaigns with performance tracking
  - Subscribers management with segmentation
  - Email analytics for detailed performance metrics  
  - Demo emails for template preview functionality
- **Indexes**: Optimized database indexes for performance on all key queries
- **Relations**: Proper foreign key relationships with cascading operations
- **Schema**: Type-safe schema with validation using Zod integration

## Authentication and Authorization
The application includes a basic user authentication structure:

- **User Model**: Simple username/password schema with UUID primary keys
- **Session Management**: Express session handling with PostgreSQL session store (connect-pg-simple)
- **Schema Validation**: Zod schemas integrated with Drizzle for runtime type validation

## External Dependencies

### UI and Design
- **Radix UI**: Comprehensive collection of accessible UI primitives for dialogs, dropdowns, navigation, and form controls
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens and dark theme support
- **Lucide React**: Icon library for consistent iconography
- **Font Awesome**: Additional icon library for specific marketing and social media icons
- **Google Fonts**: Inter font family for modern typography

### Development and Build Tools
- **Vite**: Fast build tool and development server with React plugin support
- **TypeScript**: Static type checking and enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer for browser compatibility

### Database and ORM
- **Drizzle ORM**: Type-safe ORM with PostgreSQL dialect support
- **Neon Database**: Serverless PostgreSQL database provider
- **Drizzle Kit**: Migration and introspection toolkit

### Form Handling and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Hookform Resolvers**: Integration layer for validation libraries
- **Zod**: Runtime type validation and schema definition

### State Management and Data Fetching
- **TanStack React Query**: Server state management with caching, background updates, and optimistic updates
- **Wouter**: Lightweight routing library for single-page applications

### Animation and Interaction
- **Embla Carousel**: Touch-friendly carousel component for showcasing work samples
- **Class Variance Authority**: Utility for creating type-safe component variants
- **CLSX**: Conditional className utility for dynamic styling

### Deployment and Platform
- **Replit**: Cloud-based development and deployment platform with integrated tooling
- **Replit Vite Plugins**: Development-specific plugins for error handling and project mapping

## Key Features Implemented

### Live Email Preview System
- **Template Categories**: Welcome, Promotional, Newsletter templates
- **Interactive Preview**: Real-time HTML email preview with iframe rendering  
- **Template Selection**: Category-based template browsing with performance metrics
- **Demo Email Sending**: Send sample templates to user's inbox for testing
- **Database Integration**: All templates stored in PostgreSQL with full CRUD operations

### Full Website Customization
- **6 Complete Pages**: Home, About, Services, Portfolio, Email Preview, Contact
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Interactive Elements**: Animated counters, hover effects, smooth transitions
- **Professional UI**: shadcn/ui components with consistent dark theme
- **Database-Driven Content**: All content customizable through database

### Email Marketing Tools
- **Template Management**: Create, edit, delete email templates
- **Performance Tracking**: Open rates, click rates, engagement metrics
- **Subscriber Management**: Full subscriber lifecycle management
- **Campaign Analytics**: Detailed campaign performance tracking
- **Demo System**: Live email preview and sending capabilities