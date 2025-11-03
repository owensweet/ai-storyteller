# AI Storyteller Frontend

This is the Next.js frontend for the AI Storyteller application.

## Features

- User authentication (login/register)
- User dashboard with API usage tracking
- AI story generation interface
- Admin panel for user management
- Responsive design with Tailwind CSS

## Pages

- `/` - Home page (redirects to login)
- `/auth/login` - User login
- `/auth/register` - User registration
- `/dashboard` - User dashboard
- `/admin` - Admin panel (admin only)
- `/llm-test` - AI story generation

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env.local` file:
   ```bash
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Test Credentials

- **Admin**: admin@admin.com / 111
- **User**: john@john.com / 123

## API Integration

The frontend communicates with the backend at `http://localhost:3001` by default. 
Make sure the backend server is running before starting the frontend.

## Environment Variables

- `NEXT_PUBLIC_API_URL` - Backend API URL

## Technologies

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Client-side routing
- Cookie-based authentication