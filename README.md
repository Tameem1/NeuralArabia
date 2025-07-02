# TawjeehAI - AI Consulting and Development Platform

A modern, bilingual (Arabic-English) AI consulting and development company website built with a full-stack TypeScript architecture. The platform showcases AI services, captures contact inquiries, and provides an engaging user experience with animated neural network visualizations and particle effects.

## 🌟 Features

- **Bilingual Support**: Native Arabic and English language support with RTL layout
- **Interactive Animations**: Custom neural network animations and particle backgrounds
- **Contact System**: Functional contact form with email notifications
- **Responsive Design**: Mobile-first responsive design that works on all devices
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Type Safety**: Full TypeScript implementation across frontend and backend

## 🏗️ Architecture

### Frontend
- **React 18** with TypeScript
- **Wouter** for client-side routing
- **Tailwind CSS** with shadcn/ui component library
- **React Query** (TanStack Query) for server state management
- **i18next** for internationalization
- **Vite** for build tooling and hot module replacement

### Backend
- **Node.js** with Express.js
- **TypeScript** throughout the stack
- **PostgreSQL** with Drizzle ORM
- **Nodemailer** for email functionality
- **Zod** for API validation

### UI/UX
- **RTL Support**: Full right-to-left layout support for Arabic
- **Neural Network Animations**: Custom interactive visualizations
- **Particle Effects**: Background particle system using tsparticles
- **Accessible Components**: Built with Radix UI primitives

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or higher
- PostgreSQL database (optional for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tawjeehai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/tawjeehai
   NODE_ENV=development
   ```
   > Note: For development, the app uses in-memory storage by default

4. **Start the development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5000`

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── layout/     # Layout components (header, footer)
│   │   │   ├── sections/   # Page sections (hero, about, services)
│   │   │   ├── ui/         # shadcn/ui components
│   │   │   └── neural-network/ # Custom animations
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions and configurations
│   │   └── locales/        # Translation files
├── server/                 # Backend Express application
│   ├── routes.ts           # API route definitions
│   ├── storage.ts          # Data storage interface
│   ├── email.ts            # Email service
│   └── index.ts            # Server entry point
├── shared/                 # Shared types and schemas
│   └── schema.ts           # Database schema and validation
└── dist/                   # Built application files
```

## 🌐 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run preview` - Preview production build locally

## 🔧 Configuration

### Database Setup

The application supports both PostgreSQL and in-memory storage:

- **Development**: Uses in-memory storage by default
- **Production**: Requires PostgreSQL database via `DATABASE_URL`

### Email Configuration

Currently configured with Ethereal for testing:
- Development emails are previewed via Ethereal test accounts
- Production requires SMTP configuration in `server/email.ts`

### Internationalization

Language files are located in `client/src/locales/`:
- `ar.json` - Arabic translations
- `en.json` - English translations

## 🚀 Deployment

### Replit Deployment

This project is optimized for Replit deployment:

1. The build process is configured in `.replit`
2. Run `npm run build` to create production assets
3. The application will be available on your Replit domain

### Manual Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Set environment variables**
   - `DATABASE_URL` - PostgreSQL connection string
   - `NODE_ENV=production`

3. **Start the production server**
   ```bash
   npm start
   ```

## 🛠️ Development

### Adding New Components

Components follow the shadcn/ui pattern:
```typescript
import { cn } from "@/lib/utils"

interface ComponentProps {
  className?: string
  // other props
}

export function Component({ className, ...props }: ComponentProps) {
  return (
    <div className={cn("base-styles", className)} {...props}>
      {/* component content */}
    </div>
  )
}
```

### Adding New API Routes

API routes are defined in `server/routes.ts`:
```typescript
app.post('/api/endpoint', async (req, res) => {
  // Validate with Zod
  const data = insertSchema.parse(req.body)
  
  // Use storage interface
  const result = await storage.method(data)
  
  res.json(result)
})
```

### Adding Translations

Add new translation keys to both `ar.json` and `en.json`:
```json
{
  "newSection": {
    "title": "عنوان جديد",
    "description": "وصف جديد"
  }
}
```

## 🎨 Styling

The project uses Tailwind CSS with custom configurations:

- **Colors**: Defined in `tailwind.config.ts`
- **Components**: Located in `client/src/components/ui/`
- **Custom CSS**: Additional styles in `client/src/index.css`

## 📧 Contact Form

The contact form includes:
- Client-side validation with Zod
- Email notifications via Nodemailer
- Success/error feedback to users
- Automatic email preview in development

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is proprietary software for TawjeehAI.

## 📞 Support

For support and inquiries, please use the contact form on the website or reach out through the provided contact channels.

---

Built with ❤️ for the future of AI consulting and development.