# AI Storyteller Backend

This is the Express.js backend for the AI Storyteller application.

## Features

- RESTful API endpoints
- JWT authentication with httpOnly cookies
- SQLite database with user management
- API usage tracking (20 free calls per user)
- LLM integration for story generation
- Admin panel functionality
- Security features (CORS, Helmet, Rate limiting)

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user info

### Users
- `GET /api/users/profile` - Get user profile and API usage

### LLM
- `POST /api/llm` - Generate AI stories (requires authentication)

### Admin (Admin only)
- `GET /api/admin/users` - Get all users
- `GET /api/admin/stats` - Get system statistics
- `POST /api/admin/users/:userId/reset-api-calls` - Reset user's API calls

## Default Users

- **Admin**: admin@admin.com / 111
- **Test User**: john@john.com / 123

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env` file (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

3. Update the `.env` file with your LLM_BASE_URL and other configurations

4. Start the server:
   ```bash
   # Development
   npm run dev
   
   # Production
   npm start
   ```

## Environment Variables

- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port (default: 3001)
- `JWT_SECRET` - Secret key for JWT tokens
- `FRONTEND_URL` - Frontend URL for CORS
- `LLM_BASE_URL` - Your hosted LLM API endpoint
- `DB_PATH` - SQLite database file path

## Database

The application uses SQLite with the following tables:
- `users` - User accounts, authentication, and API usage tracking

The database is automatically created and seeded with default users when the server starts.

## Security Features

- Password hashing with bcrypt
- JWT tokens stored in httpOnly cookies
- CORS protection
- Helmet security headers
- Rate limiting
- Input validation
- SQL injection prevention