# TawjeehAI - AI Consulting and Development Platform

## Overview

TawjeehAI is a bilingual (Arabic-English) AI consulting and development company website built with a modern full-stack architecture. The platform showcases AI services, captures contact inquiries, and provides an engaging user experience with animated neural network visualizations and particle effects.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: React Query (TanStack Query) for server state
- **Internationalization**: i18next for bilingual support (Arabic/English)
- **Build Tool**: Vite with hot module replacement

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Type Safety**: TypeScript throughout the stack
- **Database**: PostgreSQL with Drizzle ORM
- **Email Service**: Nodemailer with Ethereal for testing
- **Session Management**: In-memory storage with future database integration
- **API Design**: RESTful endpoints with Zod validation

### UI/UX Features
- **RTL Support**: Full right-to-left layout support for Arabic
- **Responsive Design**: Mobile-first responsive design
- **Animations**: Custom neural network animations and particle backgrounds
- **Component Library**: shadcn/ui with Radix UI primitives

## Key Components

### Database Schema
- **Users Table**: Basic user management structure
- **Contact Messages Table**: Stores form submissions with metadata
- **Migrations**: Drizzle-managed database migrations

### Email System
- **Contact Form Processing**: Captures and validates user inquiries
- **Email Notifications**: Sends formatted emails to business owner
- **Testing Infrastructure**: Ethereal email for development testing

### Neural Network Visualization
- **Custom Components**: Interactive neural network animations
- **Particle System**: Background particle effects using tsparticles
- **Performance Optimized**: Lightweight animations with requestAnimationFrame

### Internationalization
- **Dual Language Support**: Arabic (default) and English
- **Dynamic Direction**: Automatic RTL/LTR switching
- **Cultural Adaptation**: Proper Arabic font selection and spacing

## Data Flow

1. **User Interaction**: Users navigate the bilingual interface
2. **Contact Form**: Submissions are validated client-side with Zod
3. **API Processing**: Server validates and stores contact messages
4. **Email Notification**: Automated email sent to business owner
5. **Response Feedback**: User receives confirmation of successful submission

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless connection
- **@radix-ui/react-***: Accessible UI primitives
- **react-i18next**: Internationalization framework
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Type-safe database toolkit
- **nodemailer**: Email delivery service

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type checking and compilation
- **Tailwind CSS**: Utility-first CSS framework
- **ESBuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Build Process
- **Client Build**: Vite builds optimized React application
- **Server Build**: ESBuild bundles Node.js server with external packages
- **Asset Management**: Static assets served from dist/public

### Environment Configuration
- **Database**: PostgreSQL connection via DATABASE_URL
- **Email**: Nodemailer configuration for production SMTP
- **Development**: Hot reload with Vite middleware integration

### Production Considerations
- **Database**: Expects PostgreSQL database provisioning
- **Email Service**: Currently uses Ethereal for testing, needs production SMTP
- **Static Assets**: Optimized build output for CDN deployment

## Changelog
- July 07, 2025. Added logo story section with authentic branding:
  • Created dedicated logo story section with user's Arabic narrative
  • Integrated actual TawjeehAI logo icon with animated visual effects
  • Added bilingual support for logo story content (Arabic/English)
  • Implemented visual interpretation section with logo analysis
  • Added interactive element cards explaining logo components
  • Enhanced navigation with logo story menu item
  • Positioned section strategically between Services and Features
- July 07, 2025. Added extensive creative enhancements:
  • Advanced scroll-triggered animations with intersection observers
  • Magnetic button effects and 3D perspective cards
  • Typing animation for hero title with multilingual text rotation
  • Interactive neural network loading spinners
  • Floating elements background system
  • Scroll progress indicator and cursor trail effects
  • Enhanced particle backgrounds with morphing gradients
  • Glitch text effects and text shimmer animations
  • Improved contact form with animated loading states
  • Staggered reveal animations throughout all sections
- July 06, 2025. Updated theme to dark mode with gradient color scheme (#6ad4e2, #997fb8, #f3c575) and replaced logo
- July 02, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.